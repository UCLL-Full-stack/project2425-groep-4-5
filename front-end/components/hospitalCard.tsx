import { Card, ListGroup } from "react-bootstrap";

function hospitalCard() {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Huisarts Leuven</Card.Title>
            <Card.Text>
              Gezellige huisarts in Leuven op de Oude Markt.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Tel: 123 45 67</ListGroup.Item>
            <ListGroup.Item>Email: 1oG8F@example.com</ListGroup.Item>
            <ListGroup.Item>Oude Markt 12</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Bekijk praktijk</Card.Link>
            <Card.Link href="#">Plan een afspraak</Card.Link>
          </Card.Body>
        </Card>
      );
}
export default hospitalCard