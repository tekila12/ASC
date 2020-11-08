
import React, { useEffect } from 'react';
import Header from './Header'
import './App.css';
import MainBar from './MainBar';
import MainImages from './MainImages';
import Valhalla from './AssassinsCreed/Valhalla';
import OdysseyOrigin from './AssassinsCreed/OdysseyOrigin';
import SyndicateUnity from './AssassinsCreed/SyndicateUnity';
import BlackFlag3 from './AssassinsCreed/BlackFlag3';
import BrotherRevelations from './AssassinsCreed/BrotherRevelations';
import AssassinsCreed from './AssassinsCreed/AssassinsCreed';
import Footer from './Footer';
import Aos from 'aos';
import 'aos/dist/aos.css'
function App() {

  useEffect(() => {
  Aos.init({duration: 2000});
    
  }, []);
  
 
  return (
    
    <div  className="app">
      <Header />
      <MainBar />
      <MainImages />
      <Valhalla />
      <OdysseyOrigin />
      <SyndicateUnity />
      <BlackFlag3 />
      <BrotherRevelations />
      <AssassinsCreed />
      <Footer />
    </div>
    
  );
}

export default App;


