import Proptypes from 'prop-types';
import CardsContainer from '../CardsContainer'

import {useState, useEffect} from 'react'
import axios from 'axios'

const MainContainer = ({children})=>{
    //const pokemones = ['Pikachu','Raichu','Charizard']
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0'
    //const url = 'https://pokeapi.co/api/v2/type/1'
    const [pokemonList,setPokemonList] = useState()
    
    const callListPokemon = (url) =>{
        axios.get(url).then(result =>{
            setPokemonList(result.data)
        }).catch(error=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        callListPokemon(url)
    },[])   

    return (
        <><div className='MainContainer'>
        </div>  
        {pokemonList && <CardsContainer pokemones = {pokemonList.results}  filtered = {0} ></CardsContainer>}
        
        <div className = 'footer'>
            <button onClick={(e)=>callListPokemon(pokemonList.previous)}>Menos</button>
            <button onClick={(e)=>{callListPokemon(pokemonList.next)}}>Más</button>
        </div>
        </>
        
    )
}

MainContainer.proptype = {
    children: Proptypes.element.isRequired
}

export default MainContainer;