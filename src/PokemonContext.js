import React from 'react'



const PokemonContext = React.createContext({
    data: [],
    setData: function (newData) {
        this.data = newData
    }
})

export default PokemonContext