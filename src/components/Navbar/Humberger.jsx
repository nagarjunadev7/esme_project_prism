import './humberger.css';
import { slide as Menu } from 'react-burger-menu';
function Humberger(){
    // function showSettings (e) {
    //     e.preventDefault();
    //   }
    return(
        <div >
        <Menu right className='bm-menu-wrap'>
        <a className="menu-item" href="#shop">SHOP</a>
        <a className="menu-item" href="#concern">YOUR CONCERN</a>
        <a className="menu-item" href="#effect">EFFECTIVENESS</a>
        <a className="menu-item" href="#innvo">INNOVATIONS</a>
        <a className="menu-item" href="#story">OUR STORY</a>
        <a className="menu-item" href="#join">JOIN OUR COMMUNITY</a>
        <a className="menu-item" href="#buy">BUY NOW</a>
        </Menu>
        </div>
    )
}

export default Humberger;