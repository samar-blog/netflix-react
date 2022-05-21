import React from 'react';
import request from '../baza-dannix/request';
import Banner from './Banner';
import Films from './Films';
import Footer from './Footer';
import Navbar from './Navbar';

const Main = ({user}) => {
  return (
    <div>
        <Navbar user={user} />
         <Banner />
         <Films
          isLargeRow 
          title={"NETFLIX ORIGINALS"} 
         movie_request={request.fetchNetflixOriginals}  />
         <Films
           title={"Top Rated"} 
         movie_request={request.fetchTopRated}  />
          <Films
           title={"Comedy"} 
         movie_request={request.fetchComedyMovies}  />
         <Films
           title={"Action"} 
         movie_request={request.fetchActionMovies}  />
         <Films
           title={"Documentary"} 
         movie_request={request.fetchDocumentaries}  />
         <Films
           title={"Romance"} 
         movie_request={request.fetchRomanceMovies}  />
         
         <Footer />
    </div>
    
  )
}

export default Main