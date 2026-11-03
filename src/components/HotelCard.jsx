export default function HotelCard({ hotel }) {
  return (
    <article className="card">
      <img src={hotel.image} alt={hotel.name} className="card-img" />
      <div className="card-body">
        <div className="card-top">
          <span className="badge">{hotel.city}</span>
          <span>⭐ {hotel.rating}</span>
        </div>
        <h3>{hotel.name}</h3>
        <p className="card-desc">{hotel.description}</p>
        <div className="price">{hotel.price}<small>/đêm</small></div>
      </div>
    </article>
  )
}
