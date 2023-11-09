import './index.scss'
import { NavLink } from 'react-router-dom'
import {
  faHome,
  faUser,
  faEnvelope,
  faCode,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <NavLink to="/">
          <FontAwesomeIcon icon={faCode} color="lightblue" /> <br />
          Eric
        </NavLink>
      </div>

      <nav>
        <NavLink to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>

      <div className="websites">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.linkedin.com/in/eric-shrader"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/eric-shrader"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </div>
    </div>
  )
}

export default Sidebar
