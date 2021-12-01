import React, { useEffect, useState } from 'react';
import '../App.css'
import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useParams } from 'react-router-dom';
import API from './conectAPI';
import HeaderPoke from './header';
import typeColors from './theme/pokemontype';



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
                        <div className="col-3 status" style={{ backgroundColor: '#F4A460', height: '31rem', margin: 'auto' }}>

                            < p className="font-color"><strong>{pokemonStatus.name}</strong></p>
                            <img key={pokemonStatus.id} className="img-fluid" src={pokemonStatus.sprites.other.dream_world.front_default} alt="imagem" />

                        </div>
                        <div className="col-9 pokemoninfo" style={{ backgroundColor: '#beb1a7', height: '31rem', margin: 'auto' }}>
                            <div className="infor-status" style={{}}>

                                <h5 className="">Atributos</h5>
                                <div className="teste">
                                    <ul>
                                        <li>
                                            <span className="atributos">Altura</span>
                                            <span className="valor-atri">{pokemonStatus.height / 10} m</span>
                                        </li>

                                        <li>
                                            <span className="atributos">Peso</span>
                                            <span className="valor-atri">{pokemonStatus.weight / 10} kg</span>
                                        </li>

                                        <li>
                                            <span className="atributos">Gênero</span>

                                            <span className="">
                                                <i className="valor-atri">Male/Female</i>
                                            </span>

                                        </li>
                                        <li>
                                            <span className="atributos">Categoria</span>
                                            <span className="valor-atri">Seed</span>
                                        </li>

                                        <li>
                                            <span className="atributos">Skill</span>
                                            <span className="valor-atri">{pokemonStatus.abilities[0].ability.name}</span>

                                        </li>
                                    </ul>

                                </div>

                            </div>

                            <div className="infor-status2">
                                <h5 className="">Types</h5>
                                <div className="teste2">
                                    <ul>
                                        {pokemonStatus.types.map(types => (
                                            <li>
                                                <span className="naUL" style={{ backgroundColor: typeColors[types.type.name] }}>{types.type.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>

                            <div className="infor-status2">
                                <h5 className="">Evolução</h5>
                                <div className="teste2">
                                    <ul>
                                        <li>
                                            <span className="naUL"></span>
                                            <span className="valor-atri"></span>
                                        </li>

                                    </ul>
                                </div>

                            </div>

                            <div className="tabelaStats2">
                                {/* <h5 className="">Tabela</h5> */}
                                <div className="">
                                    <p>{pokemonStatus.stats[0].stat.name}:</p>
                                    <p>{pokemonStatus.stats[1].stat.name}:</p>
                                    <p>{pokemonStatus.stats[2].stat.name}:</p>
                                    <p>{pokemonStatus.stats[3].stat.name}:</p>
                                    <p>{pokemonStatus.stats[4].stat.name}:</p>
                                    <p>{pokemonStatus.stats[5].stat.name}:</p>

                                </div>
                            </div>

                            <div className="tabelaStats">
                                <h5 className="">Status</h5>

                                <div className="tabelastatus2">

                                    <div className="progress-bar progress bg-success" style={{ width: `${pokemonStatus.stats[0].base_stat}%` }}
                                        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">{pokemonStatus.stats[0].base_stat}% </div>
                                </div>

                                <div className="tabelastatus2">

                                    <div className="progress-bar progress bg-secondary" style={{ width: `${pokemonStatus.stats[1].base_stat}%` }}
                                        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">{pokemonStatus.stats[1].base_stat}% </div>
                                </div>
                                <div className="tabelastatus2">

                                    <div className="progress-bar progress bg-primary" style={{ width: `${pokemonStatus.stats[2].base_stat}%` }}
                                        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">{pokemonStatus.stats[2].base_stat}% </div>
                                </div>
                                <div className="tabelastatus2">

                                    <div className="progress-bar progress bg-danger" style={{ width: `${pokemonStatus.stats[3].base_stat}%` }}
                                        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">{pokemonStatus.stats[3].base_stat}% </div>
                                </div>
                                <div className="tabelastatus2">

                                    <div className="progress-bar progress bg-secondary" style={{ width: `${pokemonStatus.stats[4].base_stat}%` }}
                                        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">{pokemonStatus.stats[4].base_stat}% </div>
                                </div>
                                <div className="tabelastatus2">

                                    <div className="progress-bar progress bg-warning" style={{ width: `${pokemonStatus.stats[5].base_stat}%` }}
                                        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">{pokemonStatus.stats[5].base_stat}% </div>
                                </div>

                            </div>



                        </div>
                    </div>
                </div>

            )
            }
        </>


    )
}

export default PokeStatus;