import React, { useEffect, useState } from 'react';
import API from './conectAPI';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link } from 'react-router-dom';



// import { Container } from './styles';

function Pokedex() {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPokeList = async () => {
        let pokeArray = [];
        for (let i = 1; i <= 30; i++) {
            pokeArray.push(await getPokemonId(i));
        }
        console.log(pokeArray);
        setPokemon(pokeArray);
        setLoading(false);
    };

    const getPokemonId = async (id) => {
        const data = await API.get(`${id}`);
        return data;
    };

    useEffect(() => {
        getPokeList();
    }, []);

    return (


        <div className="container" >
            <div class="row">
                {pokemon.map(p => (
                    <div className="card-2" key={p.name} style={{ backgroundColor: '#F4A460', width: '12rem' }}>
                        <img src={p.data.sprites.other.dream_world.front_default} className="img-fluid" alt="imagem" />

                        <Link to={'/pokeStatus'} className="text-link">
                            <div class="card-body">

                                <p className="font-color"><strong>{p.data.name}</strong></p>

                                <small className="colortext">Tipo: {p.data.types[0].type.name}</small>

                            </div>
                        </Link>

                    </div>
                )
                )}
            </div>
        </div >

    )
}

export default Pokedex;