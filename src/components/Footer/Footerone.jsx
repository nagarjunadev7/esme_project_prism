import "./footerone.css";
import cardImage from "../../assets/cards.png";
import footer_logo from "../../assets/footer_logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_one">
        <div>
          <h4>CONTACT</h4>
        </div>
        <div>Email Address</div>
        <div>Contact Telephone</div>
        <div>
          <img src={cardImage} alt="visa_img" />
        </div>
      </div>
      <div className="footer_two">
        <img src={footer_logo} alt="footer_logo" />
        <p>
          Lorem ipsum dolor sit amet. Ut aspernatur reprehenderit in
          voluptatibus voluptatem aut accusamus dolorum ea deserunt{" "}
        </p>
      </div>
      <div className="footer_three">
        <div>
          <h4>USEFULL LINKS</h4>
        </div>
        <div>Email Address</div>
        <div>Shop</div>
        <div>Our Promise</div>
        <div>Our Inspiration</div>
        <div>We are Unique</div>
        <div>ESMÉ World</div>
        <div>Loyalty Program</div>
        <div>Blogs</div>
        <div>Faqs</div>         
        </div>
      </div>
  );
};

export default Footer;
