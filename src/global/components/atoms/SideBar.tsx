import { ReactNode } from 'react'

const SideBar = ({
  children,
  title,
}: {
  children?: ReactNode
  title?: ReactNode
}) => {
  return (
    <>
      <div className="sidebar-bg" />
      <div className="sidebar">
        <div className="sidebar-title">{title}</div>
        <div className="sidebar-content">{children}</div>
      </div>
    </>
  )
}

export default SideBar
