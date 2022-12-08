import Proptypes from 'prop-types';
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import capitalizeFirstLowercaseRest from '../../funciones/auxiliares'
const CardDetailsContainer = ({children})=>{
    const [pokemonDetails, setPokemonDetails] = useState()
    const {idPokemon} = useParams()
    const urlBase = `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`

    const callPokemon = (urlBase)  =>{
        axios.get(urlBase).then(result =>{
            setPokemonDetails(result.data)
        }).catch(error=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        callPokemon(urlBase)
    },[idPokemon])
    console.log(pokemonDetails)
    
    return (pokemonDetails&&
        <>
            <div className='CardDetailsContainer'>CardDetailsContainer.El ID del pokemón es {idPokemon}</div>
            <img src={pokemonDetails.sprites.other["official-artwork"].front_default} alt="" />
            <div className = 'descripcionCorta'>
                <p className = 'pokemonName'><strong>{pokemonDetails.name.toUpperCase()}</strong></p>

            </div>
            <div className = 'descripcionLarga'>
                <div className = 'abilitiesContainer'>
                    <div className = 'abilityLabel'>
                        Habilidades:
                    </div>
                    {pokemonDetails.abilities.map((ability,index)=>{
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
                    {pokemonDetails.stats.map((stat,index)=>{
                        return (
                            <div key = {index}  className = 'statContainer'>
                                <div className = 'statLabel'>{stat.stat['name'].toUpperCase()}: </div>
                                <div className = 'stat'>{stat.base_stat}</div>
                            </div>
                                )
                        })
                    }
                </div>
            </div>
        </>
    )
}

CardDetailsContainer.proptype = {
    children: Proptypes.element.isRequired
}

export default CardDetailsContainer;