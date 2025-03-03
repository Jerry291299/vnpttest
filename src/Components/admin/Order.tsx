import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx"; // Import thư viện xuất Excel
import { saveAs } from "file-saver";
import LoadingComponent from "../Loading";
import { Pagination } from "antd";
import { useNavigate } from "react-router";
import { getAllCustomers } from "../service/customer";
import { ICustomer } from "../interface/customer";

const Order = () => {
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getAllCustomers();
        setCustomers(data);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách khách hàng:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCustomers = filteredCustomers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Hàm xuất Excel
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(
      customers.map((customer, index) => ({
        STT: index + 1,
        "Tên khách hàng": customer.name,
        "Số điện thoại": customer.phone,
        "Email": customer.email,
        "Địa chỉ": customer.address,
        "Ghi chú": customer.notes || "Không có",
      }))
    );

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Danh sách khách hàng");

    // Xuất file
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    saveAs(data, "Danh_sach_khach_hang.xlsx");
  };

  return (
    <>
      {loading && <LoadingComponent />}
      <div className="flex items-center justify-between px-6 h-[96px] bg-white-600 text-white">
        <button
          onClick={exportToExcel}
          className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
        >
          Xuất Excel
        </button>
      </div>

      {/* Thanh tìm kiếm */}
      <div className="flex items-center mb-6">
        <input
          type="text"
          placeholder="Tìm kiếm khách hàng"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Bảng danh sách khách hàng */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">STT</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">Tên khách hàng</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">Số điện thoại</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">Email</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">Địa chỉ</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">Ghi chú</th>
            </tr>
          </thead>
          <tbody>
            {paginatedCustomers.length > 0 ? (
              paginatedCustomers.map((customer, index) => (
                <tr key={customer._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-6 text-sm text-gray-700">{startIndex + index + 1}</td>
                  <td className="py-3 px-6 text-sm text-gray-700">{customer.name}</td>
                  <td className="py-3 px-6 text-sm text-gray-700">{customer.phone}</td>
                  <td className="py-3 px-6 text-sm text-gray-700">{customer.email}</td>
                  <td className="py-3 px-6 text-sm text-gray-700">{customer.address}</td>
                  <td className="py-3 px-6 text-sm text-gray-700">{customer.notes || "Không có"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-6 text-gray-500">
                  Không tìm thấy khách hàng nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Phân trang */}
      <div className="flex justify-center mt-6">
        <Pagination
          current={currentPage}
          total={filteredCustomers.length}
          pageSize={itemsPerPage}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
        />
      </div>
    </>
  );
};

export default Order;
