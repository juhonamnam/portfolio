import HamburgerButton from 'global/components/atoms/HamburgerButton'
import SideBar from 'global/components/atoms/SideBar'

const Navbar = () => {
  return (
    <nav className="navbar">
      <HamburgerButton>
        <SideBar title={<>Ju Ho Nam{"'"}s Portfolio</>}>List</SideBar>
      </HamburgerButton>
    </nav>
  )
}

export default Navbar
