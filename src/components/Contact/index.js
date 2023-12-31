import Loader from 'react-loaders'
import AnimatedLetters from './../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer } from 'react-leaflet'

//style
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'contact_service',
        'contact_form',
        refForm.current,
        'MYwfw60MZWRflalz9'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in full time work opportunities - especially
            ambitious or large projects. However, if you have other requests or
            questions, don't hesitate to contact me using the form below.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <div className="form-grid">
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </div>
              <input type="submit" className="flat-button" value="SEND" />
            </form>
          </div>
        </div>

        <div className="map-wrap right-side-container">
          <MapContainer
            center={[43.07515, -89.38414]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <div className="info-map">
              <span className="name">Eric Shrader</span>
              <br /> <br />
              Madison, Wisconsin <br /> <br />
              CDT - Central Daylight Time <br />
              <span className="email">ericshrader101@gmail.com</span>
            </div>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
