import { NavLink, Link } from 'react-router-dom'

export default function Header() {
  const cls = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">🏨 BookingHotel</Link>
        <nav className="nav">
          <NavLink to="/" end className={cls}>Trang chủ</NavLink>
          <NavLink to="/hotels" className={cls}>Khách sạn</NavLink>
          <NavLink to="/about-us" className={cls}>Giới thiệu</NavLink>
          <NavLink to="/contact" className={cls}>Liên hệ</NavLink>
        </nav>
      </div>
    </header>
  )
}
