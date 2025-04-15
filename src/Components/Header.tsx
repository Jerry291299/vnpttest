import React from "react";
import logo from "../img/logo.png";
import banner1 from "../img/banner-vnpt-1-20250219043809-p4bty.png";
import banner2 from "../img/banner-vnpt-2-20250219043404-_b0mf.png";
import ProductList from "./product";

const HeaderBanner: React.FC = () => {
  return (
    <div className="w-full">
      {/* Top Info Line */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 bg-white py-3 md:py-2">
        <img
          className="w-[40px] md:w-[50px]"
          src={logo}
          alt="VNPT logo"
        />
        <div className="text-black font-semibold text-sm md:text-lg text-center px-4">
          Trang web cập nhật khuyến mãi mới nhất của VNPT Telecom
        </div>
      </div>

      {/* Banner Image with Overlay */}
      <div className="relative w-full">
        <img
          src={banner1}
          alt="VNPT Banner"
          className="w-full h-[300px] md:h-[550px] object-cover"
        />
      </div>

      {/* Promo Section */}
      <div className="bg-white text-center py-6 md:py-8 px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black uppercase mb-4 md:mb-6">
          Khuyến mãi lắp mạng VNPT mới nhất tháng 03/2025
        </h3>

        <div className="space-y-2 text-sm sm:text-base md:text-lg text-gray-700">
          <p>
            Gói combo wifi + Xem tivi giá chỉ từ{" "}
            <span className="font-bold text-red-600">240.000Đ/Tháng</span>
          </p>
          <p>
            Gói internet wifi tốc độ cao giá chỉ từ{" "}
            <span className="font-bold text-red-600">180.000Đ/Tháng</span>
          </p>
        </div>

        <div className="mt-4 md:mt-6 space-y-3 md:space-y-4">
          <div className="flex items-start justify-center gap-2 md:gap-3">
            <span className="text-orange-500 text-lg md:text-xl">🎁</span>
            <p className="text-gray-700 text-sm md:text-base">
              Trang bị modem{" "}
              <span className="font-bold text-red-600">WiFi 6</span> thế hệ mới
              nhất, nhanh nhất trị giá{" "}
              <span className="font-bold text-red-600">2.500.000Đ</span>
            </p>
          </div>
          <div className="flex items-start justify-center gap-2 md:gap-3">
            <span className="text-orange-500 text-lg md:text-xl">🎁</span>
            <p className="text-gray-700 text-sm md:text-base">
              Tặng Box 4K xem tivi tích hợp điều khiển giọng nói trị giá{" "}
              <span className="font-bold text-red-600">1.500.000Đ</span>
            </p>
          </div>
          <div className="flex items-start justify-center gap-2 md:gap-3">
            <span className="text-orange-500 text-lg md:text-xl">🎁</span>
            <p className="text-gray-700 text-sm md:text-base">
              Tặng thêm tháng cước dành cho khách hàng trả trước 12 tháng
            </p>
          </div>
          <div className="flex items-start justify-center gap-2 md:gap-3">
            <span className="text-orange-500 text-lg md:text-xl">🎁</span>
            <p className="text-gray-700 text-sm md:text-base">
              Lắp đặt nhanh tại nhà, làm việc cả thứ 7 và chủ nhật
            </p>
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div className="px-4 sm:px-6 lg:px-8">
        <ProductList />
      </div>
    </div>
  );
};

export default HeaderBanner;