import "./homepage.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slide_one from "../../assets/slide_one.png";

const Homepage = () => {
  return (
    <Slide autoplay={false}>
      <div>
        <div className="each-slide-effect">
          <div>
            <div className="slidetext">
              <div id="celebrate">CELEBRATE YOUR ESSENCE</div>
              <div id="futuretext">SHAPING THE FUTURE OF BEAUTY</div>
              <div id="futurepara">
                We bring you the most advanced food supplement in a liquid form
                in a glass vial for skin beauty and health.
              </div>
              <div id="futureparatwo">Made with love in France</div>
              <div id="discoverbtn">
                <button>DISCOVER MORE</button>
              </div>
            </div>
          </div>
          <div>
            <img src={slide_one} alt="slide_one" />
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Homepage;
