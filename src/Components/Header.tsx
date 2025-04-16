import React from "react";
import logo from "../img/logo.png";
import banner1 from "../img/banner-vnpt-1-20250219043809-p4bty.png";
import ProductList from "./product";

const HeaderBanner: React.FC = () => {
  return (
    <div className="w-full">
      {/* Top Info Line */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 bg-white py-2 sm:py-3 md:py-4 max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8">
        <img
          className="w-8 sm:w-10 md:w-12 lg:w-14"
          src={logo}
          alt="VNPT logo"
        />
        <div className="text-black font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-center px-4 sm:px-0">
          Trang web cập nhật khuyến mãi mới nhất của VNPT Telecom
        </div>
      </div>

      {/* Banner Image with Overlay */}
      <div className="relative w-full">
        <img
          src={banner1}
          alt="VNPT Banner"
          className="w-full object-cover"
        />
      </div>

      {/* Promo Section */}
      <div className="bg-white text-center py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-screen-2xl mx-auto">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black uppercase mb-3 sm:mb-4 md:mb-6">
          Khuyến mãi lắp mạng VNPT mới nhất tháng 03/2025
        </h3>

        <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base lg:text-lg text-gray-700">
          <p>
            Gói combo wifi + Xem tivi giá chỉ từ{" "}
            <span className="font-bold text-red-600">240.000Đ/Tháng</span>
          </p>
          <p>
            Gói internet wifi tốc độ cao giá chỉ từ{" "}
            <span className="font-bold text-red-600">180.000Đ/Tháng</span>
          </p>
        </div>

        <div className="mt-3 sm:mt-4 md:mt-6 space-y-2 sm:space-y-3 md:space-y-4">
          <div className="flex items-start justify-center gap-2 sm:gap-3">
            <span className="text-orange-500 text-base sm:text-lg md:text-xl lg:text-2xl">🎁</span>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg">
              Trang bị modem{" "}
              <span className="font-bold text-red-600">WiFi 6</span> thế hệ mới
              nhất, nhanh nhất trị giá{" "}
              <span className="font-bold text-red-600">2.500.000Đ</span>
            </p>
          </div>
          <div className="flex items-start justify-center gap-2 sm:gap-3">
            <span className="text-orange-500 text-base sm:text-lg md:text-xl lg:text-2xl">🎁</span>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg">
              Tặng Box 4K xem tivi tích hợp điều khiển giọng nói trị giá{" "}
              <span className="font-bold text-red-600">1.500.000Đ</span>
            </p>
          </div>
          <div className="flex items-start justify-center gap-2 sm:gap-3">
            <span className="text-orange-500 text-base sm:text-lg md:text-xl lg:text-2xl">🎁</span>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg">
              Tặng thêm tháng cước dành cho khách hàng trả trước 12 tháng
            </p>
          </div>
          <div className="flex items-start justify-center gap-2 sm:gap-3">
            <span className="text-orange-500 text-base sm:text-lg md:text-xl lg:text-2xl">🎁</span>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg">
              Lắp đặt nhanh tại nhà, làm việc cả thứ 7 và chủ nhật
            </p>
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-screen-2xl mx-auto">
        <ProductList />
      </div>
    </div>
  );
};

export default HeaderBanner;