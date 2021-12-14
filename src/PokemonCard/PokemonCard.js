import './PokemonCard.css'
import {useParams} from 'react-router-dom'
import {useContext} from 'react'
import PokemonContext from '../PokemonContext'

function PokemonCard() {
    const {id} = useParams() 
    const context = useContext(PokemonContext)
    const pokemon = context.data.filter(pokemon => {
        return pokemon.data.id === Number(id)
    })

    const pokemonData = pokemon[0].data

    return (
        <div className="pokemon-card">
            <p className="pokemon-card__id">Id: {pokemonData.id}</p>
            <p className="pokemon-card__name">Name: {pokemonData.name}</p>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name}></img>
            <div className="pokemon-card__abilities">Abilities: 
                <ul>
                {pokemonData.abilities.map(ability => {
                    return <li>{ability.ability.name}</li>
                })}
                </ul>
            </div>
            <div className="pokemon-card__forms">Forms: 
                <ul>
                    {pokemonData.forms.map(form => {
                        return <li>{form.name}</li>
                    })}
                </ul>
            </div>
            <p className="pokemon-card__weight">Weight: {pokemonData.weight}</p>
            <p className="pokemon-card__caught">Caught: {pokemonData.caught ? pokemonData.caught.toString() : "No"}</p>
        </div>
    )
}

export default PokemonCard