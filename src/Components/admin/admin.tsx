import React, { useState, useEffect } from "react";
import { supabase } from "../../supabase";
import Footer from "../Footer";
import HeaderBanner from "../Header";

interface Product {
  id: string;
  name: string;
  price1: string;
  price2: string;
  downloadspeed: string;
  uploadspeed: string;
  internationalspeed: string;
  equipment: string;
  suitability: string;
  subscription: string;
  installationfee: string;
  created_at: string;
  category: string;
}

interface User {
  id: string;
  email: string;
  role: string;
  created_at: string;
}

const categories: Product["category"][] = ["Internet", "Combo InternetTV", "CompanyInternet"];
const filterOptions: (Product["category"] | "All")[] = ["All", ...categories];

const Admin: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(null);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: "",
    price1: "",
    price2: "",
    downloadspeed: "",
    uploadspeed: "",
    internationalspeed: "",
    equipment: "",
    suitability: "",
    subscription: "",
    installationfee: "",
    category: "Internet",
  });
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [filterCategory, setFilterCategory] = useState<Product["category"] | "All">("All");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<{ show: boolean; productId: string | null }>({
    show: false,
    productId: null,
  });
  const [showUserDeleteConfirm, setShowUserDeleteConfirm] = useState<{ show: boolean; userId: string | null; userEmail: string | null }>({
    show: false,
    userId: null,
    userEmail: null,
  });

  // Fetch current user email
  const fetchCurrentUser = async () => {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) {
      console.error("Error fetching current user:", error);
      alert("Không thể lấy thông tin người dùng hiện tại");
    } else {
      setCurrentUserEmail(user?.email || null);
    }
  };

  // Fetch products
  const fetchProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");
    if (error) {
      console.error("Error fetching products:", error);
      alert("Không thể tải danh sách sản phẩm");
    } else {
      setProducts(data);
    }
  };

  // Fetch users
  const fetchUsers = async () => {
    const { data, error } = await supabase.from("users").select("*");
    if (error) {
      console.error("Error fetching users:", error);
      alert("Không thể tải danh sách người dùng");
    } else {
      setUsers(data);
    }
  };

  // Create product
  const createProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price1 || !newProduct.downloadspeed || !newProduct.category) {
      alert("Vui lòng điền các trường bắt buộc");
      return;
    }

    const { data, error } = await supabase
      .from("products")
      .insert([newProduct])
      .select();
    if (error) {
      console.error("Error creating product:", error);
      alert("Không thể thêm sản phẩm");
    } else {
      setProducts([...products, ...data]);
      setNewProduct({
        name: "",
        price1: "",
        price2: "",
        downloadspeed: "",
        uploadspeed: "",
        internationalspeed: "",
        equipment: "",
        suitability: "",
        subscription: "",
        installationfee: "",
        category: "Internet",
      });
      alert("Thêm sản phẩm thành công");
    }
  };

  // Update product
  const updateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editProduct) return;

    const { data, error } = await supabase
      .from("products")
      .update({
        name: editProduct.name,
        price1: editProduct.price1,
        price2: editProduct.price2,
        downloadspeed: editProduct.downloadspeed,
        uploadspeed: editProduct.uploadspeed,
        internationalspeed: editProduct.internationalspeed,
        equipment: editProduct.equipment,
        suitability: editProduct.suitability,
        subscription: editProduct.subscription,
        installationfee: editProduct.installationfee,
        category: editProduct.category,
      })
      .eq("id", editProduct.id)
      .select();
    if (error) {
      console.error("Error updating product:", error);
      alert("Không thể cập nhật sản phẩm");
    } else {
      setProducts(products.map((p) => (p.id === editProduct.id ? data[0] : p)));
      setEditProduct(null);
      alert("Cập nhật sản phẩm thành công");
    }
  };

  // Delete product
  const deleteProduct = async (id: string) => {
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) {
      console.error("Error deleting product:", error);
      alert("Không thể xóa sản phẩm");
    } else {
      setProducts(products.filter((p) => p.id !== id));
      alert("Xóa sản phẩm thành công");
    }
    setShowDeleteConfirm({ show: false, productId: null });
  };

  // Delete user
  const deleteUser = async (id: string) => {
    const { error } = await supabase.from("users").delete().eq("id", id);
    if (error) {
      console.error("Error deleting user:", error);
      alert("Không thể xóa người dùng");
    } else {
      setUsers(users.filter((u) => u.id !== id));
      alert("Xóa người dùng thành công");
    }
    setShowUserDeleteConfirm({ show: false, userId: null, userEmail: null });
  };

  // Show delete confirmation for product
  const confirmDelete = (id: string) => {
    setShowDeleteConfirm({ show: true, productId: id });
  };

  // Show delete confirmation for user
  const confirmUserDelete = (id: string, email: string) => {
    if (email === "ungductrungtrung@gmail.com") {
      alert("Bạn không thể xóa tài khoản admin chính!");
      return;
    }
    setShowUserDeleteConfirm({ show: true, userId: id, userEmail: email });
  };

  // Cancel delete for product
  const cancelDelete = () => {
    setShowDeleteConfirm({ show: false, productId: null });
  };

  // Cancel delete for user
  const cancelUserDelete = () => {
    setShowUserDeleteConfirm({ show: false, userId: null, userEmail: null });
  };

  // Start editing product
  const startEditing = (product: Product) => {
    setEditProduct(product);
  };

  // Cancel editing product
  const cancelEditing = () => {
    setEditProduct(null);
  };

  // Filter products
  const filteredProducts =
    filterCategory === "All" ? products : products.filter((p) => p.category === filterCategory);

  useEffect(() => {
    fetchProducts();
    fetchUsers();
    fetchCurrentUser();
  }, []);

  return (
    <>
      <HeaderBanner />
      <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Quản lý sản phẩm</h1>

        {/* Create Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Thêm sản phẩm mới</h2>
          <form onSubmit={createProduct} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Tên sản phẩm *</label>
              <input
                type="text"
                value={newProduct.name || ""}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                placeholder="Nhập tên sản phẩm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Giá quận *</label>
              <input
                type="text"
                value={newProduct.price1 || ""}
                onChange={(e) => setNewProduct({ ...newProduct, price1: e.target.value })}
                className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                placeholder="Nhập giá quận"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Giá huyện</label>
              <input
                type="text"
                value={newProduct.price2 || ""}
                onChange={(e) => setNewProduct({ ...newProduct, price2: e.target.value })}
                className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                placeholder="Nhập giá huyện (không bắt buộc)"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Tốc độ tải xuống *</label>
              <input
                type="text"
                value={newProduct.downloadspeed || ""}
                onChange={(e) => setNewProduct({ ...newProduct, downloadspeed: e.target.value })}
                className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                placeholder="Nhập tốc độ tải xuống"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Tốc độ tải lên</label>
              <input
                type="text"
                value={newProduct.uploadspeed || ""}
                onChange={(e) => setNewProduct({ ...newProduct, uploadspeed: e.target.value })}
                className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                placeholder="Nhập tốc độ tải lên (không bắt buộc)"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Tốc độ quốc tế</label>
              <input
                type="text"
                value={newProduct.internationalspeed || ""}
                onChange={(e) => setNewProduct({ ...newProduct, internationalspeed: e.target.value })}
                className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                placeholder="Nhập tốc độ quốc tế (không bắt buộc)"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Danh mục *</label>
              <select
                value={newProduct.category || "Internet"}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                required
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Thiết bị</label>
              <input
                type="text"
                value={newProduct.equipment || ""}
                onChange={(e) => setNewProduct({ ...newProduct, equipment: e.target.value })}
                className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                placeholder="Nhập thiết bị"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Phù hợp với</label>
              <input
                type="text"
                value={newProduct.suitability || ""}
                onChange={(e) => setNewProduct({ ...newProduct, suitability: e.target.value })}
                className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                placeholder="Nhập đối tượng phù hợp"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Gói thuê bao</label>
              <input
                type="text"
                value={newProduct.subscription || ""}
                onChange={(e) => setNewProduct({ ...newProduct, subscription: e.target.value })}
                className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                placeholder="Nhập gói thuê bao"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Phí lắp đặt</label>
              <input
                type="text"
                value={newProduct.installationfee || ""}
                onChange={(e) => setNewProduct({ ...newProduct, installationfee: e.target.value })}
                className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                placeholder="Nhập phí lắp đặt"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full md:w-auto bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Thêm sản phẩm
              </button>
            </div>
          </form>
        </div>

        {/* Edit Form (if editing) */}
        {editProduct && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Sửa sản phẩm</h2>
            <form onSubmit={updateProduct} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Tên sản phẩm *</label>
                <input
                  type="text"
                  value={editProduct.name}
                  onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
                  className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Giá quận *</label>
                <input
                  type="text"
                  value={editProduct.price1}
                  onChange={(e) => setEditProduct({ ...editProduct, price1: e.target.value })}
                  className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Giá huyện</label>
                <input
                  type="text"
                  value={editProduct.price2 || ""}
                  onChange={(e) => setEditProduct({ ...editProduct, price2: e.target.value })}
                  className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                  placeholder="Nhập giá huyện (không bắt buộc)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Tốc độ tải xuống *</label>
                <input
                  type="text"
                  value={editProduct.downloadspeed}
                  onChange={(e) => setEditProduct({ ...editProduct, downloadspeed: e.target.value })}
                  className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Tốc độ tải lên</label>
                <input
                  type="text"
                  value={editProduct.uploadspeed || ""}
                  onChange={(e) => setEditProduct({ ...editProduct, uploadspeed: e.target.value })}
                  className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                  placeholder="Nhập tốc độ tải lên (không bắt buộc)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Tốc độ quốc tế</label>
                <input
                  type="text"
                  value={editProduct.internationalspeed || ""}
                  onChange={(e) => setEditProduct({ ...editProduct, internationalspeed: e.target.value })}
                  className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                  placeholder="Nhập tốc độ quốc tế (không bắt buộc)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Danh mục *</label>
                <select
                  value={editProduct.category}
                  onChange={(e) => setEditProduct({ ...editProduct, category: e.target.value })}
                  className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                  required
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Thiết bị</label>
                <input
                  type="text"
                  value={editProduct.equipment || ""}
                  onChange={(e) => setEditProduct({ ...editProduct, equipment: e.target.value })}
                  className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Phù hợp với</label>
                <input
                  type="text"
                  value={editProduct.suitability || ""}
                  onChange={(e) => setEditProduct({ ...editProduct, suitability: e.target.value })}
                  className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Gói thuê bao</label>
                <input
                  type="text"
                  value={editProduct.subscription || ""}
                  onChange={(e) => setEditProduct({ ...editProduct, subscription: e.target.value })}
                  className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Phí lắp đặt</label>
                <input
                  type="text"
                  value={editProduct.installationfee || ""}
                  onChange={(e) => setEditProduct({ ...editProduct, installationfee: e.target.value })}
                  className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="md:col-span-2 flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={cancelEditing}
                  className="py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Lưu
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Delete Confirmation Modal for Product */}
        {showDeleteConfirm.show && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Xác nhận xóa</h3>
              <p className="text-gray-600 mb-6">Bạn có chắc muốn xóa sản phẩm này?</p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={cancelDelete}
                  className="py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                >
                  Hủy
                </button>
                <button
                  onClick={() => showDeleteConfirm.productId && deleteProduct(showDeleteConfirm.productId)}
                  className="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Product Table */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Danh sách sản phẩm</h2>
            <div>
              <label className="text-sm font-medium text-gray-600 mr-2">Lọc theo danh mục:</label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="p-2 border rounded-md focus:ring focus:ring-blue-300"
              >
                {filterOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tên sản phẩm
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Giá quận
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Giá huyện
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tốc độ tải xuống
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tốc độ tải lên
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tốc độ quốc tế
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Danh mục
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-6 py-4 text-center text-gray-500">
                      Không có sản phẩm nào
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((product) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.price1}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.price2 || '-'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.downloadspeed}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.uploadspeed || '-'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.internationalspeed || '-'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => startEditing(product)}
                          className="text-blue-600 hover:text-blue-800 mr-4"
                        >
                          Sửa
                        </button>
                        <button
                          onClick={() => confirmDelete(product.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          Xóa
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* User Management Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Danh sách người dùng</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Vai trò
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ngày tạo
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                      Không có người dùng nào
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.role}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(user.created_at).toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => confirmUserDelete(user.id, user.email)}
                          className="text-red-600 hover:text-red-800"
                        >
                          Xóa
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Delete Confirmation Modal for User */}
        {showUserDeleteConfirm.show && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Xác nhận xóa</h3>
              <p className="text-gray-600 mb-6">
                Bạn có chắc muốn xóa người dùng {showUserDeleteConfirm.userEmail}?
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={cancelUserDelete}
                  className="py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                >
                  Hủy
                </button>
                <button
                  onClick={() => showUserDeleteConfirm.userId && deleteUser(showUserDeleteConfirm.userId)}
                  className="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Admin;