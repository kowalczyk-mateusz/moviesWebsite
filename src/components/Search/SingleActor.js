import React from 'react'
import anonymo from '../../assets/images/anonymous.png'
import {Search} from './SearchStyles'
    const OneActor = ({name, id, image}) =>{



    const finalImage = `${image === null ? anonymo : `https://image.tmdb.org/t/p/w300${image}`}`

    return(
        <Search>
                <h1>{name}</h1>
                <img src={finalImage} alt={name}/>
        </Search>
    )
}

export default OneActor