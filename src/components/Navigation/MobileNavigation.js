import React, {useState} from 'react'
import styled from 'styled-components'
import BurgerMenu from './BurgerMenu'
import {Link} from 'react-router-dom'
const MobileNavigation = ({pageNumber, setPageNumber})=>{
    const movieHomePage = ()=>{
        setPageNumber(1)
    }
    const [open, isOpen] = useState(false)
    console.log(open)
    const isOpenHandler = ( )=>{
        if(open === true){
            isOpen(false)
        }
        else{
            isOpen(true)
        }
        
    }

    return(
        <Menu>
       <BurgerMenu clickHandler={isOpenHandler} open={open}/>
       <ul>
       <StyledLink onClick={movieHomePage} to='/'><li>Popularne Filmy</li></StyledLink>
                    <StyledLink onClick={movieHomePage} to={`/PopularTvSeries`}><li>Popularne Seriale</li></StyledLink>
                    <StyledLink to='/Categories'><li>Kategorie</li></StyledLink>
                    <StyledLink to='/Actors'><li>Aktorzy</li></StyledLink>
                    <StyledLink to='/Search'><li>Szukaj filmu</li></StyledLink>
       </ul>
       </Menu>
    )
}

const Menu = styled.div`
padding-bottom: 5rem;

ul{
position: fixed;
width: 100%;
height: 100vh;
background-color: black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
top: 0;
left: 0;
transform: ${(open)=> open === true ? 'translateX(0)' : 'translateX(-100%)'};

}
`
const StyledLink = styled(Link)`
color:  #47CCA0;
font-size: 2rem;
padding: 1rem 0rem;
`

export default MobileNavigation