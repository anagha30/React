import React from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import {Soup, SweetPotato} from './components/Information'

function App() {
  var s1 = "Creamy Thai Sweet Potato Curry – packed with nutrition! our favorite easy, healthy, winter comfort food recipe. vegetarian and vegan"
  var title = "Creamy Thai Sweet Potato Curry"
  
  var s2 = "Detox Crockpot Lentil Soup – a clean and simple soup made with onions, garlic, carrots, olive oil, squash, and LENTILS! Super healthy and easy to make."
  var title2 = "Detox Crockpot Lentil Soup"
  return (
    <div className="App">
      <Header/>
      <div className="cards">
        <Card imgsrc={process.env.PUBLIC_URL + "images/image1.jpg"} description={s1} title={title} process={<SweetPotato/>}/>
        <Card imgsrc={process.env.PUBLIC_URL + "images/image2.jpg"} description={s2} title={title2} process={<Soup/>} />
      </div>
    </div>
  );
}

export default App;
