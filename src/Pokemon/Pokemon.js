import './Pokemon.css'
import CatchButton from '../CatchButton/CatchButton'
import {Link} from 'react-router-dom'
import placeholderImg from '../assets/placeholder.png'

function Pokemon({id, name, img}) {
    return (
        <div className="pokemon">
            <Link to={`/${id}`}>
                <p className="pokemon__text">{id}</p>
                <p className="pokemon__text">{name}</p>
                <img className="pokemon__image" src={img || placeholderImg} alt={name}></img>
            </Link>
            <CatchButton id={id}/>
        </div>
    )
}

export default Pokemon