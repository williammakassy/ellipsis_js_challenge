import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Series from "./components/pages/Series";
import Movies from "./components/pages/Movies";


function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/series' element={<Series/>}></Route>
          <Route exact path='/movies' element={<Movies/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
