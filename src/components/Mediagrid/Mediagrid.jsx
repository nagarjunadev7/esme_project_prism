import './mediagrid.css';
import media_image_one from "../../assets/media_image_one.png";
import media_image_two from "../../assets/media_image_two.png";
import media_image_three from "../../assets/media_image_three.png";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import BackupIcon from '@mui/icons-material/Backup';

const Mediagrid = () => {
  return (
    <div>

<div className="media_images">
        <div className="image_one">
          <img src={media_image_one} alt="image_one" />
          <div id='my_media_one'>
            <h3>Velit at dolorem dignissimos</h3>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting,..
            </p>
            <div className='media_symbols'>
              <div><FavoriteBorderIcon /></div>
              <div><LocalPostOfficeIcon /></div>
              <div><BackupIcon/></div>
            </div>
          </div>
        </div>

        <div className="image_one">
          <img src={media_image_two} alt="image_one" />
          <div id='my_media_one'>
            <h3>Velit at dolorem dignissimos</h3>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting,..
            </p>
            <div className='media_symbols'>
              <div><FavoriteBorderIcon /></div>
              <div><LocalPostOfficeIcon /></div>
              <div><BackupIcon/></div>
            </div>
          </div>
        </div>

        <div className="image_one">
          <img src={media_image_three} alt="image_one" />
          <div id='my_media_one'>
            <h3>Velit at dolorem dignissimos</h3>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting,..
            </p>
            <div className='media_symbols'>
              <div><FavoriteBorderIcon /></div>
              <div><LocalPostOfficeIcon /></div>
              <div><BackupIcon/></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Mediagrid