import Carousel from 'react-bootstrap/Carousel';
import "./Banner1.css"
function Banner1() {
  return (
    <>
    <div className='bspace'></div>
    <Carousel className='container-fluid bg-c'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/assets/Banner1/1.jpg"
          alt="Second slide"
        />
        </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/assets/Banner1/2.jpg"
          alt="Second slide"
        />        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/assets/Banner1/3.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/assets/Banner1/4.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/assets/Banner1/5.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/assets/Banner1/6.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/assets/Banner1/7.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/assets/Banner1/8.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/assets/Banner1/9.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
    
    </Carousel>
    <div className='bspace1'></div>

    </>
  );
}

export default Banner1;