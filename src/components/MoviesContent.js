import React from 'react'
import { Card, Container, Nav, Row, Navbar } from 'react-bootstrap';
import Data from "../mydata/data.json";

const MoviesContent = ({ title }) => {
  Data.sort(function(a,b) {
    return a.title.localeCompare(b.title);
  });

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/" className='fs-2'>{title}</Navbar.Brand>
        </Container>
      </Navbar>

    <div className='container mt-4 pt-4'>
      <div className='row'>
       {Data.filter((item, i) => i <= 41).map((post, index) => {
        const type = post.programType;
        const year = post.releaseYear;
         if(type == 'movie' && year >= 2010)
         {
            return(
              <div className='d-flex col-lg-2 col-md-4 col-sm-6 col-xs-6'>
                <div className='card mb-3'>
                <img className="card-img-top" src={post.images['Poster Art'].url} alt="Card image"></img>
                <div className='card-body'>
                  <h6 className="card-title">Title:&nbsp;{ post.title }</h6>
                </div>
                </div>
              </div>  
          ) 
         }

         else {
          console.log('Nothing has been fetched');
         }   
       })}
       </div>
      </div>
    </>
  )
}

MoviesContent.defaultProps = {
    title: 'Popular Movies',
}

export default MoviesContent