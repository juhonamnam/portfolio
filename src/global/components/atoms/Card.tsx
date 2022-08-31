import { ReactNode } from 'react'
import { Color } from '../../util/types'

export const Card = ({
  children,
  color,
}: {
  children?: ReactNode
  color?: Color
}) => {
  return <div className={`card ${color && 'bg-' + color}`}>{children}</div>
}
