import React from 'react'
import logo from "../img/logo.png"

const Footer = () => {
    return (
      <footer className="bg-white border-t border-gray-200 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 text-xs sm:text-sm text-[#002c5f]">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between gap-4 sm:gap-6 md:gap-8">
          {/* Thông tin liên hệ */}
          <div className="flex-1">
            <h2 className="font-semibold text-sm sm:text-base md:text-lg mb-2 sm:mb-3">Tập đoàn bưu chính viễn thông Việt Nam - VNPT</h2>
            <div className="flex items-start mb-1 sm:mb-2">
              <span className="mr-2 text-base sm:text-lg">🏠</span>
              <span className="text-xs sm:text-sm md:text-base">
                Address: Tòa nhà VNPT, số 57 Phố Huỳnh Thúc Kháng, Phường Láng Hạ, Quận Đống Đa, Hà Nội
              </span>
            </div>
            <div className="flex items-center mb-1 sm:mb-2">
              <span className="mr-2 text-base sm:text-lg">📞</span>
              <span className="text-xs sm:text-sm md:text-base">Hotline: 0818.122.111</span>
            </div>
            <div className="flex items-center mb-1 sm:mb-2">
              <span className="mr-2 text-base sm:text-lg">📧</span>
              <span className="text-xs sm:text-sm md:text-base">Email: cskh@vnpt.com</span>
            </div>
            <div className="flex items-center mb-1 sm:mb-2">
              <span className="mr-2 text-base sm:text-lg">🌐</span>
              <span className="text-xs sm:text-sm md:text-base">Website: https://vnpt-online.com</span>
            </div>
          </div>

          {/* Logo và Icon thanh toán */}
          <div className="flex flex-col items-center md:items-end">
            <img
              src={logo}
              alt="VNPT Logo"
              className="w-24 sm:w-28 md:w-32 h-auto mb-3 sm:mb-4"
            />
          </div>
        </div>

        {/* Bản quyền và giấy phép */}
        <div className="max-w-screen-2xl mx-auto mt-4 sm:mt-6 border-t pt-3 sm:pt-4 text-xs sm:text-sm text-[#002c5f]">
          <p className="mb-1 sm:mb-2">©2025 All rights reserved</p>
          <p className="mb-1 sm:mb-2">
            Giấy phép số: 62/GP-TTĐT do Bộ Thông tin - Truyền thông cấp ngày 09/04/2019
          </p>
          <p>
            Giấy phép cung cấp dịch vụ viễn thông số 469/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 14/10/2016
          </p>
        </div>
      </footer>
    );
};

export default Footer;