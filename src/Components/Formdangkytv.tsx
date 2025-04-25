import React, { useState, useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Formdangkytv = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      formData.message.trim() !== "" ? formData.message : "Tôi cần tư vấn về truyền hình VNPT"
    );
    data.append("_replyto", `${formData.phone}@noemail.fake`);
    data.append("_subject", "VNPT-Online - Khách hàng cần tư vấn");
    data.append("g-recaptcha-response", recaptchaToken);

    fetch("https://formspree.io/f/xanonnkz", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: data,
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          setStatus("success");
          setFormData({ name: "", phone: "", message: "" });
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

  // Tự động đóng popup sau 2 giây nếu là trạng thái thành công
  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => setStatus(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [status]);

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
            <p className="text-gray-600 mt-2">
              Vui lòng thử lại sau.
            </p>
          </div>
        </div>
      )}

      <section className="bg-white shadow-xl rounded-2xl p-8 mb-10 max-w-2xl mx-auto border border-blue-100 relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-center text-blue-700 uppercase tracking-wide">
            Đăng ký tư vấn truyền hình VNPT
          </h2>
          <button
            onClick={() => setFormData({ name: "", phone: "", message: "" })}
            className="text-gray-400 hover:text-gray-600"
            title="Đóng"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên *</label>
            <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
              <svg className="w-5 h-5 text-gray-400 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nhập họ và tên"
                required
                className="w-full p-3 pl-10 border-none rounded-lg focus:outline-none"
              />
            </div>
          </div>
          
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại *</label>
            <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
              <svg className="w-5 h-5 text-gray-400 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h18M3 12h18M3 19h18" />
              </svg>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Nhập số điện thoại"
                required
                className="w-full p-3 pl-10 border-none rounded-lg focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gói cước/Nội dung cần tư vấn</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="VD: Tôi muốn tư vấn gói truyền hình VNPT"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
          </div>
          {/* Thêm reCAPTCHA */}
          <div>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LcxxCQrAAAAAHfPyR2oPbawk4B6xR5o4AZSuxts"
            />
          </div>
          {/* Thông báo bảo mật của Google */}
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
            className={`w-full flex justify-center items-center gap-2 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? (
              <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8 8 8 0 01-8-8z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            )}
            {isLoading ? 'Đang gửi...' : 'Gửi đăng ký'}
          </button>
        </form>
      </section>
    </>
  );
};

export default Formdangkytv;