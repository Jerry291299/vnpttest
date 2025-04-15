import React from 'react'
import logo from "../img/logo.png"


const Footer = () => {
    return (
      <footer className="bg-white border-t border-gray-200 px-4 py-6 text-sm text-[#002c5f]">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
    {/* Thông tin liên hệ */}
    <div className="flex-1">
      <h2 className="font-semibold text-base mb-2">Tập đoàn bưu chính viễn thông Việt Nam - VNPT</h2>
      <div className="flex items-start mb-1">
        <span className="mr-2">🏠</span>
        <span>
          Address: Tòa nhà VNPT, số 57 Phố Huỳnh Thúc Kháng, Phường Láng Hạ, Quận Đống Đa, Hà Nội
        </span>
      </div>
      <div className="flex items-center mb-1">
        <span className="mr-2">📞</span>
        <span>Hotline: 0918.069.113</span>
      </div>
      <div className="flex items-center mb-1">
        <span className="mr-2">📧</span>
        <span>Email: cskh@vnpt.com</span>
      </div>
      <div className="flex items-center mb-1">
        <span className="mr-2">🌐</span>
        <span>Website: http://cskh-vnpt.com</span>
      </div>
    </div>

    {/* Logo và Icon thanh toán */}
    <div className="flex flex-col items-center md:items-end">
      <img
        src={logo} // Thay bằng đường dẫn logo VNPT của bạn
        alt="VNPT Logo"
        className="w-35 h-auto mb-4"
      />
      
    </div>
  </div>

  {/* Bản quyền và giấy phép */}
  <div className="max-w-7xl mx-auto mt-6 border-t pt-4 text-xs text-[#002c5f]">
    <p className="mb-1">©2025 Allrights reserved</p>
    <p className="mb-1">
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