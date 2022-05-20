import { ReactNode } from 'react'

export const Card = ({
  children,
  title,
}: {
  children?: ReactNode
  title?: string
}) => {
  return (
    <div className="card">
      <h3 className="title">{title}</h3>
      {children}
    </div>
  )
}
