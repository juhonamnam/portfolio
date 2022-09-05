import { Color } from 'global/util/types'
import { ReactNode } from 'react'
import { Card } from '../atoms/Card'

interface TimelineInfo {
  time?: string
  title?: string
  content?: ReactNode
}

interface TimelineProps {
  mainColor?: Color
  accentColor?: Color
  children: TimelineInfo[]
}

export const Timeline = ({
  children,
  mainColor = 'primary',
  accentColor = 'secondary',
}: TimelineProps) => {
  return (
    <div className="timeline">
      <div className={'period-line bg-' + mainColor} />
      {children.map((timelineInfo, idx) => (
        <div key={idx} className="timeline-content-wrapper">
          <div className="period">
            <div className={'period-mark bd-' + accentColor} />
            {timelineInfo.time}
          </div>
          <Card color={mainColor}>
            <h3 className={'text-' + accentColor}>{timelineInfo.title}</h3>
            {timelineInfo.content}
          </Card>
        </div>
      ))}
    </div>
  )
}
