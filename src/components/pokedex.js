import React, { useEffect, useState } from 'react';
import API from './conectAPI';
import './styles/styles.css';
import { Link } from 'react-router-dom';


const Pokedex = () => {


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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (

        <div className="" >
            <div className="row">
                {
                    pokemon.map(p => (
                        <div key={p.data.id} className="card-2" style={{ backgroundColor: '#F4A460', width: '12rem' }}>
                            <img src={p.data.sprites.other.dream_world.front_default} className="img-fluid" alt="imagem" />

                            <Link to={`/pokeStatus/${p.data.id}`} className="text-link">
                                <div className="card-body">

                                    <p className="font-color"><strong>{p.data.name}</strong></p>

                                    <small className="colortext">Tipo: {p.data.types[0].type.name}</small>

                                </div>
                            </Link>

                        </div>
                    )
                    )
                }
            </div >
        </div >

    )
}

export default Pokedex;