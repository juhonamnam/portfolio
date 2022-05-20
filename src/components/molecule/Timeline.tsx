import { ReactNode } from 'react'
import { Card } from '../atoms/Card'

interface ITimelineCard {
  title?: string
  content?: ReactNode
}

export const Timeline = ({ children }: { children: ITimelineCard[] }) => {
  return (
    <div className="timeline">
      <div className="outer">
        {children.map((timelineCard, idx) => (
          <Card key={idx} title={timelineCard.title}>
            {timelineCard.content}
          </Card>
        ))}
      </div>
    </div>
  )
}
