import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from './../AnimatedLetters'

//style
import './index.scss'

//img
import me from './../../assets/images/me.png'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['E', 'r', 'i', 'c', ' ', 'S', 'h', 'r', 'a', 'd', 'e', 'r']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="left-side-container">
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>e</span>
              <span className={`${letterClass} _13`}>l</span>
              <span className={`${letterClass} _14`}>l</span>
              <span className={`${letterClass} _15`}>o</span>
              <span className={`${letterClass} _16`}>&nbsp;</span>
              <span className={`${letterClass} _17`}>t</span>
              <span className={`${letterClass} _18`}>h</span>
              <span className={`${letterClass} _19`}>e</span>
              <span className={`${letterClass} _20`}>r</span>
              <span className={`${letterClass} _21`}>e,</span>
              <br />
              <span className={`${letterClass} _22`}>I</span>
              <span className={`${letterClass} _23`}>'m</span>
              &nbsp;
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={24}
              />
              <br />
              <span className={`${letterClass} _36`}>a</span>
              <span className={`${letterClass} _37`}>&nbsp;</span>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={38}
              />
            </h1>
            <h2>Full Stack Developer</h2>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
        </div>
        <div className="right-side-container">
          <div className="me-container">
            <img src={me} alt="image of eric shrader" />
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
