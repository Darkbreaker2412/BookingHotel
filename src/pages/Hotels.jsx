import { hotels } from '../data/hotels.js'
import HotelCard from '../components/HotelCard.jsx'

export default function Hotels() {
  return (
    <div className="container section">
      <h1>Danh sách khách sạn</h1>
      <div className="grid">
        {hotels.map((h) => <HotelCard key={h.id} hotel={h} />)}
      </div>
    </div>
  )
}
