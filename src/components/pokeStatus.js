import React, { useEffect, useState } from 'react';
import '../App.css'
import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useParams } from 'react-router-dom';
import API from './conectAPI';
import HeaderPoke from './header';



const PokeStatus = () => {
    const [pokemonStatus, setPokemonStatus] = useState()
    const [loadingPokemons, setLoadingPokemons] = useState(true)


    const { id } = useParams()


    const pokemonList = async (id) => {
        const status = await getPokemonId(id)
        setPokemonStatus(status.data)
        console.log(status.data)
        setLoadingPokemons(false)
    }


    const getPokemonId = async (id) => {
        const data = await API.get(`${id}`);
        return data;

    };

    useEffect(() => {
        pokemonList(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (

        <>
            {loadingPokemons ? (
                <HeaderPoke />
            ) : (

                <div className="row" style={{ height: '50rem' }}>
                    <div className="row" style={{ backgroundColor: '#05363a', height: '35rem' }} >
                        <div className="col-3 status" style={{ backgroundColor: '#F4A460', height: '30rem', margin: 'auto' }}>

                            < p className="font-color"><strong>{pokemonStatus.name}</strong></p>
                            <img key={pokemonStatus.id} className="img-fluid" src={pokemonStatus.sprites.other.dream_world.front_default} alt="imagem" />

                        </div>
                        <div className="col-9" style={{ backgroundColor: '#beb1a7', height: '30rem', margin: 'auto' }}>
                            <div className="infor-status" style={{}}>

                                <div className="teste">
                                    <ul>
                                        <li>
                                            <span className="atributos">Height</span>
                                            <span className="valor-atri">{pokemonStatus.height} m</span>
                                        </li>

                                        <li>
                                            <span className="atributos">Weight</span>
                                            <span className="valor-atri">{pokemonStatus.weight} kg</span>
                                        </li>

                                        <li>
                                            <span className="atributos">Gender</span>

                                            <span className="">
                                                <i className="BsGenderFemale"></i>
                                                <i className="bi bi-123"></i>
                                            </span>

                                        </li>
                                        <li>
                                            <span className="atributos">Category</span>
                                            <span className="valor-atri">Seed</span>
                                        </li>

                                        <li>
                                            <span className="atributos">Abilities</span>
                                            <span className="valor-atri">{pokemonStatus.abilities[0].ability.name}</span>

                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                    </div>
                </div >

            )
            }
        </>


    )
}

export default PokeStatus;