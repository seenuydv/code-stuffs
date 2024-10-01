import Carousel from 'react-bootstrap/Carousel';
// import marvel01 from '../assets/cardimg01.webp';
// import marvel02 from '../assets/marvel characters banner02.webp';
// import marvel03 from '../assets/marvel characters banner03.jpg';


function Slide() {
  return (
    <>
     <Carousel>
       <Carousel.Item>
        <img src="https://static.startuptalky.com/2021/10/marvel-success-story.jpg" height={400} width={800}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://static.startuptalky.com/2021/10/marvel-success-story.jpg" height={400} width={800}/>
    
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://static.startuptalky.com/2021/10/marvel-success-story.jpg"height={400} width={800}/>
        </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Slide;