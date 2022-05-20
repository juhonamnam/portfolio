import { Timeline } from './molecule/Timeline'

const Career = () => {
  return (
    <div className="career-background">
      <div className="container career-layout">
        <Timeline>
          {[
            {
              title: 'J&FIRST',
              content: (
                <>
                  <p>
                    직무: 프론트엔드 개발자
                    <br />
                    사용 스택: React JS, Next.js, Spring Boot, MySQL
                  </p>
                </>
              ),
            },
            {
              title: 'Title 2',
              content: (
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{' '}
                </p>
              ),
            },
          ]}
        </Timeline>
      </div>
    </div>
  )
}

export default Career
