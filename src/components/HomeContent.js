import React from 'react'
import { Card, Container, Nav, Row, Navbar } from 'react-bootstrap';
const HomeContent = ({ title }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/" className='fs-2'>{title}</Navbar.Brand>
          </Container>
        </Navbar>
       <Container>
           <div style={{ marginTop: '4rem' }}>
               <Row xs={2} md={4} className='g-4'>
                   <Nav.Link href="/series">
                        <Card className='border-dark mb-3'>
                        <Card.Img variant='top' src='/assets/img/series.png'></Card.Img>
                        <Card.Body>
                            <Card.Title>Popular Series</Card.Title>
                        </Card.Body>
                        </Card>
                   </Nav.Link>

                    <Nav.Link href="/movies">
                    <Card className='border-dark mb-3'>
                       <Card.Img variant='top' src='/assets/img/series.png'></Card.Img>
                       <Card.Body>
                           <Card.Title>Popular Movies</Card.Title>
                       </Card.Body>
                   </Card>
                    </Nav.Link>
                   
               </Row>
           </div>
       </Container>
    </>
  )
}

HomeContent.defaultProps = {
    title: 'Popular Titles',
}

export default HomeContent