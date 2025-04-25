import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import banner from "../img/banner.png";
import banner2 from "../img/banner-vnpt-2-20250219043404-_b0mf.png";
import banner3 from "../img/banner2.png";
import cskh1 from "../img/vnpt-anh-cham-soc-2-20250219140338-snkhi.png";
import cskh2 from "../img/download.png";
import cskh3 from "../img/vnpt-anh-lap-dat-1-20250219135917-c4iia.png";
import cskh4 from "../img/vnpt-anh-lap-dat-2-20250219135811-2z0a6.png";
import zalo from "../img/Icon_of_Zalo.svg.png";
import banner1 from "../img/banner-vnpt-1-20250219043809-p4bty.png";

interface Product {
  name: string;
  price1: string;
  price2?: string;
  downloadSpeed: string;
  uploadSpeed?: string;
  internationalspeed?: string;
  equipment: string;
  suitability: string;
  subscription: string;
  installationFee: string;
  contact: string;
}

const ProductList: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleOpenForm = (productName: string) => {
    setSelectedProduct(productName);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };

  const handleClosePopup = () => {
    setStatus(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    // Lấy reCAPTCHA token
    const recaptchaToken = recaptchaRef.current?.getValue();
    if (!recaptchaToken) {
      alert("Vui lòng xác nhận bạn không phải là robot.");
      return;
    }

    const message = formData.get("Gói quan tâm")?.toString().trim();
    if (!message) {
      formData.set("Gói quan tâm", `Tôi quan tâm gói: ${selectedProduct}`);
    }

    formData.append("_replyto", `${formData.get("Số điện thoại")}@fake.email`);
    formData.append("_subject", "VNPT-Online - Đăng ký từ trang sản phẩm");
    formData.append("g-recaptcha-response", recaptchaToken);

    try {
      const response = await fetch("https://formspree.io/f/xanonnkz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        setIsFormOpen(false);
        setTimeout(() => setStatus(null), 3000);
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      } else {
        setStatus("error");
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      }
    } catch {
      alert("Có lỗi xảy ra. Vui lòng thử lại.");
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    }
  };

  const products1: Product[] = [
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

  const products2: Product[] = [
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

  const products3: Product[] = [
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

  const ProductCard: React.FC<{ product: Product; index: number }> = ({
    product,
    index,
  }) => (
    <div
      key={index}
      className="relative w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
    >
      {/* Sale Badge */}
      <div className="absolute top-0 left-0 z-10">
        <div className="relative w-12 sm:w-14 md:w-16 bg-blue-700 text-white text-center pt-1 sm:pt-2 pb-5 sm:pb-6 md:pb-8">
          <div className="text-xs sm:text-sm md:text-lg font-bold leading-tight">
            SALE
          </div>
          <div className="text-xs sm:text-sm md:text-lg font-bold leading-tight mt-1 sm:mt-2">
            50%
          </div>
          <div className="absolute bottom-0 left-0 right-0 mx-auto w-0 h-0 border-l-[24px] sm:border-l-[28px] md:border-l-[32px] border-l-transparent border-r-[24px] sm:border-r-[28px] md:border-r-[32px] border-r-transparent border-b-[10px] sm:border-b-[12px] md:border-b-[16px] border-b-white"></div>
        </div>
      </div>

      {/* Product Info */}
      <div className="pt-14 sm:pt-16 md:pt-20 px-4 sm:px-6 pb-6 text-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-3 sm:mb-4 md:mb-5">
          {product.name}
        </h3>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-red-500 mb-1 sm:mb-2">
          {product.price1}{" "}
          <span className="text-black text-xs sm:text-sm">
            {product.price2 ? "(huyện)" : ""}
          </span>
        </p>
        {product.price2 && (
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-red-500 mb-2 sm:mb-3 md:mb-4">
            {product.price2}{" "}
            <span className="text-black text-xs sm:text-sm">(quận)</span>
          </p>
        )}
        <ul className="space-y-1 sm:space-y-2 text-gray-700 text-xs sm:text-sm md:text-base">
          <li className="flex items-center justify-center">
            <span className="text-blue-600 mr-1 sm:mr-2">◆</span>
            Download tối đa {product.downloadSpeed}
          </li>
          {product.uploadSpeed && (
            <li className="flex items-center justify-center">
              <span className="text-blue-600 mr-1 sm:mr-2">◆</span>
              Tốc độ upload {product.uploadSpeed}
            </li>
          )}
          {product.internationalspeed && (
            <li className="flex items-center justify-center">
              <span className="text-blue-600 mr-1 sm:mr-2">◆</span>
              Băng thông quốc tế {product.internationalspeed}
            </li>
          )}
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

      {/* Wave Background and Button */}
      <div className="relative h-16 sm:h-20 md:h-24">
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
          <button
            className="bg-blue-600 text-white font-bold text-sm sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-md hover:bg-blue-700 transition"
            onClick={() => handleOpenForm(product.name)}
          >
            Đăng ký ngay
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Success Popup */}
      {status === "success" && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <span className="text-2xl">🎉</span>
            <h3 className="text-lg font-bold text-green-800 mt-2">
              Đăng ký thành công!
            </h3>
            <p className="text-gray-600 mt-2">
              Chúng tôi sẽ liên hệ với bạn sớm.
            </p>
          </div>
        </div>
      )}

      {/* Error Popup */}
      {status === "error" && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <span className="text-2xl">❌</span>
            <h3 className="text-lg font-bold text-red-700 mt-2">
              Gửi thất bại
            </h3>
            <p className="text-gray-600 mt-2">Vui lòng thử lại sau.</p>
            <button
              onClick={handleClosePopup}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
            >
              Đóng
            </button>
          </div>
        </div>
      )}

      {/* Form đăng ký với reCAPTCHA */}
      {isFormOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">
              Đăng ký gói: {selectedProduct}
            </h3>
            <form onSubmit={handleSubmit}>
              <input
                type="hidden"
                name="_subject"
                value="VNPT-Online - Khách hàng vừa đăng ký"
              />
              <input
                type="text"
                name="Họ và tên"
                placeholder="Nhập họ và tên"
                className="w-full p-2 border rounded mb-3"
                required
              />
              <input
                type="tel"
                name="Số điện thoại"
                placeholder="Nhập số điện thoại"
                className="w-full p-2 border rounded mb-3"
                required
              />
              <textarea
                name="Gói quan tâm"
                placeholder={`Tôi quan tâm gói: ${selectedProduct}`}
                className="w-full p-2 border rounded mb-3"
              ></textarea>
              {/* Thêm reCAPTCHA */}
              <div className="mb-3">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LcxxCQrAAAAAHfPyR2oPbawk4B6xR5o4AZSuxts"
                />
              </div>
              {/* Thông báo bảo mật của Google */}
              <p className="text-xs text-gray-600 mb-3">
                Trang này được bảo vệ bởi reCAPTCHA và tuân theo{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Chính sách quyền riêng tư
                </a>{" "}
                và{" "}
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Điều khoản dịch vụ
                </a>{" "}
                của Google.
              </p>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Gửi đăng ký
              </button>
            </form>
            <button
              onClick={handleCloseForm}
              className="mt-3 text-red-500 hover:underline"
            >
              Đóng
            </button>
          </div>
        </div>
      )}

      {/* Banner Image with Overlay */}
      <div className="mt-[20px] relative w-full">
        <img src={banner1} alt="VNPT Banner" className="w-full object-cover" />
      </div>

      {/* Promo Section */}
      <div className="bg-white text-center py-2 sm:py-4 md:py-6 lg:py-8 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 max-w-screen-2xl mx-auto">
        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-black uppercase mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-6">
          Khuyến mãi lắp mạng VNPT mới nhất tháng 03/2025
        </h3>
        <div className="space-y-1 sm:space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700">
          <p>
            Gói combo wifi + Xem tivi giá chỉ từ{" "}
            <span className="font-bold text-red-600">240.000Đ/Tháng</span>
          </p>
          <p>
            Gói internet wifi tốc độ cao giá chỉ từ{" "}
            <span className="font-bold text-red-600">180.000Đ/Tháng</span>
          </p>
        </div>
        <div className="mt-1 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-6 space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4">
          <div className="flex items-start justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4">
            <span className="text-orange-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              🎁
            </span>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              Trang bị modem{" "}
              <span className="font-bold text-red-600">WiFi 6</span> thế hệ mới
              nhất, nhanh nhất trị giá{" "}
              <span className="font-bold text-red-600">2.500.000Đ</span>
            </p>
          </div>
          <div className="flex items-start justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4">
            <span className="text-orange-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              🎁
            </span>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              Tặng Box 4K xem tivi tích hợp điều khiển giọng nói trị giá{" "}
              <span className="font-bold text-red-600">1.500.000Đ</span>
            </p>
          </div>
          <div className="flex items-start justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4">
            <span className="text-orange-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              🎁
            </span>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              Tặng thêm tháng cước dành cho khách hàng trả trước 12 tháng
            </p>
          </div>
          <div className="flex items-start justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4">
            <span className="text-orange-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              🎁
            </span>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              Lắp đặt nhanh tại nhà, làm việc cả thứ 7 và chủ nhật
            </p>
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div className="px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 max-w-screen-2xl mx-auto">
        {/* Section 1: WiFi Plans */}
        <div className="text py-4 sm:py-6 md:py-8 border-t-2 border-dotted border-gray-300">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            1. Báo giá các gói wifi VNPT giá rẻ tốc độ cao
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-center px-4 sm:px-6 md:px-8 mt-3 sm:mt-4 max-w-4xl mx-auto">
            VNPT mang đến cho quý khách hàng là cá nhân, gia đình những gói
            internet wifi tốc độ cao, giá thành phải chăng phù hợp với nhu cầu
            sử dụng từ cơ bản đến nâng cao.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-screen-2xl mx-auto">
          {products1.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>

        {/* Promotional Note */}
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-center px-4 sm:px-6 md:px-8 mt-4 sm:mt-6 max-w-4xl mx-auto">
          <span className="text-red-600 font-bold">Chú ý :</span> giá mạng VNPT
          trên đã gồm 10% VAT và có thể thay đổi theo từng khu vực khác nhau như
          : tỉnh, chung cư... <br />
          Quý khách hãy liên hệ hotline hoặc để lại thông tin để được tư vấn giá
          chính xác nhất.
        </p>

        {/* Banner */}
        <div className="banner w-full py-3 sm:py-4 md:py-5">
          <img
            src={banner}
            alt="Banner"
            className="w-full max-w-screen-2xl mx-auto min-h-[150px] sm:min-h-[200px] md:min-h-[300px] lg:min-h-[400px] max-h-[600px] object-cover"
          />
        </div>

        {/* Section 2: Combo Plans */}
        <div className="text py-4 sm:py-6 md:py-8 border-t-2 border-dotted border-gray-300">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            2. Báo giá các gói combo internet và truyền hình MyTV
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-center px-4 sm:px-6 md:px-8 mt-3 sm:mt-4 max-w-4xl mx-auto">
            Đăng ký 1 mà được tận 2 dịch vụ chất lượng của VNPT là mạng wifi tốc
            độ cao và truyền hình MyTV thông minh.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-screen-2xl mx-auto">
          {products2.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>

        {/* Promotional Note */}
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-center px-4 sm:px-6 md:px-8 mt-4 sm:mt-6 max-w-4xl mx-auto">
          <span className="text-red-600 font-bold">Chú ý :</span> giá mạng VNPT
          trên đã gồm 10% VAT và có thể thay đổi theo từng khu vực khác nhau như
          : tỉnh, chung cư... <br />
          Quý khách hãy liên hệ hotline hoặc để lại thông tin để được tư vấn giá
          chính xác nhất.
        </p>

        {/* Banner 2 */}
        <div className="flex justify-center w-full py-3 sm:py-4 md:py-6 lg:py-8">
          <img
            src={banner2}
            alt="Banner 2"
            className="w-full max-w-screen-2xl mx-auto min-h-[150px] sm:min-h-[200px] md:min-h-[300px] lg:min-h-[400px] max-h-[600px] object-contain"
          />
        </div>

        {/* Section 3: Enterprise Plans */}
        <div className="text py-4 sm:py-6 md:py-8 border-t-2 border-dotted border-gray-300">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            3. Báo giá các gói cáp quang VNPT dành cho công ty, doanh nghiệp
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-center px-4 sm:px-6 md:px-8 mt-3 sm:mt-4 max-w-4xl mx-auto">
            VNPT xin trân trọng gửi đến quý khách hàng là công ty các gói mạng
            internet cáp quang nhanh nhất, ổn định nhất hiện nay.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-screen-2xl mx-auto">
          {products3.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>

        {/* Banner 3 */}
        <div className="banner w-full py-3 sm:py-4 md:py-5">
          <img
            src={banner3}
            alt="Banner 3"
            className="w-full max-w-screen-2xl mx-auto min-h-[150px] sm:min-h-[200px] md:min-h-[300px] lg:min-h-[400px] max-h-[600px] object-cover"
          />
        </div>

        {/* Customer Service Images */}
        <div className="bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 max-w-screen-2xl mx-auto">
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="w-1 h-4 sm:h-5 md:h-6 bg-blue-600 mr-2"></div>
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#002c5f]">
              Hình ảnh lắp đặt và chăm sóc khách hàng của VNPT
            </h2>
          </div>

          <div className="w-full mb-3 sm:mb-4">
            <img
              src={cskh1}
              alt="VNPT Customer Service"
              className="w-full max-w-full min-h-[150px] sm:min-h-[180px] md:min-h-[200px] lg:min-h-[240px] max-h-[300px] object-cover rounded shadow-md"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            <img
              src={cskh3}
              alt="Install 1"
              className="w-full max-w-full min-h-[120px] sm:min-h-[150px] md:min-h-[180px] max-h-[200px] object-cover rounded shadow"
            />
            <img
              src={cskh2}
              alt="Call center"
              className="w-full max-w-full min-h-[120px] sm:min-h-[150px] md:min-h-[180px] max-h-[200px] object-cover rounded shadow"
            />
            <img
              src={cskh4}
              alt="Install 2"
              className="w-full max-w-full min-h-[120px] sm:min-h-[150px] md:min-h-[180px] max-h-[200px] object-cover rounded shadow"
            />
          </div>
        </div>

        {/* Floating Zalo and Call Buttons */}
        <div className="fixed bottom-20 right-4 flex flex-col items-center gap-4 z-50">
          {/* Zalo */}
          <a
            href="https://zalo.me/0818122111"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-14 h-14 rounded-full flex items-center justify-center bg-blue-500 shadow-lg hover:scale-105 transition-transform duration-200 animate-[shake_1.5s_infinite]"
          >
            <div className="absolute inset-0 bg-blue-300 opacity-30 rounded-full animate-ping"></div>
            <img src={zalo} alt="Zalo" className="w-7 h-7 z-10 relative" />
          </a>

          {/* Phone */}
          <a
            href="tel:0818122111"
            className="relative w-14 h-14 rounded-full flex items-center justify-center bg-red-500 shadow-lg hover:scale-105 transition-transform duration-200 animate-[shake_1.5s_infinite]"
          >
            <div className="absolute inset-0 bg-red-300 opacity-30 rounded-full animate-ping"></div>
            <svg
              className="w-6 h-6 text-white z-10 relative"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M2.25 4.5A2.25 2.25 0 014.5 2.25h2.356a2.25 2.25 0 012.123 1.53l.697 2.092a2.25 2.25 0 01-.52 2.362l-1.23 1.23a12.056 12.056 0 005.325 5.325l1.23-1.23a2.25 2.25 0 012.362-.52l2.092.697a2.25 2.25 0 011.53 2.123V19.5a2.25 2.25 0 01-2.25 2.25h-.75C9.457 21.75 2.25 14.543 2.25 6.75v-.75z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductList;