import './ingredientsbag.css';
import bg_1 from '../../assets/bg_1.png';

const Ingredientsbag = () => {
  return (
    <div className="ingredientsbag">
      <div
        style={{
          backgroundImage: `url(${bg_1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "389px",
        }}
      ></div>
    </div>
  );
}

export default Ingredientsbag