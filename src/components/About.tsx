import Image from 'next/image'

const About = () => {
  return (
    <div className="about-background">
      <div className="custom-container about-layout">
        <Image src="/favicon.ico" alt="" width={200} height={200} />
        <div className="about">
          <h2>About Me</h2>
          <p>
            I am a self-taught programmer, currently working as a web developer.
            I am passionate in creating values using available sources and
            tools. My specialties are web development and machine learning.
          </p>
          <p>
            #Python #JavaScript #TypeScript #HTML #CSS #Java #MySQL #React.js
            #Next.js #Flask #Spring #TensorFlow
          </p>
          <div className="general-info">
            <div>
              <div>Work</div>
              <div>J&FIRST</div>
            </div>
            <div>
              <div>Education</div>
              <div>
                University of Massachusetts Amherst
                <br />
                Bachelor of Science in Mathematics
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
