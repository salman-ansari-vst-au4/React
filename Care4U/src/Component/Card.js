import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'


export default function Cards() {
  return (
    <CardDeck>
      <LinkContainer to='/homecare'><Card className="homecard">
        <img src="https://cdn.dribbble.com/users/1597968/screenshots/7141745/media/c387b5fc67190d7491e5d51a18879d83.png" />

        <Card.Title className='text-center mb-1'>Home Care</Card.Title>

      </Card>
      </LinkContainer>
      <LinkContainer to='/concierge'>
        <Card className="homecard">
          <img src="https://cdn.dribbble.com/users/1647667/screenshots/5812107/064.jpg" />

          <Card.Title className='text-center mb-1'>Concierge</Card.Title>

        </Card>
      </LinkContainer>
      <LinkContainer to='/equipment'>
        <Card className="homecard">
          <img src="https://cdn.dribbble.com/users/1316608/screenshots/3987291/isometric_3.jpg" />

          <Card.Title className='text-center mb-1'>Medical Equipment</Card.Title>

        </Card>
      </LinkContainer>
    </CardDeck >
  )
} 