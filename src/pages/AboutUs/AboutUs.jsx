import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
    return (
       <div>
         <div  className='text-center mt-4 '>
            <h1>WHY CHOISE US?</h1>
            <p>Here are some reasons why in choosing us you will have made the best decision for you and your shopping.</p>
        </div>

        <div>
        <CardGroup className='gap-4'>
      <Card>
     
        <Card.Body>
          <Card.Title className='text-bold'>QUALITY PRODUCTS</Card.Title>
          <Card.Text>
          Toys are one of the most stringently regulated products; as a toy manufacturer, wholesaler, or retailer, navigating these regulations can be difficult and time consuming.
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        
        <Card.Body>
          <Card.Title className='text-bold'>FREE DELIVERY</Card.Title>
          <Card.Text>
          Save money and grab the best free shipping iin world. Now get the fastest free home delivery to save money at Toy vehicles online shopping app✓No delivery ...
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        
        <Card.Body>
          <Card.Title className='text-bold'>ONLINE PAYMENTS</Card.Title>
          <Card.Text>
          Trusted by millions of customer worldwide & Chosen by leading marketplaces. Track the status of your payments & Choose how to use your funds. Fully Approved & Licensed.
          </Card.Text>
        </Card.Body>
       
      </Card>
    </CardGroup>
        </div>
       </div>
    );
};

export default AboutUs;
