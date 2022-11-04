import './ingrediantsviewmore.css';
import bg_2 from '../../assets/bg_2.png';

const Ingrediantsviewmore = () => {
  return (
    <div className='viewmore_btn'>
      <div
        style={{
          backgroundImage: `url(${bg_2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
         <button>View More</button>
      </div>
      <div className='session_button'>
        <button>BOOK A 30 MIN SESSION</button>
      </div>
    </div>
  )
}

export default Ingrediantsviewmore