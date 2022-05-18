import { ReactNode } from 'react'

const HamburgerButton = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="custom-hamburger-container">
      <input type="checkbox" className="custom-hamburger-checkbox" />
      <div className="custom-hamburger">
        <div />
      </div>
      <div className="custom-hamburger-content">{children}</div>
    </div>
  )
}

export default HamburgerButton
