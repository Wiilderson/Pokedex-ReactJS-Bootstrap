// import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router";
import './App.css';
import './components/styles/styles.css';
import Pokedex from "./components/pokedex";
import HeaderPoke from "./components/header";
import PokeStatus from "./components/pokeStatus";
import { BrowserRouter } from "react-router-dom";




function App() {
  return (
    <div className="App">

      <header className="App-header">

        <HeaderPoke />

      </header>

      <BrowserRouter>
        <div className="container">
          <div className="">
            <Routes>
              {/* <Route exact path='/pokedex' element={<HeaderPoke />} /> */}
              <Route exact path='/' element={<Pokedex />} />
              <Route exact path='/pokeStatus/:id' element={<PokeStatus />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div >
  );
}

export default App;
