import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component, useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import MainContainer from './components/Main';
import LandingPage from './pages/LandingPage';
import { MDBContainer } from 'mdbreact';
import Home from './pages/Home';
import rfiEntry from './RFIEntry';


const App = () => {
  const [selectedComponent, setSelectedComponent] = useState('Home');

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };
  const createRFI = () => {
    rfiEntry(handleComponentClick);
  };
  
    return (
      <div>
        <Navbar />
        {selectedComponent === 'Home' && <Home onButtonClick={handleComponentClick} />}
        {selectedComponent === 'MainContainer' && <MainContainer onClick={createRFI} />}
      </div>
    );
};

export default App;

