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
      <div className="custom-sidebar-bg" />
      <div className="custom-sidebar">
        <div className="custom-sidebar-title">{title}</div>
        <div className="custom-sidebar-content">{children}</div>
      </div>
    </>
  )
}

export default SideBar
