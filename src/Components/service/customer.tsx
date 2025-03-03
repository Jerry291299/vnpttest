import { axiosservice } from "../config/API"; // Import axios với baseURL đã cấu hình

export const getAllCustomers = async () => {
  try {
    const response = await axiosservice.get("/customers");
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách khách hàng:", error);
    return [];
  }
};