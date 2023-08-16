import './index.scss'

import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import FlipCard from '../FlipCard'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious full stack developer looking for a role in
            established IT companies or start-up companies looking to make a
            positive impact on the world. I would love the oportunity to work
            with the latest technologies on challenging and diverse projects.
          </p>
          <p>
            I'm confident, naturally curious, and perpetually working on
            improving my skills.
          </p>
          <p>
            If I were to define myself in one sentence, I would say that I am a
            dreamer, a problem solver, a life long learner, and someone who
            would love to make a difference in the world through my unique
            talents and experience.
          </p>
        </div>

        <div className="right-side-container tech-stack">
          <h1>My tech stack</h1>
          <div className="tech-stack-grid">
            <FlipCard
              logo="faHtml5"
              color="#F06529"
              link="https://en.wikipedia.org/wiki/HTML5#:~:text=HTML5%20(Hypertext%20Markup%20Language%205,as%20the%20HTML%20Living%20Standard."
              name="HTML5"
            >
              this is the language for structuring webpages
            </FlipCard>
            <FlipCard
              logo="faCss3"
              color="#28A4D9"
              link="https://en.wikipedia.org/wiki/CSS"
              name="CSS3"
            >
              this is the language for styling webpages
            </FlipCard>
            <FlipCard
              logo="faJsSquare"
              color="#EFD81D"
              link="https://en.wikipedia.org/wiki/JavaScript"
              name="JavaScript"
            >
              this is the programming language of the front end
            </FlipCard>
            <FlipCard
              logo="faReact"
              color="#5ED4F4"
              link="https://react.dev/"
              name="React"
            >
              this is a javascript library for making reusable UI components
              like these flip cards
            </FlipCard>
            <FlipCard
              logo="faJava"
              color="	#f89820"
              link="https://www.java.com/en/"
              name="Java"
            >
              this is a general purpose programming language I use on the server
              side
            </FlipCard>
            <FlipCard
              logo="faLeaf"
              color="#68bd45"
              link="https://spring.io/"
              name="Spring"
            >
              this is a java framework for dependency injection, I use it on the
              backend
            </FlipCard>
            <FlipCard
              logo="faDatabase"
              color="#0f256e "
              link="https://en.wikipedia.org/wiki/SQL"
              name="SQL"
            >
              this is a domain specific language for querying from relational
              databases
            </FlipCard>
            <FlipCard
              logo="faGitAlt"
              color="#EC4D28"
              link="https://git-scm.com/"
              name="Git"
            >
              this is a distributed version control software
            </FlipCard>
            <FlipCard
              logo="faAws"
              color="#ff9900"
              link="https://aws.amazon.com/"
              name="AWS"
            >
              this is amazon web services, a cloud computing platform I use to
              deploy me websites
            </FlipCard>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
