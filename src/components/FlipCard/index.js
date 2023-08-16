//style
import './index.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as brands from '@fortawesome/free-brands-svg-icons'
import * as solids from '@fortawesome/free-solid-svg-icons'

const FlipCard = ({ logo, color, name, children, link }) => {
  if (brands[logo] != null) {
    logo = brands[logo]
  } else {
    logo = solids[logo]
  }
  return (
    <a
      className="link-wrapper"
      href={link}
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <FontAwesomeIcon icon={logo} color={color} />
          </div>
          <div className="flip-card-back">
            <h1>{name}</h1>
            <p>{children}</p>
            <p className="learn-more">Click to learn more</p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default FlipCard
