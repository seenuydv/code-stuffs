import Carousel from 'react-bootstrap/Carousel';
import batman from '../assets/batman.jpeg';
import spiderman from '../assets/spiderman.jpeg';
import superman from '../assets/superman.jpeg';


function Slide() {
  return (
    <>
     <Carousel>
       <Carousel.Item>
        <img src={batman}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={spiderman}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={superman} />
        </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Slide;
