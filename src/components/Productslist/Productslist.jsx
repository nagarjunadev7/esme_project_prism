import './productslist.css';
import Carousel from 'better-react-carousel';
import products_one_image from '../../assets/flex_image.png';

const Productslist = () => {
  return (
    <div className='carousel'>
    <h1>Packages of the Products </h1>
    <Carousel cols={4} rows={1} gap={10} loop>
      <Carousel.Item>
      <div className='carousel_one'>
      <img width="100%" src={products_one_image} alt='myImage'/>
      </div>
        <div className='carousel_item'>
        <p>Lorem ipsum dolor sit amet. At asperiores magni nam repellendus perspiciatis </p>
        <p>Product Category</p>
        <p>AED 67.90</p>
        <button>Add Cart</button>
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className='carousel_two'>
      <img width="100%" src={products_one_image} alt='myImage'/>
      </div>
        <div className='carousel_item'>
        <p>Lorem ipsum dolor sit amet. At asperiores magni nam repellendus perspiciatis </p>
        <p>Product Category</p>
        <p>AED 67.90</p>
        <button>Add Cart</button>
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className='carousel_three'>
      <img width="100%" src={products_one_image} alt='myImage'/>
      </div>
        <div className='carousel_item'>
        <p>Lorem ipsum dolor sit amet. At asperiores magni nam repellendus perspiciatis </p>
        <p>Product Category</p>
        <p>AED 67.90</p>
        <button>Add Cart</button>
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className='carousel_four'>
      <img width="100%" src={products_one_image} alt='myImage'/>
      </div>
        <div className='carousel_item'>
        <p>Lorem ipsum dolor sit amet. At asperiores magni nam repellendus perspiciatis </p>
        <p>Product Category</p>
        <p>AED 67.90</p>
        <button>Add Cart</button>
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className='carousel_five'>
      <img width="100%" src={products_one_image} alt='myImage'/>
      </div>
        <div className='carousel_item'>
        <p>Lorem ipsum dolor sit amet. At asperiores magni nam repellendus perspiciatis </p>
        <p>Product Category</p>
        <p>AED 67.90</p>
        <button>Add Cart</button>
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className='carousel_six'>
      <img width="100%" src={products_one_image} alt='myImage'/>
      </div>
        <div className='carousel_item'>
        <p>Lorem ipsum dolor sit amet. At asperiores magni nam repellendus perspiciatis </p>
        <p>Product Category</p>
        <p>AED 67.90</p>
        <button>Add Cart</button>
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className='carousel_seven'>
      <img width="100%" src={products_one_image} alt='myImage'/>
      </div>
        <div className='carousel_item'>
        <p>Lorem ipsum dolor sit amet. At asperiores magni nam repellendus perspiciatis </p>
        <p>Product Category</p>
        <p>AED 67.90</p>
        <button>Add Cart</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='carousel_eight'>
      <img width="100%" src={products_one_image} alt='myImage'/>
      </div>
        <div className='carousel_item'>
        <p>Lorem ipsum dolor sit amet. At asperiores magni nam repellendus perspiciatis </p>
        <p>Product Category</p>
        <p>AED 67.90</p>
        <button>Add Cart</button>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Productslist