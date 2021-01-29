import React from 'react'
import styled from 'styled-components'
import anonymo from '../../assets/images/anonymous.png'
import questionMark from '../../assets/images/questionMark.png'
import {Search} from './SearchStyles'
import {Link} from 'react-router-dom'
    const OneSeries = ({title, image, id}) =>{



        const finalImage = `${image === null ? questionMark : `https://image.tmdb.org/t/p/w300${image}`}`

    return(
        <Search>
            <Link to={`/series/${id}`}></Link>
                <h1>{title}</h1>
                <img src={finalImage} alt={title}/>
        </Search>
    )
}


export default OneSeries