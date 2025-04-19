import React from 'react';
import HeaderBanner from './Header';
import Footer from './Footer';
import newsBanner from "../img/banner-internet.jpg";
import tv1 from "../img/truyen-hinh-mytv-vnpt.jpg";
import mytvChannelsImage from "../img/kenh.jpg";
import mytvInterfaceImage from "../img/kenh2.jpg";
import zalo from "../img/Icon_of_Zalo.svg.png";

type Props = {};

const tv = (props: Props) => {

  const pricingData = [
    {
      package: 'MyTV Silver',
      content: [
        'Cung cấp hơn 80 kênh truyền hình SD và các kênh Radio',
        'Dịch vụ tua, xem lại tối đa dung các chương trình truyền hình trong 3 ngày',
        'Dịch vụ tivi thế hệ truyền hình: thông tin về ẩm thực, múa, gia cầm... của các doanh nghiệp',
        'Dịch vụ thông tin biết: giá cả thị trường, giao thông, thời tiết',
        'Dịch vụ chia sẻ hình ảnh: khách hàng có thể chia sẻ upload hình ảnh, video liên hệ thông MyTV',
        'Gói nội dung theo yêu cầu: khách hàng có thể yêu cầu MyTV VNPT cập nhật âm nhạc, phim, sức khỏe làm đẹp, karaoke, thể thao... (tính phí SD)',
      ],
      price: '60,000 VNĐ/TV/1 tháng',
    },
    {
      package: 'MyTV Silver HD',
      content: [
        'Cung cấp cho khách hàng hơn 80 kênh truyền hình tín hiệu SD, 18 kênh tín hiệu HD và các kênh Radio',
        'Dịch vụ tua, xem lại tối đa dung các chương trình truyền hình trong 3 ngày',
        'Dịch vụ tivi thế hệ truyền hình, dịch vụ chia sẻ hình ảnh, tin tức',
        'Gói nội dung theo yêu cầu (tính phí SD và HD)',
      ],
      price: '80,000 VNĐ/TV/1 tháng',
    },
    {
      package: 'MyTV Gold',
      content: [
        'Toàn bộ nội dung thuộc gói dịch vụ MyTV Silver',
        'Miễn phí tất cả các dịch vụ theo yêu cầu của khách hàng có tính phí SD',
      ],
      price: '120,000 VNĐ/TV/1 tháng',
    },
    {
      package: 'MyTV Gold HD',
      content: [
        'Toàn bộ nội dung thuộc gói dịch vụ MyTV Silver HD',
        'Miễn phí tất cả các dịch vụ theo yêu cầu của khách hàng có tính phí SD và HD',
      ],
      price: '135,000 VNĐ/TV/1 tháng',
    },
  ];
  return (
    <>
      <HeaderBanner />
      <div className="relative my-6 sm:my-8 md:my-10">
        <img
          src={newsBanner}
          alt="VNPT News Banner"
          className="w-full h-20 sm:h-64 md:h-80 lg:h-50 object-cover rounded-lg brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="justify-center text-center mb-6 sm:mb-8 md:mb-10">
            <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-2xl font-bold text-white font-sans">
              Home » Sản phẩm dịch vụ » Truyền hình MyTV VNPT
            </h1>
          </div>
        </div>
      </div>

      <div className="py-6 px-4 sm:px-6 md:px-8 lg:px-12 max-w-screen-2xl mx-auto">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 mb-4">
          TRUYỀN HÌNH MYTV VNPT
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
          Truyền hình MyTV VNPT là một trong dịch vụ truyền hình tivi nổi bật và được khách hàng đánh giá cao vào sự lựa chọn kênh đa dạng và giá rẻ. Vây quý khách hãy tìm hiểu kỹ lắp đặt MyTV thuê bao cá nhân. Gói cước đăng ký sử dụng dịch vụ MyTV của nhà mạng VNPT bao nhiêu một tháng? Hãy cùng VNPT khám phá dịch vụ ngay qua bài viết dưới đây.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 font-semibold">
          Hotline tư vấn lắp truyền hình MyTV VNPT: <a href="tel:0818122111" className="text-[#1E73BE] hover:underline">0818.122.111</a> hỗ trợ 24/7
        </p>
      </div>

      <section className="mb-6 px-4 sm:px-6 md:px-8 lg:px-12 max-w-screen-2xl mx-auto">
        <div className=" rounded-lg overflow-hidden flex flex-col items-center">
          <img
            src={tv1}
            alt="VNPT Internet Promotion"
            className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto object-cover rounded-t-lg sm:rounded-lg shadow-md"
          />
          <div className="p-4 text-center">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">
              Hotline tư vấn lắp cáp quang VNPT:{" "}
              <a
                href="tel:0818.122.111"
                className="text-[#1E73BE] hover:underline"
              >
                0818.122.111
              </a>{" "}
              hỗ trợ 24/7
            </p>
          </div>
        </div>
      </section>

      <div className="py-6 px-4 sm:px-6 md:px-8 lg:px-12 max-w-screen-2xl mx-auto">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 mb-4">
          Đặc điểm về truyền hình MyTV
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
          Truyền hình MyTV là dịch vụ truyền hình của Tập đoàn Bưu chính Viễn thông Việt Nam - VNPT cung cấp vào năm 2009. Mục đích nhằm mang đến cho khách hàng gói giá trị phong phú, đa dạng và phù hợp mọi lứa tuổi, mọi vị trí địa lý của mọi màn hình chuẩn smart TV. Từ khi ra mắt đến nay MyTV đã được rất nhiều khách hàng lựa chọn sử dụng.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6">
          Với dịch vụ MyTV, khách hàng có thể xem đa dạng nội dung tại bất cứ thời điểm nào với tính năng tua, xem lại, đọc báo trên TV. Ngoài ra, truyền hình MyTV còn mang đến nhiều ưu điểm nổi bật như sau:
        </p>
        <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-700 mb-6">
          {[
            'Nội dung đa dạng: Với hơn 220 kênh truyền hình phong phú, khách hàng có thể thoải mái lựa chọn phim, truyền hình, thể thao, giải trí, trẻ em… chỉ với một thiết bị thông minh như Tablet, SmartTV…',
            'Đa chức năng, đa màn hình: Người dùng có thể trải nghiệm những dịch vụ MyTV VNPT trên nhiều thiết bị khác nhau như: Tivi, điện thoại, máy tính bảng, laptop…',
            'Mức lợi mọi nơi: Không với các dịch vụ truyền hình truyền thống bắt buộc khách hàng trải nghiệm mọi điều đãng ở bất kỳ đâu. Ngay cả khi quên lịch phát sóng chương trình yêu thích thì bạn vẫn có thể tua xem lại, lưu trữ chương trình vô cùng nhanh chóng và tiện lợi. Điều này giúp những người không dùng chỉ biết là dịch vụ tần tâm, chu đáo.',
          ].map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-orange-500 mr-2">✔</span>
              {feature}
            </li>
          ))}
        </ul>
        <div className="mb-4">
          <img
            src={mytvChannelsImage}
            alt="MyTV Channels"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <p className="text-xs sm:text-sm text-gray-500 italic text-center">
          Dịch vụ MyTV cung cấp hơn 220 kênh truyền hình phong phú, đa dạng
        </p>
      </div>

      <div className="flex w-full justify-center items-center space-x-2 sm:space-x-3 py-3 sm:py-4">
        <a
          href="https://zalo.me/0818122111"
          className="flex items-center bg-white rounded-full shadow-lg border-2 sm:border-4 border-blue-300 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4"
        >
          <img
            src={zalo}
            alt="Zalo"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mr-2 sm:mr-3"
          />
          <span className="text-red-600 font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
            0818.122.111
          </span>
        </a>
      </div>


      <div className="py-6 px-4 sm:px-6 md:px-8 lg:px-12 max-w-screen-2xl mx-auto">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 mb-4">
        Dịch vụ truyền hình MyTV gồm những gì?
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6">
        Khi đăng ký sử dụng dịch vụ MyTV VNPT, bạn sẽ được cung cấp đa dạng các kênh truyền hình, dịch vụ như sau:
      </p>
      <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-700 mb-6">
        {[
          'Dịch vụ truyền hình: MyTV VNPT cung cấp cho người dùng hơn 220 kênh truyền hình hấp dẫn như thể thao, phim, ca nhạc, tin tức, khám phá... Đặc biệt, dịch vụ MyTV còn sở hữu tính năng khóa chương trình truyền hình, vô cùng tiện lợi để bạn quản lý các nội dung chương trình mà trẻ em có thể xem.',
          'Dịch vụ tạm dừng: Với MyTV, người dùng có thể tạm dừng chương trình đang phát bất cứ lúc nào và tiếp tục xem khi có nhu cầu.',
          'Dịch vụ lưu trữ: Gói khách hàng có lựa chọn, ghi và lưu trữ nội dung chương trình yêu thích trên các kênh truyền hình và mọi nơi là bất cứ lúc nào. Đặc biệt, khách hàng còn có thể tua lại để xem chương trình mà mình yêu thích có thể đặt để độ tuy chỉnh ghi khi có việc bận.',
          'Truyền hình xem lại: Với dịch vụ này, bạn có thể xem lại các chương trình truyền hình đã phát sóng trước đó một cách dễ mà không lo bỏ lỡ các chương trình mà mình yêu thích.',
          'Nhóm kênh mở rộng: Truyền hình MyTV VNPT cung cấp thêm các gói như K+ nhằm giúp người dùng có thể xem các chương trình truyền hình ngay tại nhà. Bên cạnh đó, MyTV còn có một số gói dịch vụ khác nhau: Danet, Film…, dành cho những khách hàng yêu cầu sử dụng nâng cao chuyên sâu sẽ một lựa.',
        ].map((service, index) => (
          <li key={index} className="flex items-start">
            <span className="text-orange-500 mr-2">✔</span>
            <span>
              <strong>{service.split(': ')[0]}:</strong> {service.split(': ')[1]}
            </span>
          </li>
        ))}
      </ul>
    </div>
    <div className="flex w-full justify-center items-center space-x-2 sm:space-x-3 py-3 sm:py-4">
        <a
          href="https://zalo.me/0818122111"
          className="flex items-center bg-white rounded-full shadow-lg border-2 sm:border-4 border-blue-300 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4"
        >
          <img
            src={zalo}
            alt="Zalo"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mr-2 sm:mr-3"
          />
          <span className="text-red-600 font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
            0818.122.111
          </span>
        </a>
      </div>

    <div className="py-6 px-4 sm:px-6 md:px-8 lg:px-12 max-w-screen-2xl mx-auto">
      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
        Truyền hình MyTV VNPT cung cấp thêm các gói như K+ nhằm giúp người dùng có thể xem các chương trình truyền hình ngay tại nhà. Bên cạnh đó, MyTV còn có một số gói dịch vụ truyền hình khác: Danet, Film+,… dành cho những khách hàng có nhu cầu sử dụng nâng cao chuyên sâu sẽ một lựa.
      </p>
      <div className="mb-4">
        <img
          src={mytvInterfaceImage}
          alt="MyTV VNPT Interface"
          className="w-full h-auto rounded-lg shadow-md"
          />
      </div>
      <p className="text-xs sm:text-sm text-gray-500 italic text-center">
        MyTV hỗ trợ đa dạng dịch vụ đáp ứng nhu cầu khách hàng
      </p>
    </div>



    <div className="py-6 px-4 sm:px-6 md:px-8 lg:px-12 max-w-screen-2xl mx-auto">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 mb-4">
        Giá cước phí sử dụng truyền hình MyTV VNPT hàng tháng
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6">
        Dưới đây là bảng giá cước phí hàng tháng dành cho các thuê bao sử dụng dịch vụ MyTV tren gói cước thuê:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm sm:text-base md:text-lg text-gray-700">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Gói dịch vụ</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Nội dung dịch vụ</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Cước phí</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-300 px-4 py-2 font-semibold">{row.package}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <ul className="space-y-1">
                    {row.content.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-orange-500 mr-2">✔</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="border border-gray-300 px-4 py-2">{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mt-4">
        Ngoài ra, nếu khách hàng đăng ký sử dụng thêm các gói dịch vụ khác sẽ trả thêm tiền, như gói K+ là 150.000 đồng/ tháng, VTV CAB là 30.000 đồng/ tháng, FIM+ là 50.000 đồng/ tháng.
      </p>
    </div>

    <div className="flex w-full justify-center items-center space-x-2 sm:space-x-3 py-3 sm:py-4">
        <a
          href="https://zalo.me/0818122111"
          className="flex items-center bg-white rounded-full shadow-lg border-2 sm:border-4 border-blue-300 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4"
        >
          <img
            src={zalo}
            alt="Zalo"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mr-2 sm:mr-3"
          />
          <span className="text-red-600 font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
            0818.122.111
          </span>
        </a>
      </div>


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
          <strong>HOTLINE:</strong>{' '}
          <a href="https://zalo.me/0818122111" className="text-[#1E73BE] text-red-600 ml-[10px] hover:underline">
            0818.122.111
          </a>
        </span>
        <br />
        <span className="inline-flex items-start">
          <span className="text-orange-500 mr-2">✔</span>
          <strong>Website:</strong>{' '}
          <a href="https://vnpt-online.com" target="_blank" rel="noopener noreferrer" className="text-[#1E73BE] ml-[10px] hover:underline">
            https://vnpt-online.com
          </a>
        </span>
        <br />
        <span className="inline-flex items-start">
          <span className="text-orange-500 mr-2">✔</span>
          <strong className='mr-[10px]'>Trụ sở:</strong> Tòa nhà VNPT, số 57 Phố Huỳnh Thúc Kháng, Phường Láng Hạ, Quận Đống Đa, Thành phố Hà Nội, Việt Nam
        </span>
      </p>
    </div>

    




      <Footer />
    </>
  );
};

export default tv;