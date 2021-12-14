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

  useEffect(() => {     
      (async () => {
          let count = 1 // try to use useReducer instead of this mess

          try {
              const resp = await Promise.all(
                  Array(40).fill(null).map(() => {
                      let promise = axios.get(`https://pokeapi.co/api/v2/pokemon/${count + pokemonData.length}`)
                      count++
                      return promise
                  })
              )
              setPokemonData([...pokemonData, ...resp])
              setIsLoaded(true)
          }
          catch(err) {
              setError(err)
              setIsLoaded(true)
          }
          finally {
              setNeedFetching(false)
          }
      })()
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
