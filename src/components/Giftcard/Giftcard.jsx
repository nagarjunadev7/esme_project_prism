import './giftcard.css';
import gift_card from '../../assets/gift_card.png';
import deliver from '../../assets/location.png';
import payments from '../../assets/payments.png';

const Giftcard = () => {
  return (
    <div className='giftcard'>
    <div className='gift_card_container'>
    <img src={deliver} alt="gift_card_image" />
    <p>FREE DELIVERY</p>
    </div>
    <div className='gift_card_container'>
    <img src={gift_card} alt="gift_card_image" />
    <p>FREE DELIVERY</p>
    </div>
    <div className='gift_card_container'>
    <img src={payments} alt="gift_card_image" />
    <p>SECURE PAYMENTS</p>
    </div>
    </div>
  )
}

export default Giftcard