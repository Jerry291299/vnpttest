import React from "react";
import banner from "../img/banner.png";
import banner2 from "../img/banner-vnpt-2-20250219043404-_b0mf.png";
import banner3 from "../img/banner2.png";
import cskh1 from "../img/vnpt-anh-cham-soc-2-20250219140338-snkhi.png";
import cskh2 from "../img/download.png";
import cskh3 from "../img/vnpt-anh-lap-dat-1-20250219135917-c4iia.png";
import cskh4 from "../img/vnpt-anh-lap-dat-2-20250219135811-2z0a6.png";
import zalo from "../img/Icon_of_Zalo.svg.png";

const ProductList = () => {
  const products1 = [
    {
      name: "HOME 2",
      price1: "180.000đ",
      price2: "220.000đ",
      downloadSpeed: "300Mbps",
      uploadSpeed: "300Mbps",
      equipment: "Trang bị modem wifi 6",
      suitability: "Phù hợp cá nhân, gia đình nhỏ",
      subscription: "6 tháng + 0 va 12 tháng +1",
      installationFee: "Phí lắp đặt 300.000Đ",
      contact: "0818.122.111",
    },
    {
      name: "HOME 3",
      price1: "265.000đ",
      price2: "300.000đ",
      downloadSpeed: "500Mbps",
      uploadSpeed: "500Mbps",
      equipment: "Trang bị modem wifi 6",
      suitability: "Phù hợp gia đình vừa và lớn",
      subscription: "6 tháng + 0 va 12 tháng +1",
      installationFee: "Phí lắp đặt 300.000Đ",
      contact: "0818.122.111",
    },
    {
      name: "HOME 4",
      price1: "285.000đ",
      price2: "335.000đ",
      downloadSpeed: "1.000Mbps",
      uploadSpeed: "1.000Mbps",
      equipment: "Trang bị modem wifi 6",
      suitability: "Phù hợp stream, game, online",
      subscription: "6 tháng + 0 va 12 tháng +1",
      installationFee: "Phí lắp đặt 300.000Đ",
      contact: "0818.122.111",
    },
  ];

  const products2 = [
    {
      name: "Combo HOME 2",
      price1: "210.000đ",
      price2: "250.000đ",
      downloadSpeed: "300Mbps",
      uploadSpeed: "300Mbps",
      equipment: "Trang bị modem wifi 6",
      suitability: "Phù hợp cá nhân, gia đình nhỏ",
      subscription: "6 tháng + 0 va 12 tháng +1",
      installationFee: "Phí lắp đặt 300.000Đ",
      contact: "0818.122.111",
    },
    {
      name: "Combo HOME 3",
      price1: "295.000đ",
      price2: "330.000đ",
      downloadSpeed: "800Mbps",
      uploadSpeed: "5Mbps",
      equipment: "Trang bị modem wifi 6",
      suitability: "Phù hợp gia đình vừa và lớn",
      subscription: "6 tháng + 0 va 12 tháng +1",
      installationFee: "Phí lắp đặt 300.000Đ",
      contact: "0818.122.111",
    },
    {
      name: "Combo HOME 4",
      price1: "315.000đ",
      price2: "365.000đ",
      downloadSpeed: "1.000Mbps",
      uploadSpeed: "8Mbps",
      equipment: "Trang bị modem wifi 6",
      suitability: "Phù hợp stream, game, online",
      subscription: "6 tháng + 0 va 12 tháng +1",
      installationFee: "Phí lắp đặt 300.000Đ",
      contact: "0818.122.111",
    },
  ];

  const products3 = [
    {
      name: "FIBER S1",
      price1: "418.000đ",
      downloadSpeed: "400Mbps",
      internationalspeed: "2Mbps",
      equipment: "Trang bị modem wifi 6",
      suitability: "Phù hợp công ty 10 - 15 người",
      subscription: "6 tháng + 0 va 12 tháng +1",
      installationFee: "Phí lắp đặt 300.000Đ",
      contact: "0818.122.111",
    },
    {
      name: "FIBER S2",
      price1: "660.000đ",
      downloadSpeed: "800Mbps",
      internationalspeed: "5Mbps",
      equipment: "Trang bị modem wifi 6",
      suitability: "Phù hợp công ty 15 - 30 người",
      subscription: "6 tháng + 0 va 12 tháng +1",
      installationFee: "Phí lắp đặt 300.000Đ",
      contact: "0818.122.111",
    },
    {
      name: "FIBER S3",
      price1: "814.000đ",
      downloadSpeed: "1000Mbps",
      internationalspeed: "8Mbps",
      equipment: "Trang bị modem wifi 6",
      suitability: "Phù hợp công ty 50 - 100 người",
      subscription: "6 tháng + 0 va 12 tháng +1",
      installationFee: "Phí lắp đặt 300.000Đ",
      contact: "0818.122.111",
    },
  ];

  return (
    <div className="w-full py-6 md:py-8">
      {/* Section 1: WiFi Plans */}
      <div className="text py-6 md:py-8 border-t-2 border-dotted border-gray-300">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
          1. Báo giá các gói wifi VNPT giá rẻ tốc độ cao
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-center px-4 sm:px-6 mt-4 max-w-3xl mx-auto">
          VNPT mang đến cho quý khách hàng là cá nhân, gia đình những gói
          internet wifi tốc độ cao, giá thành phải chăng phù hợp với nhu cầu sử
          dụng từ cơ bản đến nâng cao.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 px-2 sm:px-6 lg:px-80">
        {products1.map((product, index) => (
          <div
            key={index}
            className="relative w-full max-w-[320px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
          >
            {/* Sale Badge */}
            <div className="absolute top-0 left-0">
              <div className="relative w-14 sm:w-16 bg-blue-700 text-white text-center pt-1 sm:pt-2 pb-6 sm:pb-8">
                <div className="text-sm sm:text-lg font-bold leading-tight">
                  SALE
                </div>
                <div className="text-sm sm:text-lg font-bold leading-tight mt-1 sm:mt-2">
                  50%
                </div>
                <div className="absolute bottom-0 left-0 right-0 mx-auto w-0 h-0 border-l-[28px] sm:border-l-[32px] border-l-transparent border-r-[28px] sm:border-r-[32px] border-r-transparent border-b-[12px] sm:border-b-[16px] border-b-white"></div>
              </div>
            </div>

            {/* Product Info */}
            <div className="pt-16 sm:pt-20 px-4 sm:px-6 pb-6 text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 sm:mb-5">
                {product.name}
              </h3>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-500 mb-1 sm:mb-2">
                {product.price1}{" "}
                <span className="text-black text-xs sm:text-sm">(huyện)</span>
              </p>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-500 mb-3 sm:mb-4">
                {product.price2}{" "}
                <span className="text-black text-xs sm:text-sm">(quận)</span>
              </p>
              <ul className="space-y-2 text-gray-700 text-xs sm:text-sm lg:text-base">
                <li className="flex items-center justify-center">
                  <span className="text-blue-600 mr-1 sm:mr-2">◆</span>
                  Download tối đa {product.downloadSpeed}
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-blue-600 mr-1 sm:mr-2">◆</span>
                  Tốc độ upload {product.uploadSpeed}
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-blue-600 mr-1 sm:mr-2">◆</span>
                  {product.equipment}
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-blue-600 mr-1 sm:mr-2">◆</span>
                  {product.suitability}
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-blue-600 mr-1 sm:mr-2">◆</span>
                  {product.subscription}
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-blue-600 mr-1 sm:mr-2">◆</span>
                  {product.installationFee}
                </li>
              </ul>
            </div>

            {/* Wave Background and Contact Info */}
            <div className="relative h-20 sm:h-24">
              <svg
                className="absolute bottom-0 left-0 w-full h-full"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
              >
                <path
                  fill="#3B82F6"
                  fillOpacity="1"
                  d="M0,128L60,138.7C120,149,240,171,360,181.3C480,192,600,192,720,181.3C840,171,960,149,1080,149.3C1200,149,1320,171,1380,181.3L1440,192V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0V128Z"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white font-bold text-sm sm:text-lg bg-blue-600 px-2 sm:px-3 py-1 sm:py-2 rounded-full">
                  {product.contact}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Promotional Note */}
      <p className="text-sm sm:text-base lg:text-lg text-center px-4 sm:px-6 mt-6 max-w-3xl mx-auto">
        <span className="text-red-600 font-bold">Chú ý :</span> giá mạng VNPT
        trên đã gồm 10% VAT và có thể thay đổi theo từng khu vực khác nhau như :
        tỉnh, chung cư... <br />
        Quý khách hãy liên hệ hotline hoặc để lại thông tin để được tư vấn giá
        chính xác nhất.
      </p>

      {/* Zalo Button */}
      <div className="flex w-full justify-center items-center space-x-2 sm:space-x-3 py-3 sm:py-4">
        <a
          href="https://zalo.me/0818122111"
          className="flex items-center bg-white rounded-full shadow-lg border-2 sm:border-4 border-blue-300 px-4 sm:px-6 py-2 sm:py-4"
        >
          <img
            src={zalo}
            alt="Zalo"
            className="w-10 h-10 sm:w-14 sm:h-14 mr-2 sm:mr-3"
          />
          <span className="text-red-600 font-bold text-lg sm:text-2xl">
            0818.122.111
          </span>
        </a>
      </div>

      {/* Banner */}
      <div className="banner w-full py-4 sm:py-5">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-[200px] sm:h-[600px] object-cover"
        />
      </div>

      {/* Section 2: Combo Plans */}
      <div className="text py-6 md:py-8 border-t-2 border-dotted border-gray-300">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
          2. Báo giá các gói combo internet và truyền hình MyTV
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-center px-4 sm:px-6 mt-4 max-w-3xl mx-auto">
          Đăng ký 1 mà được tận 2 dịch vụ chất lượng của VNPT là mạng wifi tốc
          độ cao và truyền hình MyTV thông minh.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 px-2 sm:px-6 lg:px-80">
        {products2.map((product, index) => (
          <div
            key={index}
            className="relative w-full max-w-[320px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
          >
            {/* Sale Badge */}
            <div className="absolute top-0 left-0">
              <div className="relative w-14 sm:w-16 bg-blue-700 text-white text-center pt-1 sm:pt-2 pb-6 sm:pb-8">
                <div className="text-sm sm:text-lg font-bold leading-tight">
                  SALE
                </div>
                <div className="text-sm sm:text-lg font-bold leading-tight mt-1 sm:mt-2">
                  50%
                </div>
                <div className="absolute bottom-0 left-0 right-0 mx-auto w-0 h-0 border-l-[28px] sm:border-l-[32px] border-l-transparent border-r-[28px] sm:border-r-[32px] border-r-transparent border-b-[12px] sm:border-b-[16px] border-b-white"></div>
              </div>
            </div>

            {/* Product Info */}
            <div className="pt-16 sm:pt-20 px-4 sm:px-6 pb-6 text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-3xl pt-[30px] font-bold text-blue-900 mb-4 sm:mb-5">
                {product.name}
              </h3>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-500 mb-1 sm:mb-2">
                {product.price1}{" "}
                <span className="text-black text-xs sm:text-sm">(huyện)</span>
              </p>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-500 mb-3 sm:mb-4">
                {product.price2}{" "}
                <span className="text-black text-xs sm:text-sm">(quận)</span>
              </p>
              <ul className="space-y-2 text-gray-700 text-xs sm:text-sm lg:text-base">
                <li className="flex items-center justify-center">
                  <span className="text-blue-600 mr-1 sm:mr-2">◆</span>
                  Download tối đa {product.downloadSpeed}
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-blue-600 mr-1 sm:mr-2">◆</span>
                  Tốc độ upload {product.uploadSpeed}
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-blue-600 mr-1 sm:mr-2">◆</span>
                  {product.equipment}
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-blue-600 mr-1 sm:mr-2">◆</span>
                  {product.suitability}
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-blue-600 mr-1 sm:mr-2">◆</span>
                  {product.subscription}
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-blue-600 mr-1 sm:mr-2">◆</span>
                  {product.installationFee}
                </li>
              </ul>
            </div>

            {/* Wave Background and Contact Info */}
            <div className="relative h-20 sm:h-24">
              <svg
                className="absolute bottom-0 left-0 w-full h-full"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
              >
                <path
                  fill="#3B82F6"
                  fillOpacity="1"
                  d="M0,128L60,138.7C120,149,240,171,360,181.3C480,192,600,192,720,181.3C840,171,960,149,1080,149.3C1200,149,1320,171,1380,181.3L1440,192V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0V128Z"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white font-bold text-sm sm:text-lg bg-blue-600 px-2 sm:px-3 py-1 sm:py-2 rounded-full">
                  {product.contact}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Promotional Note */}
      <p className="text-sm sm:text-base lg:text-lg text-center px-4 sm:px-6 mt-6 max-w-3xl mx-auto">
        <span className="text-red-600 font-bold">Chú ý :</span> giá mạng VNPT
        trên đã gồm 10% VAT và có thể thay đổi theo từng khu vực khác nhau như :
        tỉnh, chung cư... <br />
        Quý khách hãy liên hệ hotline hoặc để lại thông tin để được tư vấn giá
        chính xác nhất.
      </p>

      {/* Zalo Button */}
      <div className="flex w-full justify-center items-center space-x-2 sm:space-x-3 py-3 sm:py-4">
        <a
          href="https://zalo.me/0818122111"
          className="flex items-center bg-white rounded-full shadow-lg border-2 sm:border-4 border-blue-300 px-4 sm:px-6 py-2 sm:py-4"
        >
          <img
            src={zalo}
            alt="Zalo"
            className="w-10 h-10 sm:w-14 sm:h-14 mr-2 sm:mr-3"
          />
          <span className="text-red-600 font-bold text-lg sm:text-2xl">
            0818.122.111
          </span>
        </a>
      </div>

      {/* Banner 2 */}
      <div className="flex justify-center w-full py-4 sm:py-8">
        <img
          src={banner2}
          alt="Banner 2"
          className="w-full "
        />
      </div>

      {/* Section 3: Enterprise Plans */}
      <div className="text py-6 md:py-8 border-t-2 border-dotted border-gray-300">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
          3. Báo giá các gói cáp quang VNPT dành cho công ty, doanh nghiệp
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-center px-4 sm:px-6 mt-4 max-w-3xl mx-auto">
          VNPT xin trân trọng gửi đến quý khách hàng là công ty các gói mạng
          internet cáp quang nhanh nhất, ổn định nhất hiện nay.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 px-2 sm:px-6 lg:px-80">
        {products3.map((product, index) => (
          <div
            key={index}
            className="relative w-full max-w-[320px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
          >
            {/* Sale Badge */}
            <div className="absolute top-0 left-0">
              <div className="relative w-14 sm:w-16 bg-blue-700 text-white text-center pt-1 sm:pt-2 pb-6 sm:pb-8">
                <div className="text-sm sm:text-lg font-bold leading-tight">
                  SALE
                </div>
                <div className="text-sm sm:text-lg font-bold leading-tight mt-1 sm:mt-2">
                  50%
                </div>
                <div className="absolute bottom-0 left-0 right-0 mx-auto w-0 h-0 border-l-[28px] sm:border-l-[32px] border-l-transparent border-r-[28px] sm:border-r-[32px] border-r-transparent border-b-[12px] sm:border-b-[16px] border-b-white"></div>
              </div>
            </div>

            {/* Product Info */}
            <div className="pt-16 sm:pt-20 px-4 sm:px-6 pb-6 text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 sm:mb-5">
                {product.name}
              </h3>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-500 mb-3 sm:mb-4">
                {product.price1}
              </p>
              <ul className="space-y-2 text-gray-700 text-xs sm:text-sm lg:text-base">
                <li className="flex items-center justify-center">
                  <span className="text-blue-600 mr-1 sm:mr-2">◆</span>
                  Download tối đa {product.downloadSpeed}
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-blue-600 mr-1 sm:mr-2">◆</span>
                  Băng thông quốc tế {product.internationalspeed}
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-blue-600 mr-1 sm:mr-2">◆</span>
                  {product.equipment}
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-blue-600 mr-1 sm:mr-2">◆</span>
                  {product.suitability}
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-blue-600 mr-1 sm:mr-2">◆</span>
                  {product.subscription}
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-blue-600 mr-1 sm:mr-2">◆</span>
                  {product.installationFee}
                </li>
              </ul>
            </div>

            {/* Wave Background and Contact Info */}
            <div className="relative h-20 sm:h-24">
              <svg
                className="absolute bottom-0 left-0 w-full h-full"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
              >
                <path
                  fill="#3B82F6"
                  fillOpacity="1"
                  d="M0,128L60,138.7C120,149,240,171,360,181.3C480,192,600,192,720,181.3C840,171,960,149,1080,149.3C1200,149,1320,171,1380,181.3L1440,192V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0V128Z"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white font-bold text-sm sm:text-lg bg-blue-600 px-2 sm:px-3 py-1 sm:py-2 rounded-full">
                  {product.contact}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Zalo Button */}
      <div className="flex w-full justify-center items-center space-x-2 sm:space-x-3 py-3 sm:py-4">
        <a
          href="https://zalo.me/0818122111"
          className="flex items-center bg-white rounded-full shadow-lg border-2 sm:border-4 border-blue-300 px-4 sm:px-6 py-2 sm:py-4"
        >
          <img
            src={zalo}
            alt="Zalo"
            className="w-10 h-10 sm:w-14 sm:h-14 mr-2 sm:mr-3"
          />
          <span className="text-red-600 font-bold text-lg sm:text-2xl">
            0818.122.111
          </span>
        </a>
      </div>

      {/* Banner 3 */}
      <div className="banner w-full py-4 sm:py-5">
        <img
          src={banner3}
          alt="Banner 3"
          className="w-full h-[200px] sm:h-[600px] object-cover"
        />
      </div>

      {/* Customer Service Images */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center mb-4">
          <div className="w-1 h-5 sm:h-6 bg-blue-600 mr-2"></div>
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-[#002c5f]">
            Hình ảnh lắp đặt và chăm sóc khách hàng của VNPT
          </h2>
        </div>

        <div className="w-full mb-4">
          <img
            src={cskh1}
            alt="VNPT Customer Service"
            className="w-full h-[200px] sm:h-[240px] md:h-[300px] object-cover rounded shadow-md"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src={cskh3}
            alt="Install 1"
            className="w-full h-[150px] sm:h-[200px] object-cover rounded shadow"
          />
          <img
            src={cskh2}
            alt="Call center"
            className="w-full h-[150px] sm:h-[200px] object-cover rounded shadow"
          />
          <img
            src={cskh4}
            alt="Install 2"
            className="w-full h-[150px] sm:h-[200px] object-cover rounded shadow"
          />
        </div>
      </div>

      {/* Floating Zalo Button */}
      <a
        href="https://zalo.me/0818122111"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-3 sm:bottom-4 right-3 sm:right-4 flex items-center bg-white border-2 sm:border-4 border-[#002c5f] rounded-full shadow-lg px-2 sm:px-3 py-1 sm:py-2 z-50 animate-float"
      >
        <img
          src={zalo}
          alt="Zalo"
          className="w-8 h-8 sm:w-10 sm:h-10 mr-1 sm:mr-2"
        />
        <span className="text-red-600 font-bold text-sm sm:text-base">
          0818.122.111
        </span>
      </a>
    </div>
  );
};

export default ProductList;