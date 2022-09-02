import { ReactNode } from 'react'

const HamburgerButton = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="hamburger-container">
      <input type="checkbox" className="hamburger-checkbox" />
      <div className="hamburger">
        <div />
      </div>
      <div className="hamburger-content">{children}</div>
    </div>
  )
}

export default HamburgerButton
