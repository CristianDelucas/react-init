// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import CounterCont from './components/CounterCont/CounterCont';
// import Footer from './components/Footer/Footer';
// import HelloWorld from './components/HelloWorld/HelloWorld';
// import Button from './components/Button/Button';
// import Person from './components/Person/Person';
// import Animal from './components/Animal/Animal';
// import ButtonClick from './components/ButtonClick/ButtonClick';
// import Counter from './components/Counter/Counter';
// import Accordion from './components/Accordion/Accordion';
// import List from './components/List/List';
// import ListWithRemove from './components/ListWithRemove/ListWithRemove';
// import Gallery from './components/Gallery/Gallery';
import CounterEffect from './components/CounterEffect/CounterEffect';

// const personData = {
//   name: 'Pepe ruiz',
//   role: 'Astronauta',
//   age: 45
// }

// const animalData = {
//   name: 'Oso',
//   raze: 'Albino',
//   origin: 'Africa'
// }

// const perros = [{
//   name: 'Perro 1',
//   imgUrl: 'http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg',
//   description: 'Hace frío pero es grande.'
// },
// {
//   name: 'Perro 2',
//   imgUrl: 'https://phantom-expansion.unidadeditorial.es/04d5a7930d32e4860ba7cf82291b9d30/resize/640/assets/multimedia/imagenes/2021/03/18/16160714974849.jpg',
//   description: ' Lorem is LoremLorem is LoremLorem is LoremLorem is LoremLorem is LoremLorem is LoremLorem is LoremLorem is Lorem.'
// },
// {
//   name: 'Perro 3',
//   imgUrl: 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/article/605097e95cafe8a1cbab5188/1-perro-corgi-camplo_2.jpg',
//   description: 'Es pequeño y joven. Es pequeño y joven. Es pequeño y joven.'
// }]

export const CounterContext = React.createContext(null);

function App() {
  
  const [count, setCount] = useState(15);

  return (
    <div className="App">
      <header className="App-header">
        {/* <HelloWorld/>
        <Button text="pepe" name="juan"/>
        <Footer/>
        <Person data={personData}/>
        <Animal data={animalData}/>
        <ButtonClick/> */}
        {/* <Counter/>
        <Accordion/>
        <List/> */}
        {/* <ListWithRemove/>
        <Gallery data={perros} /> */}
        <CounterEffect/>
        <CounterContext.Provider value={{count,setCount}}>
          <CounterCont/>
        </CounterContext.Provider>
        
      </header>
    </div>
  );
}

export default App;
