import React from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';
import MyVerticallyCenteredModal from './MyModel'


export default function Routes() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <CardDeck>
        <Card>
          <Card.Body className='text-center'>
            <Card.Title>Ambulance</Card.Title>
            <Card.Text>
              Service Provider of 24 Hours Ambulance Services with medical equipments which transports patients to treatment facilities
        </Card.Text>
            <Button variant="primary" onClick={() => setModalShow({ name: 'Ambulance', time: '4am to 2am', price: 250 })}>Book Now</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body className='text-center'>
            <Card.Title>Hearse Van</Card.Title>
            <Card.Text>
              A hearse to carry the dead in a coffin/casket in pre booking & emergencies. Very formal heavily decorated vehicles
        </Card.Text>
            <Button variant="primary" onClick={() => setModalShow({ name: 'Hearse Van', time: '12pm to 6pm', price: 250 })}>Book Now</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body className='text-center'>
            <Card.Title>Air Medical Transportation </Card.Title>
            <Card.Text>
              We provide service for patients who are transported with a medical escort may need advanced monitoring
        </Card.Text>
            <Button variant="primary" onClick={() => setModalShow({ name: 'Air Medical', time: 'No time limit', price: 450 })}>Book Now</Button>
          </Card.Body>
        </Card>
      </CardDeck>
      <MyVerticallyCenteredModal
        category="Concierge"
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}