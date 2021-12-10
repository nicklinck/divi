import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './styles.css'

const ExploreCard = () => {
    const navigate = useNavigate();

    const exploreView = (id) => {
        // push to page
        console.log(id)
        id = 1 // static
        navigate(`/property/${id}`)
    }

    return (
        <div className="Property">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={'/images/example5.png'} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button onClick={exploreView} variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </div>
  );
}

export default ExploreCard;
