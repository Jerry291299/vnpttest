import React from 'react'
import HeaderBanner from './Header'
import Footer from './Footer'
import newsBanner from '../img/chinh-sach-dieu-khoan-vnpt.png' // Import your image here

const tintuc = () => {
  return (
    <>
    <HeaderBanner/>

    <div className="bg-white py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 lg:px-12 max-w-screen-2xl mx-auto">
      {/* Header Section */}
      <div className="relative my-6 sm:my-8 md:my-10">
      <img
              src={newsBanner}
              alt="VNPT News Banner"
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg brightness-50"
            />
        <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase font-sans">
            TIN TỨC
          </h1>
          <h2 className="pt-[20px] text-base sm:text-lg md:text-xl lg:text-2xl text-white mt-2 font-semibold font-sans">
            Điều khoản - Chính sách
          </h2>
        </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
        <p className="mb-4">
          Chào mừng Quý khách đến với Website: <a href="https://vnpt-online.com/">https://vnpt-online.com/</a> (sau đây gọi là “VNPT Telecom”) được thiết kế và sở hữu bởi Tổng Công Ty Dịch Vụ Viễn Thông (VNPT Vinaphone). Khi quý khách truy cập vào Website chúng tôi có nghĩa là quý khách đồng ý với các điều khoản sử dụng sau đây. Nếu quý khách không đồng ý, xin vui lòng không sử dụng Website.
        </p>
        <p className="mb-4">
          Khi đăng nhập hoặc sử dụng các quyền lợi cơ bản, khách hàng sẽ chịu sự quản lý trực tiếp của hệ thống Website. Hệ thống Website sẽ đưa ra các quy định cụ thể, được cập nhật và thay đổi theo thời gian nhằm đảm bảo quyền lợi cơ bản của khách hàng, giúp khách hàng sử dụng website một cách hiệu quả và an toàn nhất.
        </p>
        <p>
          Việc sử dụng Website, sau khi thay đổi các điều khoản, sẽ được hiểu rằng Quý khách đã đồng ý với các điều kiện sử dụng mới, có hiệu lực ngay tại thời điểm đăng tải lên Website. Khi quý khách tiếp tục sử dụng Website, sau khi các thay đổi về điều khoản này được đăng tải lên website, có nghĩa là quý khách chấp nhận với những thay đổi đó.
        </p>
      </div>

      {/* Image Section */}

      <div className='justify-center items-center flex mt-6 sm:mt-8 md:mt-10'>
        <img src={newsBanner} alt="" />
      </div>
     

      {/* Subsection */}
      <div className="mt-6 sm:mt-8 md:mt-10">
          <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black uppercase mb-4">
            I. PHẠM VI ÁP DỤNG
          </h4>
          <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            <li className="mb-2">
              Website cung cấp sản phẩm/dịch vụ thương mại điện tử  https://vnpt-online.com/  do Tổng Công ty Dịch vụ Viễn thông trực tiếp vận hành.
            </li>
          </ul>

          <h5 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black uppercase mt-6 mb-4">
            1. ĐIỀU KHOẢN & ĐIỀU KIỆN SẼ ĐƯỢC ÁP DỤNG CHO KHÁCH HÀNG
          </h5>
          <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            <li className="mb-2">
              Mua Sản Phẩm bán trên VNPT Telecom.
            </li>
            <li className="mb-2">
              Có nhu cầu được giao Sản Phẩm đến các địa điểm theo Chính sách giao hàng đăng tải trên VNPT Telecom.
            </li>
          </ul>

          <h5 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black uppercase mt-6 mb-4">
            2. KHI GIAO KẾT HỢP ĐỒNG THEO MẪU, ĐIỀU KIỆN GIAO DỊCH CHUNG CÁ NHÂN, TỔ CHỨC CÓ TRÁCH NHIỆM XUẤT TRÌNH GIẤY TỜ
          </h5>
          <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            <li className="mb-2">
              Trường hợp là cá nhân: bản chính hộ chiếu, chứng minh nhân dân hoặc thẻ căn cước công dân hoặc các thông tin sử dụng đối với người có quốc tịch Việt Nam hoặc có quyền công dân lưu hành tại Việt Nam hoặc người nước ngoài (sau đây gọi là người lưu hành tại Việt Nam).
            </li>
            <li className="mb-2">
              Trường hợp là tổ chức: bản chính hoặc bản sao được chứng thực hợp lệ quyết định thành lập hoặc giấy chứng nhận đăng ký kinh doanh hoặc các giấy tờ tương đương khác xác định tư cách pháp lý của tổ chức (bao gồm các giấy tờ chứng minh pháp nhân, giấy phép thành lập, giấy phép hoạt động, giấy phép đầu tư, giấy chứng nhận đầu tư, giấy chứng nhận đăng ký kinh doanh hoặc các giấy tờ tương đương khác xác định tư cách pháp lý của tổ chức) được phép sử dụng dịch vụ viễn thông theo hợp đồng theo mẫu, điều kiện giao dịch chung mà tổ chức giao kết với doanh nghiệp viễn thông (trường hợp tổ chức giao cho người sử dụng đồng thời kiểm tra thông tin giấy tờ tùy thân của từng cá nhân). Trường hợp người đứng tên giao kết hợp đồng theo mẫu, điều kiện giao dịch chung không phải là người đại diện theo pháp luật của tổ chức thì phải xuất trình văn bản ủy quyền hợp pháp và giấy tờ tùy thân của mình.
            </li>
            <li className="mb-2">
              Đối với người dưới 14 tuổi hoặc người được giám hộ theo quy định của Bộ Luật Dân sự, việc giao kết hợp đồng theo mẫu, điều kiện giao dịch chung phải được thực hiện.
              <ul className="list-disc pl-5 mt-2">
                <li>
                  (Áp dụng theo Nghị định SG: 49/2017/ND-CP của Chính phủ ngày 24 tháng 4 năm 2017).
                </li>
              </ul>
            </li>
          </ul>

          <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black uppercase mt-6 sm:mt-8 md:mt-10 mb-4">
            II. QUY TRÌNH MUA HÀNG TRÊN VNPT TELECOM
          </h4>
          <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            <li className="mb-2">
              Các nội dung của quy trình mua hàng trên VNPT Telecom được quy định cụ thể tại Quy trình mua hàng trên VNPT Telecom.
            </li>
            <li className="mb-2">
              Để yêu cầu đặt hàng được xác nhận nhanh chóng, khách hàng vui lòng cung cấp đầy đủ và đầy đủ các thông tin liên quan đến việc giao nhận, hoặc các điều khoản và điều kiện của chương trình khuyến mãi (nếu có) mà khách hàng tham gia.
            </li>
          </ul>

          <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black uppercase mt-6 sm:mt-8 md:mt-10 mb-4">
            III. CHÍNH SÁCH KHUYẾN MÃI
          </h4>
          <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            <li className="mb-2">
              Khách hàng mua sản phẩm/dịch vụ trên VNPT Telecom được hưởng các chương trình khuyến mãi theo chính sách của VNPT Telecom theo từng thời điểm có trên khal khuyến mãi.
            </li>
          </ul>

          <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black uppercase mt-6 sm:mt-8 md:mt-10 mb-4">
            IV. PHƯƠNG THỨC THANH TOÁN
          </h4>
          <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            <li className="mb-2">
              Tùy theo đặc tính của từng loại hình sản phẩm/dịch vụ sẽ có chương trình thanh toán khách nhau được quy định cụ thể tại chính sách thanh toán.
            </li>
            <li className="mb-2">
              VNPT Telecom cam kết bảo mật các giao dịch thanh toán của khách hàng theo các quy định cụ thể tại chính sách bảo mật thanh toán.
            </li>
          </ul>

          <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black uppercase mt-6 sm:mt-8 md:mt-10 mb-4">
            V. CHÍNH SÁCH GIAO HÀNG
          </h4>
          <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            <li className="mb-2">
              Tùy theo đặc tính của từng loại hình sản phẩm/dịch vụ sẽ được giao đến địa chỉ theo yêu cầu của khách hàng hoặc gửi về email/SMS…vào thời gian được quy định cụ thể tại chính sách giao hàng.
            </li>
            <li className="mb-2">
              Trường trường hợp khách hàng muốn thay đổi lại địa chỉ nhận sản phẩm/dịch vụ, khách hàng cần thông báo lại cho Tổng đài CSKH đã được công bố tại VNPT TELECOM.
            </li>
          </ul>

          <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black uppercase mt-6 sm:mt-8 md:mt-10 mb-4">
            VI. CHÍNH SÁCH ĐỔI TRẢ SẢN PHẨM/DỊCH VỤ
          </h4>
          <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            <li className="mb-2">
              VNPT Telecom khuyến cáo khách hàng phải đọc kỹ các thông tin chi tiết về sản phẩm/dịch vụ hoặc gọi điện trực tiếp cho Tổng đài CSKH đã được công bố trên VNPT TELECOM để được tư vấn về sản phẩm/dịch vụ trước khi quyết định mua sản phẩm/dịch vụ đó.
            </li>
            <li className="mb-2">
              Việc đổi trả sản phẩm/dịch vụ được thực hiện theo quy định chi tiết tại chính sách đổi trả sản phẩm/dịch vụ.
            </li>
          </ul>

          <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black uppercase mt-6 sm:mt-8 md:mt-10 mb-4">
            VII. QUYỀN VÀ NGHĨA VỤ CỦA KHÁCH HÀNG
          </h4>
          <h5 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black uppercase mt-6 mb-4">
            Quyền của khách hàng:
          </h5>
          <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            <li className="mb-2">
              Được sử dụng các sản phẩm/dịch vụ cung cấp trên VNPT Telecom.
            </li>
            <li className="mb-2">
              Được yêu cầu hỗ trợ, giải đáp những thắc mắc liên quan đến thông tin chi tiết sản phẩm.
            </li>
            <li className="mb-2">
              Được đảm bảo các quyền lợi, cam kết của kèm với sản phẩm/dịch vụ.
            </li>
          </ul>
          <h5 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black uppercase mt-6 mb-4">
            Nghĩa vụ của khách hàng:
          </h5>
          <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            <li className="mb-2">
              Chịu trách nhiệm bảo mật tài khoản khách hàng đăng ký trên VNPT Telecom.
            </li>
            <li className="mb-2">
              Cung cấp đầy đủ và chính xác các thông tin chi tiết cho giao dịch mua/bán cung như: Kích thước sản phẩm/dịch vụ, chăm sóc khách hàng, giao/nhận quyết định khiếu nại như: họ và tên; số điện thoại; email; địa chỉ, giấy tờ tùy thân (chứng minh nhân dân/căn cước công dân/hộ chiếu); mã đơn hàng; các bằng chứng về đơn hàng, giao dịch thanh toán…
            </li>
            <li className="mb-2">
              Cam kết những thông tin cung cấp cho VNPT Telecom là đầy đủ và chính xác. Nếu khách hàng phát hiện bất cứ bên thứ ba nào có hành vi sử dụng trái phép tài khoản của mình trên VNPT Telecom thì khách hàng đó có trách nhiệm thông báo kịp thời cho VNPT Telecom để được hỗ trợ kịp thời và giải quyết vấn đề. Khách hàng nào vi phạm sẽ phải chịu trách nhiệm trước pháp luật về mọi hành vi sử dụng trái phép tài khoản và thực hiện đúng theo các quy định của pháp luật hiện hành.
            </li>
          </ul>

          <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black uppercase mt-6 sm:mt-8 md:mt-10 mb-4">
            VIII. QUYỀN VÀ NGHĨA VỤ CỦA VNPT TELECOM
          </h4>
          <h5 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black uppercase mt-6 mb-4">
            Quyền của VNPT Telecom:
          </h5>
          <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            <li className="mb-2">
              Được yêu cầu khách hàng sẵn sàng sản phẩm/dịch vụ và hoàn thành các bước để nhận và chính xác các thông tin chi tiết cho mua/bán, kiến nghị, khiếu nại nếu xảy ra; họ và tên; số điện thoại; email; địa chỉ; giấy tờ tùy thân (chứng minh nhân dân/căn cước công dân/hộ chiếu); mã đơn hàng; các bằng chứng về đơn hàng, giao dịch thanh toán…
            </li>
            <li className="mb-2">
              VNPT Telecom giữ bản quyền sử dụng sản phẩm/dịch vụ và toàn bộ các nội dung được đăng tải trên VNPT Telecom theo quy định pháp luật tại Việt Nam. Tất cả các biểu tượng, nội dung theo mẫu ngôn ngữ khác nhau trên VNPT Telecom đều thuộc quyền sở hữu của VNPT Telecom, nghiêm cấm mọi hành vi sao chép, sử dụng và phát tán bất hợp pháp các quyền sở hữu trên.
            </li>
          </ul>
          <h5 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black uppercase mt-6 mb-4">
            Nghĩa vụ của VNPT Telecom:
          </h5>
          <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            <li className="mb-2">
              Cung cấp đầy đủ và chính xác các thông tin chi tiết về sản phẩm/dịch vụ đang được triển khai kinh doanh hợp pháp trên VNPT Telecom.
            </li>
            <li className="mb-2">
              Lưu trữ và bảo mật thông tin khách hàng; thông tin đơn hàng, thanh toán; thông tin đơn hàng nhượng quyền các công tác từ cư trú.
            </li>
            <li className="mb-2">
              Hỗ trợ các cơ quan quản lý Nhà nước trong việc điều tra các giao dịch vi phạm pháp luật nhằm cung cấp thông tin đơn hàng, lịch sử giao dịch và các tài liệu khác về đối tượng có hành vi vi phạm pháp luật trên VNPT Telecom.
            </li>
            <li className="mb-2">
              VNPT Telecom sẽ có trách nhiệm xây dựng và công bố công khai các thông tin về sản phẩm trên website hoặc các phương tiện truyền thông chính thức của VNPT Telecom; thực hiện trách nhiệm bảo hành sản phẩm, dịch vụ; các quyền lợi khác của khách hàng sử dụng; xử lý đơn hàng sai, các sai sót trong giao dịch; công khai các thông tin về quyền lợi, trách nhiệm của các bên nếu xảy ra tranh chấp liên quan đến giao dịch. Tuy nhiên, nếu tình trạng sự cố trên xảy ra ngoài tầm kiểm soát, là những trường hợp bất khả kháng mà có gây thiệt hại cho các bên thì VNPT Telecom không phải chịu trách nhiệm liên đới.
            </li>
          </ul>

          <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black uppercase mt-6 sm:mt-8 md:mt-10 mb-4">
            IX. CHÍNH SÁCH GIẢI QUYẾT KHIẾU NẠI
          </h4>
          <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            <li className="mb-2">
              Khi phát sinh khiếu nại/tranh chấp, VNPT Telecom đề cao các giải pháp thương lượng, hòa giải các bên nhận duyệt để sử dụng các quyền lợi của VNPT Telecom.
            </li>
            <li className="mb-2">
              Khi phát sinh khiếu nại/tranh chấp, khách hàng thực hiện theo các bước được quy định tại Quy trình giải quyết khiếu nại.
            </li>
          </ul>

          <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black uppercase mt-6 sm:mt-8 md:mt-10 mb-4">
            X. CHÍNH SÁCH BẢO MẬT
          </h4>
          <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            <li className="mb-2">
              VNPT Telecom có trong việc bảo mật thông tin và sử dụng các biện pháp tốt nhất bảo vệ thông tin cá nhân và thanh toán của khách hàng. Các thông tin của khách hàng trong quá trình giao dịch sẽ được mã hóa để đảm bảo an toàn.
            </li>
            <li className="mb-2">
              Các bên không được sử dụng bất kỳ chương trình, công cụ hay hình thức nào khác để can thiệp vào hệ thống hay làm thay đổi dữ liệu của VNPT Telecom nhằm nghiêm cấm việc phát tán, truyền bá hay có chi cho bất kỳ hoạt động nào nhằm can thiệp, phá hoại hay xâm nhập vào dữ liệu của hệ thống. Bất kỳ cá nhân hay tổ chức vi phạm sẽ bị tước bỏ mọi quyền lợi cũng như sẽ bị truy tố trước pháp luật nếu cần thiết.
            </li>
            <li className="mb-2">
              Mọi thông tin giao dịch trên VNPT Telecom sẽ được bảo mật nhưng trong trường hợp cơ quan pháp luật yêu cầu, VNPT Telecom sẽ buộc phải cung cấp thông tin này cho cơ quan pháp luật.
            </li>
            <li className="mb-2">
              Thông tin cá nhân và thanh toán của các bên được VNPT Telecom cam kết bảo mật tuyệt đối theo chính sách bảo mật thông tin cá nhân và thanh toán của VNPT Telecom.
            </li>
          </ul>
        </div>
    </div>







    <Footer/>
    
    </>
    
  )
}

export default tintuc