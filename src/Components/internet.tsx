import React from "react";
import newsBanner from "../img/banner-internet.jpg";
import capquang from "../img/lap-cap-quang-VNPT.jpg";
import Header from "./Header";
import tv from "../img/lap-combo-cap-quang-VNPT-va-truyen-hinh-My-TV.jpg";
import Footer from "./Footer";
import zalo from "../img/Icon_of_Zalo.svg.png";

type Props = {};

const internet = (props: Props) => {
  return (
    <>
      <Header />
      <div className="relative my-6 sm:my-8 md:my-10">
        <img
          src={newsBanner}
          alt="VNPT News Banner"
          className="w-full h-20 sm:h-64 md:h-80 lg:h-50 object-cover rounded-lg brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="justify-center text-center mb-6 sm:mb-8 md:mb-10">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-white uppercase font-sans">
              Lắp cáp quang VNPT khuyến mãi tháng 8/2024 – Mạng VNPT
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Table of Contents */}

        {/* Why Choose VNPT */}
        <section id="section-1" className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold text-red-600 mb-4">
            Tại sao nên lắp cáp quang VNPT?
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            Sử dụng internet đi kèm nhu cầu sử dụng các thiết bị thông minh, từ
            điện thoại, máy tính, laptop, tivi, các thiết bị thông minh khác. Để
            đáp ứng được nhu cầu sử dụng mạng tốc độ cao, VNPT đã triển khai
            cung cấp dịch vụ internet cáp quang tốc độ cao với giá cước ưu đãi
            nhất hiện nay. Để tìm hiểu thêm thông tin chi tiết về dịch vụ cáp
            quang VNPT, bạn vui lòng liên hệ qua số{" "}
            <a
              href="tel:0818.122.111"
              className="text-blue-600 hover:underline"
            >
              0818.122.111
            </a>{" "}
            hỗ trợ 24/7.
          </p>
        </section>

        {/* Promotional Banner */}
        <section className="mb-6">
          <div className="bg-blue-200 rounded-lg overflow-hidden">
            <img
              src={capquang}
              alt="VNPT Internet Promotion"
              className="w-full h-auto"
            />
            <div className="p-4 text-center">
              <p className="text-sm md:text-base font-semibold">
                Hotline tư vấn lắp cáp quang VNPT:{" "}
                <a
                  href="tel:0818.122.111"
                  className="text-blue-600 hover:underline"
                >
                  0818.122.111
                </a>{" "}
                hỗ trợ 24/7
              </p>
            </div>
          </div>
        </section>

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

        {/* Internet Service Description */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <p className="text-sm md:text-base text-gray-700">
            Internet cáp quang VNPT đi kèm với nhiều ưu đãi hấp dẫn, phù hợp với
            mọi nhu cầu sử dụng internet trong gia đình, cơ quan, doanh nghiệp,
            quán game... Nhờ đó, khách hàng sử dụng dịch vụ internet VNPT đã tin
            tưởng và sử dụng dịch vụ lâu dài. Một vài đặc điểm nổi bật của VNPT
            như tốc độ truyền tải cao, tính ổn định cao, giá thành hợp lý.
          </p>
        </section>

        {/* FAQ Sections */}
        <section id="section-2" className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            1. Mang Internet cáp quang là gì?
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            Internet cáp quang VNPT là dịch vụ cung cấp internet tốc độ cao
            thông qua hạ tầng cáp quang hiện đại. Công nghệ này sử dụng sợi
            quang để truyền dẫn tín hiệu, đảm bảo tốc độ nhanh, ổn định và ít bị
            ảnh hưởng bởi thời tiết, môi trường. Mạng cáp quang VNPT phù hợp cho
            cả hộ gia đình, doanh nghiệp và các quán game cần tốc độ internet
            cao.
          </p>
        </section>

        <section id="section-3" className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            2. Khuyến Mãi Lắp Đặt Cáp Quang VNPT Nhiều Ưu Đãi Khủng
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-base md:text-lg font-semibold text-blue-600">
                A. Gói cước lắp cáp quang VNPT
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                VNPT cung cấp nhiều gói cước internet cáp quang với tốc độ và
                giá cả đa dạng, phù hợp với nhu cầu sử dụng của từng đối tượng
                khách hàng. Các gói cước thường đi kèm ưu đãi miễn phí lắp đặt,
                tặng thêm tháng sử dụng hoặc giảm giá khi thanh toán trước.
              </p>
            </div>

            <section id="section-3" className="mb-6">
              <div className="space-y-4">
                <div>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm md:text-base">
                      <thead>
                        <tr className="bg-blue-500 text-gray-900">
                          <th className="border border-gray-400 px-3 py-2 font-semibold text-center">
                            Gói cước
                          </th>
                          <th className="border border-gray-400 px-3 py-2 font-semibold text-center">
                            Tốc độ
                          </th>
                          <th className="border border-gray-400 px-3 py-2 font-semibold text-center">
                            Nội thành HCM & HN
                          </th>
                          <th className="border border-gray-400 px-3 py-2 font-semibold text-center">
                            Ngoại thành & Tỉnh
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            name: "Home 1",
                            speed: "80Mbps",
                            hcm_hn: "Ngừng triển khai",
                            other: "165,000",
                          },
                          {
                            name: "Home 2",
                            speed: "120Mbps",
                            hcm_hn: "220,000",
                            other: "175,000",
                          },
                          {
                            name: "Home 3",
                            speed: "150Mbps",
                            hcm_hn: "249,000",
                            other: "180,000",
                          },
                          {
                            name: "Home 4",
                            speed: "200Mbps",
                            hcm_hn: "259,000",
                            other: "200,000",
                          },
                          {
                            name: "Home 5",
                            speed: "250Mbps",
                            hcm_hn: "325,000",
                            other: "245,000",
                          },
                          {
                            name: "Home 3 Mesh",
                            speed: "150Mbps",
                            hcm_hn: "279,000",
                            other: "279,000",
                          },
                          {
                            name: "Home 4 Mesh",
                            speed: "200Mbps",
                            hcm_hn: "289,000",
                            other: "289,000",
                          },
                          {
                            name: "Home 5 Mesh",
                            speed: "300Mbps",
                            hcm_hn: "349,000",
                            other: "349,000",
                          },
                        ].map((plan, index) => (
                          <tr
                            key={index}
                            className={
                              index % 2 === 0 ? "bg-white" : "bg-blue-300 font-semibold "
                            }
                          >
                            <td className="border border-gray-400 px-3 py-2 font-semibold text-center">
                              {plan.name}
                            </td>
                            <td className="border border-gray-400 px-3 py-2 text-center">
                              {plan.speed}
                            </td>
                            <td className="border border-gray-400 px-3 py-2 text-center">
                              {plan.hcm_hn}
                            </td>
                            <td className="border border-gray-400 px-3 py-2 text-center">
                              {plan.other}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="text-sm justify-center text-center text-gray-900 mt-2">
        <p>- Đóng trước 06 tháng tặng thêm 01 tháng</p>
        <p>- Đóng trước 12 tháng tặng thêm 02 tháng</p>
          </div>
                  <p className="bg-blue-600 text-white text-sm px-3 py-2 mt-2">
                    Ngoại thành & Tỉnh: Áp dụng cho các huyện tại HCM, Hà Nội &
                    61 Tỉnh còn lại
                  </p>
                  <div className="mt-4">
                    <h4 className="text-sm md:text-base font-semibold mb-2">
                      Lưu ý:
                    </h4>
                    <ul className="space-y-2 text-sm md:text-base text-gray-700">
                      {[
                        "Giá trên đã bao gồm thuế Vat 10%",
                        "Chỉ áp dụng đóng cước trước 6 Tháng và 12 Tháng",
                        "Trang bị Modem WiFi tốc độ cao",
                        "Gói HomeNet: Cam kết tối thiểu 2Mbps băng thông quốc tế",
                      ].map((note, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-orange-500 mr-2">✔</span>
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </section>

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

            {/* Add more subsections as needed */}


            <div className="bg-blue-200 rounded-lg overflow-hidden">
            <img
              src={tv}
              alt="VNPT Internet Promotion"
              className="w-full h-auto"
            />
            <div className="p-4 text-center">
              <p className="text-sm md:text-base font-semibold">
                Hotline tư vấn lắp cáp quang VNPT:{" "}
                <a
                  href="tel:0818.122.111"
                  className="text-blue-600 hover:underline"
                >
                  0818.122.111
                </a>{" "}
                hỗ trợ 24/7
              </p>
            </div>
          </div>

          <div>
      <h3 className="text-base md:text-lg font-semibold text-blue-600 mb-2">
        B. Gói Combo lắp cáp quang VNPT và Truyền hình MyTV
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm md:text-base">
          <thead>
            <tr className="bg-blue-500 text-gray-900">
              <th className="border border-gray-400 px-3 py-2 font-semibold text-center">Gói cước</th>
              <th className="border border-gray-400 px-3 py-2 font-semibold text-center">Tốc độ</th>
              <th className="border border-gray-400 px-3 py-2 font-semibold text-center">Nội thành HCM/HN</th>
              <th className="border border-gray-400 px-3 py-2 font-semibold text-center">Ngoại thành & Tỉnh</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Home NET 1', speed: '100Mbps + MyTV', hcm_hn: 'Không áp dụng', other: '225,000' },
              { name: 'Home NET 2', speed: '150Mbps + MyTV', hcm_hn: '250,000', other: '240,000' },
              { name: 'Home NET 3', speed: '200Mbps + MyTV', hcm_hn: '279,000', other: '269,000' },
              { name: 'Home NET 4', speed: '250Mbps + MyTV', hcm_hn: '289,000', other: '279,000' },
              { name: 'Home NET 6', speed: '500Mbps + MyTV', hcm_hn: '599,000', other: '499,000' },
            ].map((plan, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-300 font-semibold'}>
                <td className="border border-gray-400 px-3 py-2 font-semibold text-center">{plan.name}</td>
                <td className="border border-gray-400 px-3 py-2 text-center">{plan.speed}</td>
                <td className="border border-gray-400 px-3 py-2 text-center">{plan.hcm_hn}</td>
                <td className="border border-gray-400 px-3 py-2 text-center">{plan.other}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-sm text-center text-gray-900 mt-2">
      <p>- Đóng trước 06 tháng tặng thêm 01 tháng</p>
      <p>- Đóng trước 12 tháng tặng thêm 02 tháng</p>
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
    </div>

    <div>
      <h3 className="text-base md:text-lg font-semibold text-blue-600 mb-2">
        C. Gói cước lắp cáp quang VNPT cho Doanh Nghiệp
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm md:text-base">
          <thead>
            <tr className="bg-blue-400 text-gray-900">
              <th className="border border-gray-400 px-3 py-2 font-semibold text-center">Tên gói</th>
              <th className="border border-gray-400 px-3 py-2 font-semibold text-center">Băng thông trong nước</th>
              <th className="border border-gray-400 px-3 py-2 font-semibold text-center">Băng thông QT tối thiểu</th>
              <th className="border border-gray-400 px-3 py-2 font-semibold text-center">Giá cước</th>
              <th className="border border-gray-400 px-3 py-2 font-semibold text-center">Đồng trục 6 Tháng</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'F80+', domestic: '100Mb', international: '3Mb', price: '975,000', sixMonths: '5,850,000' },
              { name: 'F100', domestic: '150Mb', international: '2Mb', price: '780,000', sixMonths: '4,680,000' },
              { name: 'F100+', domestic: '150Mb', international: '4Mb', price: '1,625,000', sixMonths: '9,750,000' },
              { name: 'F100VIP', domestic: '150Mb', international: '6Mb', price: '2,600,000', sixMonths: '15,600,000' },
              { name: 'F150', domestic: '200Mb', international: '4Mb', price: '1,950,000', sixMonths: '11,700,000' },
              { name: 'F150+', domestic: '200Mb', international: '6Mb', price: '5,200,000', sixMonths: '31,200,000' },
              { name: 'F150VIP', domestic: '200Mb', international: '9Mb', price: '6,500,000', sixMonths: '39,000,000' },
              { name: 'F200', domestic: '300Mb', international: '5Mb', price: '3,900,000', sixMonths: '23,400,000' },
              { name: 'F200+', domestic: '300Mb', international: '8Mb', price: '7,150,000', sixMonths: '42,900,000' },
              { name: 'F200VIP', domestic: '300Mb', international: '10Mb', price: '9,750,000', sixMonths: '58,500,000' },
              { name: 'F300', domestic: '400Mb', international: '8Mb', price: '7,800,000', sixMonths: '46,800,000' },
              { name: 'F300+', domestic: '400Mb', international: '12Mb', price: '9,750,000', sixMonths: '58,500,000' },
              { name: 'F300VIP', domestic: '400Mb', international: '15Mb', price: '13,000,000', sixMonths: '78,000,000' },
              { name: 'F500', domestic: '600Mb', international: '10Mb', price: '11,700,000', sixMonths: '70,200,000' },
              { name: 'F500+', domestic: '600Mb', international: '18Mb', price: '16,625,000', sixMonths: '99,750,000' },
              { name: 'F500VIP', domestic: '600Mb', international: '25Mb', price: '19,500,000', sixMonths: '117,000,000' },
            ].map((plan, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-300 font-semibold'}>                <td className="border border-gray-400 px-3 py-2 font-semibold text-center">{plan.name}</td>
                <td className="border border-gray-400 px-3 py-2 text-center">{plan.domestic}</td>
                <td className="border border-gray-400 px-3 py-2 text-center">{plan.international}</td>
                <td className="border border-gray-400 px-3 py-2 text-center">{plan.price}</td>
                <td className="border border-gray-400 px-3 py-2 text-center">{plan.sixMonths}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-sm text-center text-gray-900 mt-2">
      <p>- Đóng trước 06 tháng tặng thêm 01 tháng</p>
      <p>- Đóng trước 12 tháng tặng thêm 02 tháng</p>
      </div>
      <div className="mt-4">
        <h4 className="text-sm md:text-base font-semibold mb-2">Lưu ý:</h4>
        <ul className="space-y-2 text-sm md:text-base text-gray-700">
          {[
            'Giá trên chưa bao gồm thuế Vat 10%',
            'Giá cước áp dụng tại HCM, các tỉnh thành có gói hotline để biết thông tin chi tiết',
            'Đồng cước trả trước 06 tháng tặng 01 tháng',
            'Đồng cước trả trước 12 tháng tặng 02 tháng',
          ].map((note, index) => (
            <li key={index} className="flex items-start">
              <span className="text-orange-500 mr-2">✔</span>
              {note}
            </li>
          ))}
        </ul>
      </div>
    </div>

          </div>
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
      </main>

      


      





      <Footer/>
    </>
  );
};

export default internet;
