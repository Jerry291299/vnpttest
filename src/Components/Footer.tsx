import React from 'react'



const Footer = () => {
    return (
      <footer className="bg-gray-100 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <img src="/logo.png" alt="FPT Telecom" className="w-32" />
              <p className="text-sm text-gray-600 mt-2">
                Giấy chứng nhận ĐKDN số 0101778163 do Sở Kế hoạch và Đầu tư TP. Hà Nội cấp ngày 28/07/2005.
                Giấy phép cung cấp dịch vụ viễn thông số 255/GP-CVT do Cục Viễn Thông cấp ngày 07/11/2022.
              </p>
            </div>
            <div className="flex flex-wrap gap-8">
              <div>
                <h3 className="font-semibold">Về FPT Telecom</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Giới thiệu chung</li>
                  <li>Liên kết - Thành viên</li>
                  <li>Khách hàng - Đối tác</li>
                  <li>Quan hệ cổ đông</li>
                  <li>Tập đoàn FPT</li>
                  <li>Tuyển dụng</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Khách hàng FPT Telecom</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Hướng dẫn sử dụng dịch vụ</li>
                  <li>Giới thiệu bạn bè</li>
                  <li>Thanh toán Online</li>
                  <li>Góp ý khách hàng</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Chưa là khách hàng</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Sản phẩm dịch vụ</li>
                  <li>Khuyến mại</li>
                  <li>Tìm điểm giao dịch</li>
                  <li>Tin tức</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <p className="text-sm text-gray-600">© 2025 FPT Telecom. All rights reserved.</p>
            <div className="flex space-x-4 text-gray-600 text-xl">
           
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;