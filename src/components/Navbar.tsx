import HamburgerButton from './atoms/HamburgerButton'
import SideBar from './atoms/SideBar'

const Navbar = () => {
  return (
    <nav className="custom-navbar">
      <HamburgerButton>
        <SideBar title={<>Ju Ho Nam{"'"}s Portfolio</>}>
          List
        </SideBar>
      </HamburgerButton>
    </nav>
  )
}

export default Navbar
