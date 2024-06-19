import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Bye() {
  return (
  <>
   <h1>See you later!</h1>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://lkoirlupclkutltahkie.supabase.co/storage/v1/object/public/images/istockphoto-1443287341-612x612.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</>
  );
}

export default Bye;

