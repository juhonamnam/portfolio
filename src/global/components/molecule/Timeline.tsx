import { ReactNode } from 'react'
import { Card } from '../atoms/Card'

interface ITimelineInfo {
  time?: string
  title?: string
  content?: ReactNode
}

export const Timeline = ({ children }: { children: ITimelineInfo[] }) => {
  return (
    <div className="timeline">
      {children.map((timelineInfo, idx) => (
        <div key={idx} className="timeline-content-wrapper">
          <div className="time">{timelineInfo.time}</div>
          <Card color="primary">
            <h3 className="text-secondary">{timelineInfo.title}</h3>
            {timelineInfo.content}
          </Card>
        </div>
      ))}
    </div>
  )
}
