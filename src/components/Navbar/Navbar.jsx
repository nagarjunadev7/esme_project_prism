import './navbar.css';
import logo from '../../assets/website_logo.png';
import location from '../../assets/location.png';
import person from '../../assets/person.png';
import shopingbag from '../../assets/shoppingbag.png';
import SearchIcon from '@mui/icons-material/Search';
import Humberger from './Humberger';

const Navbar = () => {
  return (
    <>
    <Humberger />
    <div className='esme_navbar'>
    <div className='esme_navbar-links'>
      <div className='esme_navbar-links-logo'>
        <h1><img src={logo} alt="website_logo" /></h1>
      </div>
      <div className='esme_navbar-links_container'>
        <p><a href='#shop'>SHOP</a></p>
        <p><a href='#yourconcern'>YOUR CONCERN</a></p>
        <p><a href='#efffectiveness'>EFFECTIVENESS</a></p>
        <p><a href='#innovations'>INNOVATIONS</a></p>
        <p><a href='#ourstory'>OUR STORY</a></p>
        <p><a href='#joinu' id='joinu'>JOIN OUR COMMUNITY</a></p>
        <p><a href='#buynow' id='buynow'>BUY NOW</a></p>
        <p><a href='#search'><SearchIcon /></a></p>
        <p><a href='#location'><img src={location} alt="location"/></a></p>
        <p><a href='#person'><img src={person} alt="person"/></a></p>
        <p><a href='#shopbag'><img src={shopingbag} alt="shopingbag"/></a></p>
      </div>
    </div>

    </div>
    </>
  )
}

export default Navbar;