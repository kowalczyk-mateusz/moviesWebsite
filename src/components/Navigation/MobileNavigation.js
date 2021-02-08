import React, {useState} from 'react'
import styled from 'styled-components'
import BurgerMenu from './BurgerMenu'
import {Link} from 'react-router-dom'
import {Menu} from './MobileNavigationStyles'
const MobileNavigation = ({setPageNumber})=>{
    const movieHomePage = ()=>{
        setPageNumber(1)
        isOpen(false);
        document.body.style.overflow='auto';
    }
    const [open, isOpen] = useState(false)
    const isOpenHandler = ( )=>{
        if(open === false){
            isOpen(true)
            document.body.style.overflow='hidden';
        }
        else{
            isOpen(false)
            document.body.style.overflow='auto';
        }
        
    }

    const linkClickHandle = () =>{
        isOpen(false);
        document.body.style.overflow='auto';
    }

    return(
        <Menu open={open}>
       <BurgerMenu clickHandler={isOpenHandler} open={open}/>
       <ul>
       <StyledLink onClick={movieHomePage} to='/'><li>Popular Movies</li></StyledLink>
                    <StyledLink onClick={movieHomePage} to={`/PopularTvSeries`}><li>Popular TV Series</li></StyledLink>
                    <StyledLink onClick={linkClickHandle} to='/Categories'><li>Categories</li></StyledLink>
                    <StyledLink onClick={linkClickHandle} to='/Actors'><li>Actors</li></StyledLink>
                    <StyledLink onClick={linkClickHandle} to='/Search'><li>Find Movie</li></StyledLink>
       </ul>
       </Menu>
    )
}

const StyledLink = styled(Link)`
color:  #47CCA0;
font-size: 2rem;
padding: 1rem 0rem;
`

export default MobileNavigation