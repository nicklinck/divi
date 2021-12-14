import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './styles.css'

const ExploreCard = (props) => {
  const navigate = useNavigate();

  const exploreView = () => {
    navigate(`/property/${props.propertyId}`)
  }

  return (
    <div className="Property">
      <Card onClick={() => exploreView()}  style={{ width: '18rem', borderRadius: "10%", cursor: "pointer" }}>
        <Card.Img style={{ borderRadius: "10%" }} className="Card-Image" src={'/images/example5.png'} />
        <Card.Body >
          <Card.Title> { props.title } </Card.Title>
          <Card.Text>  { props.text  } </Card.Text>
          <Card.Text>  { props.price  } </Card.Text>
          <Card.Text>  { props.rooms  } </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ExploreCard;
