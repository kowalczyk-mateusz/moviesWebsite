import React from 'react'
import questionMark from '../../assets/images/questionMark.png'
import {Search} from './SearchStyles'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import { loadDetail } from '../../actions/detailsTvActions'
    const OneSeries = ({title, image, id}) =>{

const dispatch = useDispatch()

const loadDetailhandler =()=>{
    window.scrollTo(0,0)
        dispatch(loadDetail(id))
}

        const finalImage = `${image === null ? questionMark : `https://image.tmdb.org/t/p/w300${image}`}`

    return(
        <Search onClick={loadDetailhandler}>
            <Link to={`/series/${id}`}>
                <h1>{title}</h1>
                <img src={finalImage} alt={title}/>
                </Link>
        </Search>
    )
}


export default OneSeries