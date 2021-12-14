import './CatchButton.css'
import {useContext, useState} from 'react'
import PokemonContext from '../PokemonContext'

function CatchButton({id}) {

    const pokemon = useContext(PokemonContext)

    const [disabled, setDisabled] = useState(!!pokemon.data.filter(pokemon => {
        return pokemon.data.id === id
    })[0].data.caught)

    function catchPokemon() {
        pokemon.setData(
            pokemon.data.map((pokemon) => {
                if (pokemon.data.id === id) {
                    pokemon.data.caught = new Date()
                }
                return pokemon
            })
        )
        setDisabled(true)
    }

    return (
        <button className="pokemon__button" onClick={catchPokemon} disabled={disabled}>Catch</button>
    )
}

export default CatchButton