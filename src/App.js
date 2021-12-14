import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Router from './Router/Router'
import PokemonContext from './PokemonContext'



function App() {

  const [pokemonData, setPokemonData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)
  const [needFetching, setNeedFetching] = useState(false)
  const [nextLink, setNextLink] = useState("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")

  useEffect(() => {

    if (nextLink !== null) {
      (async () => {
        try {
          const response = await axios.get(nextLink)
          const data = response.data

          try {
            setNextLink(data.next)

            const exactResponse = await Promise.all(
              data.results.map(pokemon => {
                return axios.get(pokemon.url)
              })
            )
            setPokemonData([...pokemonData, ...exactResponse])
            setIsLoaded(true)
          }
          catch(error) {
            setError(error)
            setIsLoaded(true)
          }
        }
        catch(error) {
          setError(error)
        }
        finally {
          setNeedFetching(false)
        }
        
      })()
    }
  }, [needFetching])

  return (
    <>
      <PokemonContext.Provider value={{
        isLoaded,
        error,
        setNeedFetching,
        data: pokemonData,
        setData: function(newData) {
          this.data = newData
        }
        }}>
        <Router/>
      </PokemonContext.Provider>
    </>
  );
}

export default App;
