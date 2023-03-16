import Carousel from 'react-bootstrap/Carousel';
import menShopping from './images/men_shopping.avif'
import womenShopping from './images/women_shopping.jpg'
import electronicShopping from './images/electronics.jpg'
import { useNavigate } from 'react-router-dom';
function Carousel_component() {
  const navigate = useNavigate()
  return (
    <Carousel>
      <Carousel.Item onClick={()=>navigate("/collection/men's%20clothing")}>
        <img
          className="d-block w-100"
          src={menShopping}
          alt="First slide"
          style={{height:'40em'}}
        />
        <Carousel.Caption>
          <h3>Men's section</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item onClick={()=>navigate("/collection/women's%20clothing")}>
        <img
          className="d-block w-100"
          src={womenShopping}
          alt="Second slide"
          style={{height:'40em'}}
        />

        <Carousel.Caption>
          <h3>Women's section</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item onClick={()=>navigate('/collection/electronics')}>
        <img
          className="d-block w-100"
          src={electronicShopping}
          alt="Third slide"
          style={{height:'40em'}}
        />

        <Carousel.Caption>
          <h3 >Electronic's section</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel_component;