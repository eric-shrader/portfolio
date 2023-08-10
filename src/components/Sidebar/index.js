import './index.scss'
import logoS from './../../assets/images/logo-s.png'
import logoSubtitle from './../../assets/images/logo_sub.png'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={logoS} alt="logo" />
        <img className="sub-logo" src={logoSubtitle} alt="eric" />
      </Link>
    </div>
  )
}

export default Sidebar
