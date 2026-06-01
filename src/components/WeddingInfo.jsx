/* Ported 1:1 from the original "Hoa Mộc Xanh" (boho-floral-green) theme:
   ceremony-info title + family info + announcement + couple names + ceremony date. */

const PRIMARY = '#30530F'
const GREY = '#464646'
const SERIF = '"Baskerville", "Times New Roman", serif'
const QELLIA = '"Fz Qellia", serif'
const AMP = '"UNI Chu truyen thong", "Times New Roman", serif'

const titleStyle = {
  color: PRIMARY,
  fontFamily: '"Times New Roman", serif',
  fontSize: '24px',
  fontWeight: 700,
  letterSpacing: '1px',
}

function FamilySide({ title, father, mother, address }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span style={{ color: PRIMARY, fontFamily: SERIF }}>{title}</span>
      <span className="text-[12px] md:text-[23px]" style={{ color: PRIMARY, fontFamily: SERIF, fontWeight: 600 }}>{father}</span>
      <span className="text-[12px] md:text-[23px]" style={{ color: PRIMARY, fontFamily: SERIF, fontWeight: 600 }}>{mother}</span>
      <div className="mt-1 w-[90%] md:w-[80%] mx-auto whitespace-pre-line flex flex-col" style={{ color: PRIMARY, fontFamily: SERIF, fontSize: '10px' }}>{address}</div>
    </div>
  )
}

const Name = ({ children }) => (
  <h3
    className="w-full flex items-center justify-center whitespace-nowrap leading-[55px] md:leading-[80px]"
    style={{ fontFamily: QELLIA, color: PRIMARY, fontSize: 'clamp(28px, 8vw, 64px)' }}
  >
    {children}
  </h3>
)

const BirthOrder = ({ children }) => (
  <div className="uppercase" style={{ color: PRIMARY, fontFamily: SERIF, fontSize: '10px', letterSpacing: '0.1em' }}>{children}</div>
)

export default function WeddingInfo() {
  return (
    <section id="thong-tin" className="relative">
      <h2 className="text-center uppercase mt-10 md:mt-[148px] mb-6 md:mb-8 px-4" style={titleStyle}>Thông Tin Lễ Cưới</h2>

      {/* Family info */}
      <div className="mb-6 md:mb-8">
        <div className="relative grid grid-cols-2 gap-2 md:gap-3 text-center">
          <FamilySide
            title="Ông Bà"
            father="Trần Văn Sỹ"
            mother="Nguyễn Thị Nhị Toàn"
            address={'SN 10/1/24 - Đường Hà Hoàng\nP. Trần Phú - Hà Tĩnh'}
          />
          <FamilySide
            title="Ông Bà"
            father="Trương Bá Linh"
            mother="Trần Thị Hồng Phượng"
            address={'SN 12 - Đường Hoàng Xuân Hãn\nHà Tĩnh'}
          />
        </div>
      </div>

      {/* Announcement */}
      <div className="text-center text-[15px] md:text-[18px] flex flex-col gap-1 mb-6 md:mb-8 uppercase" style={{ fontFamily: SERIF, color: PRIMARY }}>
        <span>Trân Trọng Kính Mời</span>
        <span>Tới Dự Bữa Tiệc Mừng Lễ Thành Hôn Của Hai Chúng Tôi</span>
      </div>

      {/* Couple names */}
      <div className="relative flex flex-col items-center text-center gap-3 md:gap-4">
        <Name>Trần Đức Linh</Name>
        <BirthOrder>Trưởng Nam</BirthOrder>
        <div className="text-[35px] md:text-[42px]" style={{ fontFamily: AMP, color: PRIMARY }}>&amp;</div>
        <Name>Trương Ngọc Linh Đan</Name>
        <BirthOrder>Thứ Nữ</BirthOrder>
      </div>

      {/* Ceremony date/time */}
      <div className="relative flex flex-col items-center gap-4 md:gap-5 text-center mt-6 md:mt-8" style={{ fontFamily: SERIF }}>
        <div className="flex flex-col items-center gap-2" style={{ color: PRIMARY }}>
          <div className="font-normal text-[16px] md:text-[18px] whitespace-pre-line text-center uppercase">{'Lễ Thành Hôn Được Cử Hành Tại\nKhách Sạn Sailing'}</div>
          <p className="font-normal text-[16px] md:text-[18px] mb-2 uppercase">Vào Lúc</p>
        </div>
        <div className="text-[20px] md:text-[30px]" style={{ color: PRIMARY, fontFamily: SERIF }}>11:00</div>
        <div className="flex items-center gap-6" style={{ color: PRIMARY }}>
          <span className="text-[12px] md:text-[16px] text-right" style={{ fontFamily: SERIF }}>THỨ BA</span>
          <span className="text-[20px] md:text-[28px] leading-none opacity-50" style={{ fontFamily: SERIF }}>|</span>
          <span className="text-[30px] md:text-[40px]" style={{ fontFamily: SERIF }}>09</span>
          <span className="text-[20px] md:text-[28px] leading-none opacity-50" style={{ fontFamily: SERIF }}>|</span>
          <span className="text-[12px] md:text-[16px] text-left" style={{ fontFamily: SERIF }}>Tháng 07</span>
        </div>
        <div className="text-[18px] md:text-[24px]" style={{ color: PRIMARY, fontFamily: SERIF }}>2026</div>
        <div className="text-xs md:text-sm uppercase tracking-[0.25em]" style={{ color: PRIMARY, fontFamily: SERIF }}>(Tức ngày 25/05 năm Bính Ngọ)</div>
      </div>
    </section>
  )
}
