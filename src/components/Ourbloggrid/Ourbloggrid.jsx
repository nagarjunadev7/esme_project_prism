import "./ourbloggrid.css";
import ourblogimg from "../../assets/blog_image_one.png";
import ourblogimgfour from "../../assets/blog_image_three.png";
import blog_four from "../../assets/blog_four.png";
import blog_person from '../../assets/blog_person.png';

const Ourbloggrid = () => {
  return (
    <div className="ourblog_grid">
      <div class="container">
        <div class="div1_two">
          {/* <div className="blog_grid_nav">
          <div>All</div>
          <div>Category 01</div>
          <div>Category 02</div>
          <div>Lorem</div>
        </div> */}
          <img src={ourblogimg} alt="ourblogimg" />
        </div>
        <div class="div2_two">
          <h1>01</h1>
          <h1>BLOG</h1>
        </div>
        <div class="div3_two">
        <div><h4>Hey I’m Jess, Lorem Ipsum dolor sit me.</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
        <div>
          <img src={blog_person} alt="small_image" />
        </div>
        </div>
        <div class="div4_two">
          <img src={ourblogimgfour} alt="ourblogimg" />
        </div>
        <div class="div5_two">
          <img src={blog_four} alt="ourblogimg" />
        </div>
        <div class="div6_two"></div>
      </div>
      <button className="loyality">JOIN OUR LOYALTY PROGRAM</button>
    </div>
  );
};

export default Ourbloggrid;
