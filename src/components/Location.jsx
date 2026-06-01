import flowerImg from '../assets/flower.webp'

/* Ported 1:1 from the original "Hoa Mộc Xanh" (boho-floral-green) location (i.ie). */

const PRIMARY = '#30530F'
const SERIF = '"Baskerville", "Times New Roman", serif'

const sectionTitleStyle = {
  color: PRIMARY,
  fontFamily: '"Times New Roman", serif',
  fontSize: '20px',
  fontWeight: 700,
  letterSpacing: '1px',
}

const ADDRESS = 'Khách Sạn Sailing - Hội trường tầng 1\nSố 02 Đường Xô Viết Nghệ Tĩnh\nPhường Thành Sen - Hà Tĩnh'
const MAPS_QUERY = 'Khach+san+Sailing+Xo+Viet+Nghe+Tinh+Thanh+Sen+Ha+Tinh'

export default function Location() {
  return (
    <section id="dia-diem" className="relative pt-10 md:pt-12">
      <img src={flowerImg} alt="" className="sec-flower fbg-lo11" />

      <h2 className="text-center uppercase" style={sectionTitleStyle}>Tiệc Cưới Sẽ Tổ Chức Tại</h2>

      <div
        className="mx-auto mt-3 max-w-sm md:max-w-[500px] text-center text-sm md:text-base tracking-wide whitespace-pre-line flex flex-col items-center pb-3"
        style={{ color: PRIMARY, fontFamily: SERIF }}
      >
        {ADDRESS}
      </div>

      <div
        className="h-[267px] md:h-[380px] w-full max-w-[338px] md:max-w-[560px] rounded-[15px] overflow-hidden mx-auto border"
        style={{ borderColor: PRIMARY }}
      >
        <iframe
          title="Bản đồ địa điểm tiệc cưới"
          src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
          className="w-full h-full"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}
