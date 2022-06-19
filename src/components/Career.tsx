import { Timeline } from './molecule/Timeline'

const Career = () => {
  return (
    <div className="career-background">
      <div className="container career-layout">
        <Timeline>
          {[
            {
              time: '2021.12 ~',
              title: 'J&FIRST',
              content: (
                <>
                  <p>직무: 프론트엔드 개발자</p>
                  <p>
                    <span className="badge">
                      <i className="icon-react" />
                      React JS
                    </span>
                    <span className="badge">
                      <i className="icon-nextjs" />
                      Next.js
                    </span>
                    <span className="badge">
                      <i className="icon-typescript" />
                      Typescript
                    </span>
                    <span className="badge">
                      <i className="icon-spring" />
                      Spring Boot
                    </span>
                    <span className="badge">
                      <i className="icon-mysql" />
                      MySQL
                    </span>
                    <span className="badge">
                      <i className="icon-nginx">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                      Nginx
                    </span>
                  </p>
                  <h4>주요 업무</h4>
                  <ul>
                    <li>라인비즈플러스 CMS 프론트엔드 개발</li>
                    <li>사용자 인증방식 개선</li>
                    <li>React JS에서 Next.js로 전환 작업</li>
                  </ul>
                </>
              ),
            },
            {
              time: '{Time}',
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
