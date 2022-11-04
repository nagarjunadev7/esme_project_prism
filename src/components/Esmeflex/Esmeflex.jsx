import "./esmeflex.css";
import flex_one from '../../assets/flex_one.png';
import flex_two from '../../assets/flex_two.png';
import flex_three from '../../assets/flex_three.png';
import flex_four from '../../assets/flex_four.png';

const Esmeflex = () => {
  return (
    <div className="esmeflex">
    <img src={flex_one} alt="flex_one" />
    <img src={flex_two} alt="flex_two" />
    <img src={flex_three} alt="flex_three" />
    <img src={flex_four} alt="flex_four" />
    </div>
  );
};

export default Esmeflex;
