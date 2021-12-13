import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './styles.css'

const ExploreCard = (props) => {
    const navigate = useNavigate();

    const exploreView = () => {
        navigate(`/property/${props.propertyId}`)
    }

    return (
        <div className="Property">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={'/images/example5.png'} />
            <Card.Body>
                <Card.Title> { props.title } </Card.Title>
                <Card.Text>  { props.text  } </Card.Text>
                <Button onClick={exploreView} variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </div>
  );
}

export default ExploreCard;
