import React from 'react';
import './App.css';
import requests from './requests';
import Row from './components/Row';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Netflix Originals"
       fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow/>
      <Row title="Treading Now" fetchUrl={requests.fetchTrending} isLargeRow/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow/>
      <Row title="Comdey movies" fetchUrl={requests.fetchComedyMovies} isLargeRow/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLargeRow/>
    </div>
  );
}

export default App;