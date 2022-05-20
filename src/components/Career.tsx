import { Timeline } from './molecule/Timeline'

const Career = () => {
  return (
    <div className="career-background">
      <div className="container career-layout">
        <Timeline>
          {[
            {
              time: '2022 ~',
              title: 'J&FIRST',
              content: (
                <>
                  <p>
                    직무: 프론트엔드 개발자
                    <br />
                    사용 스택: React JS, Next.js, Spring Boot, MySQL
                  </p>
                  <ul>
                    <h4>주요 업무</h4>
                    <li>라인비즈플러스 CMS 프론트엔드 개발</li>
                    <li>사용자 인증방식 개선</li>
                    <li>React JS에서 Next.js로 전환 작업</li>
                  </ul>
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
