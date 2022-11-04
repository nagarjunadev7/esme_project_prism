import './header.css';
import { Homepage, Navbar, Topbar } from '../../components';
const Header = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Homepage />
    </div>
  )
}

export default Header;