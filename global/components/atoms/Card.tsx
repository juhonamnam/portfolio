import { ReactNode } from 'react'
import { BackgroundColor } from '../../util/types'

export const Card = ({
  children,
  color,
}: {
  children?: ReactNode
  color?: BackgroundColor
}) => {
  return <div className={`card ${color && 'bg-' + color}`}>{children}</div>
}
