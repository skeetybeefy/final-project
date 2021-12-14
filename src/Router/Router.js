import PokemonContainer from "../PokemonContainer/PokemonContainer";
import Header from '../Header/Header'
import PokemonCard from "../PokemonCard/PokemonCard";
import {Routes, Route, BrowserRouter} from 'react-router-dom'

function DataProvider() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={
                    <PokemonContainer caught={false}/>
                }/>
                <Route path="/caught" element={
                    <PokemonContainer caught={true}/>
                }/>
                <Route path="/:id" element={
                    <PokemonCard></PokemonCard>
                }/>
            </Routes>
        </BrowserRouter>
    )
}

export default DataProvider