import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css'
import cardimg01 from '../assets/cardimg01.webp';
function Carduse() {
  return (
    <div className='cards'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cardimg01} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Carduse;