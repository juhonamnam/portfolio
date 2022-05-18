import { Button } from 'react-bootstrap'

const Intro = () => {
  return (
    <div className="intro-background">
      <div className="custom-container intro-layout">
        <div className="intro">
          <h1>
            <small>Hello, I am</small>
            <br />
            Ju Ho Nam
            <br />
            <small>Full Stack Developer</small>
          </h1>
          <Button>learn More</Button>
        </div>
      </div>
    </div>
  )
}

export default Intro
