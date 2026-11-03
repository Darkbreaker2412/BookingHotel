import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container section narrow">
      <h1>404 – Không tìm thấy trang</h1>
      <Link to="/">Về trang chủ</Link>
    </div>
  )
}
