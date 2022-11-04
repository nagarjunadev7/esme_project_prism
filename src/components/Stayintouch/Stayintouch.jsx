import './stayintouch.css';
import stay from '../../assets/stay.png';

const Stayintouch = () => {
  return (
    <div className='stayintouch'>
      <div className='stayin_touch_one'>
        <h2>STAY IN TOUCH</h2>
        <img src={stay} alt="stayIntouch" />
        <p>Lorem ipsum dolor sit amet. Ut aspernatur reprehenderit in voluptatibus voluptatem aut accusamus dolorum ea deserunt </p>
      </div>

      <div className='stayin_touch_two'>
        <h2>NEVER MISS AN EMAIL</h2>
        <input type="text" id='input' placeholder='Your E-mail'/><button>SUBSCRIBE</button>
        <p>Lorem ipsum dolor sit amet. Ut aspernatur reprehenderit in voluptatibus voluptatem aut accusamus dolorum ea deserunt </p>
      </div>
    </div>
  )
}

export default Stayintouch