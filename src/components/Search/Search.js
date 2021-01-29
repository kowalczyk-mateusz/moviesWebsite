import React from 'react'
import styled from 'styled-components'
import anonymo from '../../assets/images/anonymous.png'
import questionMark from '../../assets/images/questionMark.png'
const SingleSearch = ({title,name,poster, id, image}) =>{



    const finalImage = `https://image.tmdb.org/t/p/w500${name == null  ? poster : image}`
    return(
        <Search>
                <h1>{title == null ? name : title}</h1>
                <img src={finalImage == `https://image.tmdb.org/t/p/w500${finalImage == `null` ? `null` : `undefined`}` ? questionMark : finalImage} alt={title}/>
        </Search>
    )
}

const Search = styled.div`
width: 100%;
max-height: 250px;
overflow: hidden;
justify-content: space-between;
cursor: pointer;

&:hover{
   transform: scale(1.02);


}

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
h1{
    height: 2rem;
    font-size: 1rem;
    text-align: left;
    color: #47CCA0;
    z-index: 4;
}
`

export default SingleSearch