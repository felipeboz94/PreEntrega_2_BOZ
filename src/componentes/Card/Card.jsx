//creo la componente basado en funcion
//se usan proptyps que viene de manera nativa en React

import pokebola from '../icons/pokebola.svg' 
import './Card.css'
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react'
import axios from 'axios'
import capitalizeFirstLowercaseRest from '../../funciones/auxiliares'
const Card = ({pokemon}) =>{
    const [pokemonFull, setPokemonFull] = useState()
    
    console.log('el pokemon')
    console.log(pokemon)
    //console.log(pokemonFull)
    const callPokemon = (pokemon)  =>{
        axios.get(pokemon.url).then(result =>{
            console.log('entra al axios')
            setPokemonFull(result.data)
        }).catch(error=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        callPokemon(pokemon)
    },[pokemon])

   // pokemonFull && console.log(pokemonFull)
    return (
        <div className = 'CardPokemon'>
            {pokemonFull && 
            <>
            <img className = 'imgCard' src={pokemonFull.sprites.other["official-artwork"].front_default} alt="" />
            <div className = 'descripcionCorta'>
                <p className = 'pokemonName'><strong>{pokemonFull.name.toUpperCase()}</strong></p>

            </div>
            <div className = 'descripcionLarga'>
                <div className = 'abilitiesContainer'>
                    <div className = 'abilityLabel'>
                        Habilidades:
                    </div>
                    {pokemonFull.abilities.map((ability,index)=>{
                        return (
                            <div key = {index} className = 'abilityContainer'>
                                {capitalizeFirstLowercaseRest(ability.ability.name)}
                            </div>
                                )
                    })
                    }
                </div>
                <div className = 'statsContainer'>
                    <div className = 'statsLabel'>
                        Estadísticas:
                    </div>
                    {pokemonFull.stats.map((stat,index)=>{
                        return (
                            <div key = {index}  className = 'statContainer'>
                                <div className = 'statLabel'>{stat.stat['name'].toUpperCase()}: </div>
                                <div className = 'stat'>{stat.base_stat}</div>
                            </div>
                                )
                        })
                    }
                </div>
                <div className = 'cardButtons'>
                    
                <button><img className = 'imgPokebola'src={pokebola} alt="" /> ¡Capturar!</button>
                    <a href={`/detalles-card-pokemon/${pokemonFull.id}`}>+ Detalles</a>
                </div>
            </div>
            </>}
            
        </div>
    )
}

Card.proptype = {
    pokemon: PropTypes.array.isRequired
}

export default Card;