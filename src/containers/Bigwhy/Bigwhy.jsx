import { Blogbutton } from "../../components";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import MyBackgroundImage from '../../assets/mainImage.png';
import "./bigwhy.css";

const Bigwhy = () => {
  return (
    <div>
      <div className="emsc_second-page">
      <div
      style={{
        backgroundImage: `url(${MyBackgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '80%',
        width:'100%',
      }}></div>
        <div className="big_why">
        <div className="images">
            <img src={image1} alt="image1"/>
            <img src={image2} alt="image2"/>
          <div></div>
        </div>
        <div id="textontop">
        <div>
          <h1>An answer to a big WHY?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem
          </p>
          <p><TaskAltIcon />Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor Lorem ipsum dolor sit amet</p>
          <p><TaskAltIcon />Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor Lorem ipsum dolor sit amet</p>
          <p><TaskAltIcon />Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor Lorem ipsum dolor sit amet</p>
          <p><TaskAltIcon />Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor Lorem ipsum dolor sit amet</p>
          </div>
          </div>
        </div>
      </div>
      <Blogbutton />
    </div>
  );
};

export default Bigwhy;
