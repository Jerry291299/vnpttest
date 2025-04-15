// components/HeaderBanner.tsx
import React from 'react';
import logo from "../img/logo.png"
import banner1 from "../img/banner-vnpt-1-20250219043809-p4bty.png"
import banner2 from "../img/banner-vnpt-2-20250219043404-_b0mf.png"
import ProductList from './product';

const HeaderBanner: React.FC = () => {
  const plans1 = [
    {
      name: "HOME 2",
      priceRural: "180.000đ",
      priceUrban: "220.000đ",
      download: "300Mbps",
      upload: "300Mbps",
      suitable: "Phù hợp cá nhân, gia đình nhỏ",
    },
    {
      name: "HOME 3",
      priceRural: "265.000đ",
      priceUrban: "300.000đ",
      download: "500Mbps",
      upload: "500Mbps",
      suitable: "Phù hợp gia đình vừa và lớn",
    },
    {
      name: "HOME 4",
      priceRural: "285.000đ",
      priceUrban: "335.000đ",
      download: "1.000Mbps",
      upload: "1.000Mbps",
      suitable: "Phù hợp stream, game, online",
    },
  ];


  return (
    <div className="w-full">
      {/* Top Info Line */}
      <div className="flex items-center justify-center gap-8 bg-white py-2">
  <img className="w-[50px]" src={logo} alt="VNPT logo" />
  <div className="text-black font-semibold text-lg text-center">
    Trang web cập nhật khuyến mãi mới nhất của VNPT Telecom
  </div>
</div>
      

      {/* Banner Image with Overlay */}
      <div className="relative w-full">
        <img
          src={banner1} // Replace this with actual path or import
          alt="VNPT Banner"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Promo Section */}
      <div className="bg-white text-center py-8 px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-black uppercase mb-6">
          Khuyến mãi lắp mạng VNPT mới nhất tháng 03/2025
        </h3>

        <div className="space-y-2 text-base md:text-lg text-gray-700">
          <p>
            Gói combo wifi + Xem tivi giá chỉ từ{' '}
            <span className="font-bold text-red-600">240.000Đ/Tháng</span>
          </p>
          <p>
            Gói internet wifi tốc độ cao giá chỉ từ{' '}
            <span className="font-bold text-red-600">180.000Đ/Tháng</span>
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-start justify-center gap-2">
            <span className="text-orange-500 text-xl">🎁</span>
            <p className="text-gray-700">
              Trang bị modem <span className="font-bold text-red-600">WiFi 6</span> thế hệ mới nhất, nhanh nhất trị giá{' '}
              <span className="font-bold text-red-600">2.500.000Đ</span>
            </p>
          </div>
          <div className="flex items-start justify-center gap-2">
            <span className="text-orange-500 text-xl">🎁</span>
            <p className="text-gray-700">
              Tặng Box 4K xem tivi tích hợp điều khiển giọng nói trị giá{' '}
              <span className="font-bold text-red-600">1.500.000Đ</span>
            </p>
          </div>
          <div className="flex items-start justify-center gap-2">
            <span className="text-orange-500 text-xl">🎁</span>
            <p className="text-gray-700">Tặng thêm tháng cước dành cho khách hàng trả trước 12 tháng</p>
          </div>
          <div className="flex items-start justify-center gap-2">
            <span className="text-orange-500 text-xl">🎁</span>
            <p className="text-gray-700">Lắp đặt nhanh tại nhà, làm việc cả thứ 7 và chủ nhật</p>
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <ProductList/>

    </div>
  );
};

export default HeaderBanner;
