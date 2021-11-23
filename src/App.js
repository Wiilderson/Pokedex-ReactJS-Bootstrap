
import { Navigate, Route, Router, Routes } from "react-router";
import './App.css';
import Pokedex from "./components/pokedex";
import HeaderPoke from "./components/header";
import PokeStatus from "./components/pokeStatus";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderPoke />
        {/* <Pokedex /> */}
        <BrowserRouter>
          <Routes>
            {/* <Route exact path='/pokedex' element={<HeaderPoke />} /> */}
            <Route exact path='/pokedex' element={<Pokedex />} />
            <Route exact path='/pokeStatus' element={<PokeStatus />} />
          </Routes>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
