import React from 'react';
import newsBanner from "../img/banner-internet.jpg";
import HeaderBanner from './Header';
import vnptBuildingImage from "../img/toanha.jpg";
import vnptOfficeImage from "../img/vanphong.jpg";
import Footer from './Footer';

type Props = {};

const about = (props: Props) => {
  return (
    <>
      <HeaderBanner />
      <div className="relative my-4 sm:my-6 md:my-8">
        <img
          src={newsBanner}
          alt="VNPT News Banner"
          className="w-full h-16 sm:h-48 md:h-64 lg:h-72 object-cover rounded-lg brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-md sm:text-xl md:text-2xl font-bold text-white uppercase tracking-wide font-sans">
            Home » Giới thiệu về Mạng VNPT Telecom
            </h1>
          </div>
        </div>
      </div>

      <div className="py-4 px-4 sm:px-6 md:px-8 lg:px-12 max-w-screen-xl mx-auto">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-700 mb-4 tracking-tight">
          Khái quát thông tin giới thiệu về VNPT Telecom
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
          VNPT Telecom là cái tên đã quen thuộc với người dân Việt Nam.<br/> Đây là một tập đoàn bưu chính viễn thông lớn trong nước, phụ trách 63 tỉnh thành. Mạng VNPT là đơn vị tiên phong trực tiếp cung cấp dịch vụ bưu chính viễn thông tại nước ta.<br/> Đóng vai trò quan trọng trong sự phát triển mạnh mẽ về dịch vụ Bưu chính Viễn thông theo mô hình tập đoàn, đóng vai trò là kinh tế mũi nhọn của một nền kinh tế mạnh của nhà nước. Tập đoàn hoạt động trên nhiều lĩnh vực khác nhau, trong đó, Bưu chính Viễn thông là lĩnh vực cốt lõi.<br/> Sau thời gian dài hoạt động và được thành lập từ năm 1999 – 2009, VNPT đã được Chính phủ nước Việt Nam phong tặng danh hiệu Anh hùng Lao động trong giai đoạn 1999 – 2009. Đây chính là niềm vinh dự của toàn bộ công nhân viên chức đang học tập và làm việc tại VNPT Telecom.<br/> Năm 2006, VNPT Telecom đã chính thức trực thuộc Tập đoàn Bưu chính Viễn Thông Việt Nam. Cùng từ đó, VNPT Telecom đã có cơ hội phát triển theo mô hình tập đoàn, đóng vai trò là kinh tế mũi nhọn của một nền kinh tế mạnh của nhà nước. Tập đoàn hoạt động trên nhiều lĩnh vực khác nhau, trong đó, Bưu chính Viễn thông là lĩnh vực cốt lõi.<br/> Hiện nay, tập đoàn VNPT Viễn thông hiện nay đã chuyển đổi hình thức hoạt động sang công ty TNHH một thành viên do Nhà nước trực tiếp quản lý và đang vận hành theo mô hình tập đoàn. VNPT Telecom vận hành có những bước phát triển mạnh mẽ, trong đó trước tiên, cung cấp dịch vụ cho khoảng hơn 30 triệu thuê bao di động và 10 triệu thuê bao cố định.
        </p>
      </div>

      <div className="py-4 px-4 sm:px-6 md:px-8 lg:px-12 max-w-screen-xl mx-auto">
        <div className="mb-4">
          <img
            src={vnptBuildingImage}
            alt="Tập đoàn VNPT Telecom"
            className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto object-cover rounded-md shadow-sm mx-auto"
          />
          <p className="text-[10px] sm:text-xs text-gray-500 italic text-center mt-1">
            Tập đoàn VNPT Telecom
          </p>
        </div>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-700 mb-4 tracking-tight">
          Các lĩnh vực hoạt động của Tập đoàn VNPT Telecom
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-4">
          Tập đoàn VNPT Telecom hoạt động trên nhiều lĩnh vực, trong đó, lĩnh vực hoạt động chính là cung cấp dịch vụ bưu chính viễn thông. Lượng người sử dụng dịch vụ của VNPT Telecom trong suốt nhiều năm qua không ngừng tăng lên. Khi giới thiệu về VNPT Telecom không thể thiếu được các lĩnh vực hoạt động của tập đoàn này.
        </p>
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-3">
          Lĩnh vực hoạt động chính của tập đoàn VNPT
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-3">
          Giới thiệu về VNPT Telecom sẽ bao gồm cả những lĩnh vực hoạt động. Tập đoàn VNPT được biết là đơn vị đi đầu trong việc cung cấp dịch vụ Bưu chính Viễn thông. Đây là đơn vị tiên phong trong lĩnh vực này, hoạt động dưới sự quản lý của nhà nước:
        </p>
        <ul className="space-y-3 text-xs sm:text-sm md:text-base text-gray-600">
          {[
            'Tập đoàn VNPT cung cấp dịch vụ viễn thông, công nghệ thông tin và truyền thông đa phương tiện. Cung cấp cho dịch vụ mạng internet cho hơn 50% người dùng trên cả nước tại 36 tỉnh thành.',
            'Từ hiện công tác thiết kế, lắp đặt, sửa chữa, bảo dưỡng,… các công trình, thiết bị cung cấp dịch vụ viễn thông và công nghệ thông tin. Đảm bảo mang tới nguồn dịch vụ nguyên vẹn cho người sử dụng.',
            'Từ hiện công việc nghiên cứu, phát triển, chế tạo và sản xuất các thiết bị liên quan tới công nghệ thông tin, bưu chính viễn thông và truyền thông đa phương tiện.',
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-orange-500 mr-1.5">✔</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="py-4 px-4 sm:px-6 md:px-8 lg:px-12 max-w-screen-xl mx-auto">
        <div className="mb-4">
          <img
            src={vnptOfficeImage}
            alt="Mạng VNPT Telecom"
            className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto object-cover rounded-md shadow-sm mx-auto"
          />
          <p className="text-[10px] sm:text-xs text-gray-500 italic text-center mt-1">
            Mạng VNPT Telecom
          </p>
        </div>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-700 mb-4 tracking-tight">
          Lĩnh vực hoạt động cốt lõi quan của Tập đoàn VNPT
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-3">
          Bên cạnh các hoạt động của lĩnh vực chính, Tập đoàn VNPT còn được tham gia vào một số lĩnh vực kinh doanh khác. Những lĩnh vực phụ này giúp cải thiện tình hình tài chính cũng như chất lượng của VNPT trong trường lai.
        </p>
        <ul className="space-y-3 text-xs sm:text-sm md:text-base text-gray-600">
          {[
            'Tập đoàn VNPT tiến hành đầu tư tài chính vào lĩnh vực công nghệ thông tin, truyền thông đa phương tiện và viễn thông.',
            'Thực hiện công tác nghiên cứu và tiến hành thực hiện các dự án. Lương người lao động nhằm giữ gìn rõ ràng các lĩnh vực kinh doanh chính của doanh nghiệp trong thời gian qua. Đồng thời thực hiện bởi những cán bộ có chuyên môn nghề, đảm bảo mang tới nguồn nhân viên chuyên nghiệp, giỏi.',
            'VNPT hiện nay đang sở hữu khá nhiều văn phòng và bất động sản. Tập đoàn VNPT cũng tiên hành cho thuê các tài sản này để tăng thu nhập.',
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-orange-500 mr-1.5">✔</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="py-4 px-4 sm:px-6 md:px-8 lg:px-12 max-w-screen-xl mx-auto">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-700 mb-4 tracking-tight">
          VNPT đang cung cấp các sản phẩm dịch vụ chính như:
        </h2>
        <ul className="space-y-3 text-xs sm:text-sm md:text-base text-gray-600 mb-4">
          {[
            'Internet VNPT',
            'Lắp mạng VNPT',
            'Truyền hình VNPT',
            'Cáp quang VNPT',
            'Sim3G – 4G',
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-orange-500 mr-1.5">✔</span>
              {item}
            </li>
          ))}
        </ul>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-700 mb-4 tracking-tight">
          Những đơn vị Tập đoàn VNPT có sở hữu vốn điều lệ
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-3">
          Thông tin giới thiệu về VNPT Telecom sẽ bao gồm cả những đơn vị mà tập đoàn có đóng góp vốn. Tập đoàn VNPT tham gia đầu tư vào khá nhiều tổ chức. Các tổ chức do VNPT sở hữu 100% vốn điều lệ là có điều quan nhu: Trong công ty dịch vụ viễn thông, VNPT – Net, VNPT – Media. Ngoài ra là một số đơn vị VNPT sở hữu 50% vốn điều lệ như công ty Dịch vụ Tài chính Bưu điện, Công ty Cổ phần Thiết bị Bưu điện.
        </p>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-4">
          Trên đây là một số thông tin giới thiệu về VNPT Telecom. Đây là đơn vị Tập đoàn Bưu chính Viễn thông lớn tại nước ta. Sự dụng dịch vụ của VNPT sẽ mang tới cho bạn trải nghiệm hoàn hảo và chất lượng cung cấp nhu cực.
        </p>
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-3">
          Thông tin nhà mạng VNPT
        </h3>
        <ul className="space-y-3 text-xs sm:text-sm md:text-base text-gray-600">
          {[
            <span>
              Mạng VNPT – Tập đoàn Bưu chính Viễn thông Việt Nam{' '}
              <a href="https://vnpt-online.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                https://vnpt-online.com
              </a>
            </span>,
            <span>
              Trụ sở: Tòa nhà VNPT, 56 57 Phố Huỳnh Thúc Kháng, Phường Láng Hạ, Quận Đống Đa, Thành phố Hà Nội, Việt Nam
            </span>,
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-orange-500 mr-1.5">✔</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default about;