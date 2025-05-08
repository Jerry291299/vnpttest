import React, { useState, useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import HeaderBanner from './Header';
import Footer from './Footer';

const Formdangkyonline = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "", internet: false, combo: false });
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value, type } = target;
    const checked = (target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    // Lấy reCAPTCHA token
    const recaptchaToken = recaptchaRef.current?.getValue();
    if (!recaptchaToken) {
      alert("Vui lòng xác nhận bạn không phải là robot.");
      setIsLoading(false);
      return;
    }

    const data = new FormData();
    data.append("Họ và tên", formData.name);
    data.append("Số điện thoại", formData.phone);
    data.append(
      "Nội dung cần tư vấn",
      formData.message.trim() !== "" ? formData.message : "Tôi cần tư vấn về lắp đặt Internet VNPT"
    );
    if (formData.internet) data.append("Internet", "true");
    if (formData.combo) data.append("Combo Internet", "true");
    data.append("_replyto", `${formData.phone}@noemail.fake`);
    data.append("_subject", "VNPT-Online - Khách hàng cần tư vấn");
    data.append("g-recaptcha-response", recaptchaToken);

    fetch("https://formspree.io/f/xanonnkz", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          setStatus("success");
          setFormData({ name: "", phone: "", message: "", internet: false, combo: false });
          if (recaptchaRef.current) {
            recaptchaRef.current.reset();
          }
        } else {
          setStatus("error");
          if (recaptchaRef.current) {
            recaptchaRef.current.reset();
          }
        }
        setTimeout(() => setStatus(null), 3000);
      })
      .catch(() => {
        setIsLoading(false);
        setStatus("error");
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        setTimeout(() => setStatus(null), 3000);
      });
  };

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => setStatus(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <>
    <HeaderBanner/>
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

      {status === "error" && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <span className="text-2xl">❌</span>
            <h3 className="text-lg font-bold text-red-700 mt-2">
              Gửi thất bại
            </h3>
            <p className="text-gray-600 mt-2">
              Vui lòng thử lại sau.
            </p>
          </div>
        </div>
      )}



      <section className="bg-white my-[60px] shadow-xl rounded-2xl p-6 max-w-2xl mx-auto border border-blue-200 relative">
        <div className="flex justify-center mb-6">
          <h2 className="text-2xl font-bold text-blue-700 uppercase tracking-wide">
            Đăng ký tư vấn lắp mạng VNPT
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Tên của bạn / Doanh nghiệp (*)</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Số điện thoại"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Số điện thoại (*)</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Nhập số điện thoại"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Bán đăng ký dịch vụ nào (*)</label>
            <div className="flex space-x-4 mb-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="internet"
                  checked={formData.internet}
                  onChange={handleChange}
                  className="mr-2"
                />
                Internet
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="combo"
                  checked={formData.combo}
                  onChange={handleChange}
                  className="mr-2"
                />
                Combo Internet
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Gói cước/Nội dung cần tư vấn</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="VD: Tôi muốn tư vấn gói Home 3"
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LcxxCQrAAAAAHfPyR2oPbawk4B6xR5o4AZSuxts"
            />
          </div>
          <p className="text-xs text-gray-600">
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
            disabled={isLoading}
            className={`w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Đang gửi...' : 'GỬI THÔNG TIN'}
          </button>
        </form>
      </section>

      <div className="py-6 px-4 sm:px-6 md:px-8 lg:px-12 max-w-screen-2xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold  mb-4">
            Thông tin liên hệ nhà mạng VNPT để lắp đặt
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            <span className="inline-flex items-start">
              <span className="text-orange-500 mr-2">✔</span>
              Mạng VNPT – Tập đoàn Bưu chính Viễn thông Việt Nam
            </span>
            <br />
            <span className="inline-flex items-start">
              <span className="text-orange-500 mr-2">✔</span>
              <strong>HOTLINE:</strong>{" "}
              <a
                href="https://zalo.me/0818122111"
                className="text-[#1E73BE] text-red-600 ml-[10px] hover:underline"
              >
                0818.122.111
              </a>
            </span>
            <br />
            <span className="inline-flex items-start">
              <span className="text-orange-500 mr-2">✔</span>
              <strong>Website:</strong>{" "}
              <a
                href="https://vnpt-online.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E73BE] ml-[10px] hover:underline"
              >
                https://vnpt-online.com
              </a>
            </span>
            <br />
            <span className="inline-flex items-start">
              <span className="text-orange-500 mr-2">✔</span>
              <strong className="mr-[10px]">Trụ sở:</strong> Tòa nhà VNPT, số 57
              Phố Huỳnh Thúc Kháng, Phường Láng Hạ, Quận Đống Đa, Thành phố Hà
              Nội, Việt Nam
            </span>
          </p>
        </div>

      
      <Footer/>
    </>
  );
};

export default Formdangkyonline;