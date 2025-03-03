import React, { useEffect, useState } from "react";
import testimg from "../FPT Antam.jpg";
import { Iproduct } from "./interface/products";
import { Form, useNavigate } from "react-router";
import { getAllproducts } from "./service/products";
import step1 from "../img/step1.jpg";
import step2 from "../img/step2.jpg";
import step3 from "../img/step3.jpg";
import banner from "../img/bannerfpt.webp"
import axios from "axios";

type Props = {};

const Content = (props: Props) => {
  const [products, setProduct] = useState<Iproduct[]>([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Iproduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [internetProducts, setInternetProducts] = useState<Iproduct[]>([]);
  const [internetTVProducts, setInternetTVProducts] = useState<Iproduct[]>([]);
  
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await getAllproducts({ limit: 1000, page: 1 });
  
      console.log("API Response:", data?.docs);
  
      setProduct(data?.docs || []);
    } catch (error) {
      console.error("❌ Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  
  useEffect(() => {
    if (products.length > 0) {
      console.log("Filtering products...");
      setInternetProducts(products.filter(product => product.category.name === "Internet"));
      setInternetTVProducts(products.filter(product => product.category.name === "Internet + Truyền hình"));
    }
  }, [products]); // ✅ Runs when `products` updates
  
  // ✅ Debugging
  useEffect(() => {
    console.log("Internet Products:", internetProducts);
    console.log("Internet + TV Products:", internetTVProducts);
  }, [internetProducts, internetTVProducts]);

  const openModal = (product: Iproduct) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCustomerDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = async (values: any) => {
    try {
      const payload = {
        ...values,
        name: customerDetails.name,
        phone: customerDetails.phone,
        email: customerDetails.email,
        address: customerDetails.address,
        notes: customerDetails.notes,
        // categoryID: values.category,
        // status: true,
      };
      const response = await axios.post(
        "http://localhost:28017/registerwifi",
        payload
      );
      console.log(response.data);

      alert(response.data.message);
      setCustomerDetails({
        name: "",
        phone: "",
        email: "",
        address: "",
        notes: "",
      });
    } catch (error) {
      console.error("❌ Lỗi khi gửi form:", error);
    }
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="banner">
        <img src={banner} alt="" />
      </div>
    {/* Internet-only products */}
    <div className="title pt-[50px] pb-[50px]">
      <h2 className="text-3xl font-bold text-center mb-4">
        Internet cáp quang tốc độ cao, kết nối ổn định
      </h2>
      <p className="text-gray-600 text-center">
        Trải nghiệm Internet siêu tốc cho mọi nhu cầu giải trí, chơi game và làm việc tại nhà
      </p>
    </div>
  
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {internetProducts.map((product, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
            <div className="img">
              <img src={product.img[0]} alt={product.name} className="w-full h-60 object-cover" />
            </div>
            <div className="bg-blue-500 p-4 text-white text-center font-bold">
              {product.name}
            </div>
            <div className="p-6 text-center flex flex-col flex-grow">
            <div className="chitu text-center text-gray-600 pt-1">Chỉ từ</div>

              <p className="text-lg py-2 font-semibold">
                {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(product.price)}
                <span className="pl-[10px] text-sm text-[#656565]"> / tháng</span>
              </p>
              <p className="text-gray-600 m-auto text-[15px] line-clamp-6 overflow-hidden">
                {product.moTa}
              </p>
              <button
                className="mt-[20px] bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 w-full"
                onClick={() => openModal(product)}
              >
                Đăng ký ngay
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>


    <div className="title pt-[50px] pb-[50px]">
      <h2 className="text-3xl font-bold text-center mb-4">
      Combo Internet siêu tiết kiệm
      </h2>
      <p className="text-gray-600 text-center">
      Tận hưởng internet tốc độ cao tại nhà, giữ cho toàn bộ ngôi nhà được phủ sóng Internet & Wi-Fi
      </p>
    </div>



    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {internetTVProducts.map((product, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
            <div className="img">
              <img src={product.img[0]} alt={product.name} className="w-full h-60 object-cover" />
            </div>
            <div className="bg-blue-500 p-4 text-white text-center font-bold">
              {product.name}
            </div>
            <div className="p-6 text-center flex flex-col flex-grow">
            <div className="chitu text-center text-gray-600 pt-2">Chỉ từ</div>

              <p className="text-lg py-3 font-semibold">
                {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(product.price)}
                <span className="pl-[10px] text-sm text-[#656565]"> / tháng</span>
              </p>
              <p className="text-gray-600 m-auto text-[15px] line-clamp-6 overflow-hidden">
                {product.moTa}
              </p>
              <button
                className="mt-[20px] bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 w-full"
                onClick={() => openModal(product)}
              >
                Đăng ký ngay
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  
    {/* Modal đăng ký */}
    {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/10 backdrop-blur-md p-4">
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg max-w-lg sm:max-w-xl md:max-w-3xl w-full">
      {/* Hình ảnh */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <img
          className="rounded-lg w-full h-auto md:max-h-[350px] object-cover"
          src={selectedProduct?.img[0]}
          alt={selectedProduct?.name}
        />
      </div>

      {/* Nội dung form */}
      <div className="p-6 w-full md:w-1/2">
        <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">
          Gói đăng ký: {selectedProduct?.name}
        </h2>
        <h2 className="text-base sm:text-lg font-bold mb-4">Thông tin đăng ký</h2>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(customerDetails);
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Họ và tên *</label>
              <input
                type="text"
                name="name"
                value={customerDetails.name}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                placeholder="Nhập họ tên"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Số điện thoại</label>
              <input
                type="tel"
                name="phone"
                value={customerDetails.phone}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                placeholder="Nhập số điện thoại"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={customerDetails.email}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                placeholder="Nhập email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Địa chỉ *</label>
              <input
                type="text"
                name="address"
                value={customerDetails.address}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                placeholder="Nhập địa chỉ"
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-base sm:text-lg font-bold">Ghi chú</h3>
            <textarea
              name="notes"
              value={customerDetails.notes}
              onChange={handleInputChange}
              className="mt-2 block w-full border border-gray-300 p-2 rounded-md"
              rows={4}
              placeholder="Lưu ý cho đơn hàng"
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row justify-end sm:space-x-2 mt-4">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded-lg mb-2 sm:mb-0"
              onClick={closeModal}
            >
              Đóng
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Xác nhận đăng ký
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}

  
    {/* Quy trình làm việc */}
    <div className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold text-black">QUY TRÌNH LÀM VIỆC</h2>
      <p className="text-xl text-orange-500 mt-2">ĐƠN GIẢN - NHANH CHÓNG</p>
      <div className="mt-8 flex flex-col sm:flex-col md:flex-row justify-center gap-6">
        {[step1, step2, step3].map((step, index) => (
          <div key={index} className="relative bg-orange-500 rounded-xl overflow-hidden w-full max-w-sm shadow-lg">
            <img src={step} alt={`Bước ${index + 1}`} className="w-full h-56 object-cover opacity-60" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <p className="font-bold text-lg">Bước {index + 1}:</p>
              <p className="font-bold text-md">{index === 0 ? "Chọn dịch vụ cần đăng ký" : index === 1 ? "Đăng ký form thông tin hoặc liên hệ Hotline để nhận tư vấn" : "Nhân viên lên hồ sơ và tiến hành lắp đặt dịch vụ"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Content;
