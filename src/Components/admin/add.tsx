import React, { useEffect, useState } from "react";
import { Form, Input, Select, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { Icategory } from "../interface/category";
import { getAllCategories } from "../service/category";
import { upload } from "../service/upload";
import { addProduct } from "../service/products";
import LoadingComponent from "../Loading";

type Variant = {
  size: string;
  quantity: number;
  price: number;
  discount?: number;
};

const Add = () => {
  const [category, setCategory] = useState<Icategory[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  
  const navigate = useNavigate();

  const showNotification = (
    type: "success" | "error",
    title: string,
    description: string
  ) => {
    notification[type]({
      message: title,
      description,
      placement: "topRight",
    });
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategory(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        showNotification(
          "error",
          "Lỗi",
          "Không thể tải danh mục, vui lòng thử lại!"
        );
      }
    };

    fetchCategories();

    // Generate product code
    const initialProductCode = generateProductCode();
    form.setFieldsValue({ masp: initialProductCode });
  }, [form]);

  const generateProductCode = () => {
    const prefix = "SP";
    const digits = new Set();
    let suffix = "";

    while (suffix.length < 5) {
      const digit = Math.floor(Math.random() * 10).toString();
      if (!digits.has(digit)) {
        digits.add(digit);
        suffix += digit;
      }
    }
    return prefix + suffix;
  };

  const activeCategories = category.filter((cat) => cat.status === "active");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...newFiles]);

    const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => [...prev, ...newPreviews]);
  };

  const uploadImages = async (files: File[]): Promise<string[]> => {
    const urls: string[] = [];
    for (const file of files) {
      const formData = new FormData();
      formData.append("images", file);

      try {
        const response = await upload(formData);
        urls.push(response.payload[0].url);
      } catch (error) {
        console.error("Error uploading image:", error);
        showNotification(
          "error",
          "Lỗi tải ảnh",
          "Không thể tải ảnh lên, vui lòng thử lại!"
        );
      }
    }
    return urls;
  };

  const onFinish = async (values: any) => {
    console.log("Form submitted with values:", values); // Debug
    setLoading(true);
    try {
      const imageUrls = await uploadImages(files);

      

      const payload = {
        ...values,
        img: imageUrls,
        categoryID: values.category,
        status: true,
      };

      console.log("Payload:", payload); // Debug before API call

      const response = await addProduct(payload);

      if (response?.status === 200) {
        showNotification("success", "Thành công", "Thêm sản phẩm thành công!");
        navigate("/admin/dashboard");
      } else {
        showNotification(
          "error",
          "Lỗi",
          "Không thể thêm sản phẩm, vui lòng thử lại!"
        );
      }

      form.resetFields();
      setFiles([]);
      setPreviews([]);
    } catch (error) {
      console.error("Error adding product:", error);
      showNotification(
        "error",
        "Lỗi",
        "Không thể thêm sản phẩm, vui lòng thử lại!"
      );
    } finally {
      setLoading(false);
    }
  };

  const removeImage = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => {
      URL.revokeObjectURL(prev[index]);
      return prev.filter((_, i) => i !== index);
    });
  };

  return (
    <>
      {loading && <LoadingComponent />}
      <div className="max-w-6xl mx-auto p-8 bg-white shadow-xl rounded-xl">
        <Form form={form} onFinish={onFinish} layout="vertical">
          <div className="space-y-6">
            {/* Product Code */}
            <Form.Item name="masp" label="Mã sản phẩm" required>
              <Input placeholder="Nhập mã sản phẩm" disabled />
            </Form.Item>

            {/* Product Name */}
            <Form.Item
              name="name"
              label="Tên sản phẩm"
              rules={[
                { required: true, message: "Vui lòng nhập tên sản phẩm!" },
              ]}
            >
              <Input placeholder="Nhập tên sản phẩm" />
            </Form.Item>

            {/* Description */}
            <Form.Item
              name="moTa"
              label="Mô tả sản phẩm"
              rules={[
                { required: true, message: "Vui lòng nhập mô tả sản phẩm!" },
              ]}
            >
              <Input.TextArea placeholder="Nhập mô tả sản phẩm" rows={5} />
            </Form.Item>

            {/* Description */}
            <Form.Item
              name="price"
              label="giá sản phẩm"
              rules={[
                { required: true, message: "Vui lòng nhập giá sản phẩm!" },
              ]}
            >
              <Input.TextArea placeholder="Nhập giá sản phẩm" rows={5} />
            </Form.Item>

            {/* Category */}

            <div>
                <label className="text-lg font-semibold text-gray-800">
                  Danh mục
                </label>
                <Form.Item
                  name="category"
                  rules={[
                    { required: true, message: "Vui lòng chọn danh mục!" },
                  ]}
                >
                  <Select
                    className="w-full rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-blue-600"
                    placeholder="Chọn danh mục"
                  >
                    {activeCategories.map((categoryID: Icategory) => (
                      <Select.Option
                        key={categoryID._id}
                        value={categoryID._id}
                      >
                        {categoryID.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>

            {/* Images */}
            <label className="text-lg font-semibold">Ảnh sản phẩm</label>
            <div className="flex flex-wrap gap-4">
              {previews.map((preview, index) => (
                <div key={index} className="relative w-28 h-28">
                  <img
                    src={preview}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-0 right-0 bg-red-600 text-white p-2 rounded-full"
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
            <Input type="file" multiple onChange={handleFileChange} />

            <Form.Item>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
              >
                Thêm mới sản phẩm
              </button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Add;
