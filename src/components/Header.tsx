import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        Intro
      </Link>
      <nav>
        <Link to="/place">Place</Link>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
  )
}
