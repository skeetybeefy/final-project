import './Pokemon.css'
import CatchButton from '../CatchButton/CatchButton'
import {Link} from 'react-router-dom'

function Pokemon({id, name, img}) {
    return (
        <div className="pokemon">
            <Link to={`/${id}`}>
                <p className="pokemon__text">{id}</p>
                <p className="pokemon__text">{name}</p>
                <img className="pokemon__image" src={img} alt={name}></img>
            </Link>
            <CatchButton id={id}/>
        </div>
    )
}

export default Pokemon