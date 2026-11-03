import { useNavigate } from 'react-router-dom'
import { hotels } from '../data/hotels.js'
import HotelCard from '../components/HotelCard.jsx'

export default function Home() {
  const navigate = useNavigate()
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Tìm khách sạn hoàn hảo cho chuyến đi của bạn</h1>
          <p>Đặt phòng nhanh chóng, giá tốt nhất.</p>
          <form className="search-box" onSubmit={(e) => { e.preventDefault(); navigate('/hotels') }}>
            <label>Thành phố
              <select>
                <option>Tất cả</option><option>Hà Nội</option><option>Hồ Chí Minh</option>
                <option>Đà Nẵng</option><option>Nha Trang</option><option>Đà Lạt</option><option>Phú Quốc</option>
              </select>
            </label>
            <label>Loại phòng
              <select><option>Tất cả</option><option>Standard</option><option>Deluxe</option><option>Suite</option></select>
            </label>
            <label>Ngày đến<input type="date" /></label>
            <label>Ngày đi<input type="date" /></label>
            <button className="btn" type="submit">🔍 Tìm kiếm</button>
          </form>
        </div>
      </section>

      <section className="section container">
        <h2>Khách sạn nổi bật</h2>
        <div className="grid">
          {hotels.slice(0, 3).map((h) => <HotelCard key={h.id} hotel={h} />)}
        </div>
      </section>
    </>
  )
}
