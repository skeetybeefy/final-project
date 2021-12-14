import {useEffect, useContext} from 'react'
import './PokemonContainer.css'
import Pokemon from '../Pokemon/Pokemon.js'
import PokemonContext from '../PokemonContext'

function PokemonContainer({caught}) {

    const context = useContext(PokemonContext)
    const pokemon = context.data
    const isLoaded = context.isLoaded
    const error = context.error
    const setNeedFetching = context.setNeedFetching

    function checkScrollPosition(e) {

        const distanceFromBottom = 300

        if (e.target.documentElement.scrollTop + e.target.documentElement.clientHeight + distanceFromBottom >= e.target.documentElement.scrollHeight) {
            setNeedFetching(true)
        }   
    }

    useEffect(() => {
        document.addEventListener("scroll", checkScrollPosition)

        return () => document.removeEventListener("scroll", checkScrollPosition)
    }, [])


    if (!isLoaded) {
        return (
            <p className="loading-msg">Loading...</p>
        )
    }
    else if (error && error.response?.status !== 404) {
        console.log(error)
        return (
            <p className="error-msg">There was an error loading pokemon data. Try again later.</p>
        )
    }
    else {
        if (caught) {
            let caught = pokemon.filter(pokemon => {
                return pokemon.data.caught
            })
            return ( 
            caught.length === 0 ? 
            <p className="no-caught-msg">You haven't caught any pokemon yet</p> : 
            <section className="pokemon-container">
                {caught.map(pokemon => {
                        return <Pokemon id={pokemon.data.id} name={pokemon.data.name} img={pokemon.data.sprites.front_default} key={pokemon.data.id}/>})}
            </section>
            )
        }
        return (
                <section className="pokemon-container">
                    {pokemon.map(pokemon => {
                            return <Pokemon id={pokemon.data.id} name={pokemon.data.name} img={pokemon.data.sprites.front_default} key={pokemon.data.id}/>
                    })}
                </section>
        )
    }
}

export default PokemonContainer