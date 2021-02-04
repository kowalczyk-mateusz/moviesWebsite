import React from 'react'
import anonymo from '../../assets/images/anonymous.png'
import {Search} from './SearchStyles'
import {loadActorDetail} from '../../actions/actorsDetailsAction'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
    const OneActor = ({name, id, image}) =>{

        const dispatch = useDispatch()
        const loadDetailHandler = () =>{
            window.scrollTo(0,0)
            dispatch(loadActorDetail(id))
        }

    const finalImage = `${image === null ? anonymo : `https://image.tmdb.org/t/p/w300${image}`}`

    return(
        <Search onClick={loadDetailHandler}>
            <Link to={`/actor/${id}`}>
                <h1>{name}</h1>
                <img src={finalImage} alt={name}/>
                </Link>
        </Search>
    )
}

export default OneActor