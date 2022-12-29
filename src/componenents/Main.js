import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Footer from './Footer';

import pic1 from './image/sim11.jpg';
import repairs from './image/phones.jpg';
import sim from './image/peter.jpg';


function Main() {
  return (
    <div className='section'>
    


    <Container>
        <Row>
    <Col md={12} > <h3 className=''>Our Company</h3>
    <div className='underline mx-auto'></div>
    <div>
        <p className='bg-green'>Cema Communications is a telecommunication company that is involved in the sales of different phones
            accessories of all kinds. We are partners of major Telecom providers like Glo, MTN, Airtel etc.
            We also partner with huge phone makers globally.
        </p>
        <Link to='/about' className='btn btn-warning shadow'>Read More</Link>
        </div>
    
    </Col>

        </Row>
        </Container>

        <br/>
       <Container className='bg-c-light border-top'>
       <Row><Col md={12}> <h3 className=''>Our Vision, Mission and Values</h3></Col></Row>
    <div className='underline mx-auto'></div>
        <Row>
    <Col md={4} className='text-center'> <h6>Our Vision</h6>
    <p>To be a leading Telecom partner in the South East, Nigeria</p>
    </Col>
    <Col md={4} className='text-center'> 
    <h6>Our Mission </h6>
    <p>To promote ease and accessibility in to telecommunication Services</p>
    </Col>
    <Col md={4} ClassName='text-center'> 
    <h6>Our Core Values</h6>
    <p>Dedication and discipline and quality service delivery</p>
    
    </Col>
        </Row>
        </Container>
        <Container>
        <Row>
    

        </Row>
        </Container>

        <br/>
       <Container className='section border-top'>
       <Row><Col md={12}> <h3 className=''>Our Services</h3></Col></Row>
    <div className='underline mx-auto'></div>
        <Row>
    <Col md={4} className='text-center'>
      <div className='card shadow'>
      <Card.Img variant="top" src={repairs} className='w-100 border-bottom' alt='servicea' />
        <div className='card-body'> 
        
        
        <h6 className='services'>Phone Sales</h6>
        <div className='underline'></div>
    <p>We repair phones of all kinds</p>
      <Link to='/services' className='btn btn-link'>read more</Link>
        </div>
        </div>
    </Col>
    <Col md={4} className='text-center'>
      <div className='card shadow'>
      <Card.Img variant="top" src={sim} className='w-100 border-bottom' alt='servicea' />
        <div className='card-body'> 
        
        
        <h6 className='services'>MTN Services</h6>
        <div className='underline'></div>
    <p>We repair phones of all kinds</p>
      <Link to='/services' className='btn btn-link'>read more</Link>
        </div>
        </div>
    </Col>
    <Col md={4} className='text-center'>
      <div className='card shadow'>
      <Card.Img variant="top" src={pic1} className='shadow w-100 border-bottom' alt='service' />
        <div className='card-body'> 
        
        
        <h6 className='services'>Phone Services</h6>
        <div className='underline'></div>
    <p>We register and retirve your lost sim</p>
      <Link to='/services' className='btn btn-link'>read more</Link>
        </div>
        </div>
    </Col>
        </Row>
        </Container>
<Footer />
        <Container>
{/* <Row>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic} />
      <Card.Body>
        <Card.Title>Phone Repairs</Card.Title>
        <Card.Text>
          We Repair all kinds of Phones 
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
      
      </Card.Body>
      </Card>
 </Row> */}
</Container>

    </div>
  );
}

export default Main