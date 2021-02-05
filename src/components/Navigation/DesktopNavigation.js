import React from 'react'
import {Logo, NavBar, Menu, StyledLink} from './navStyle'

const DesktopNavigation = ({pageNumber, setPageNumber}) =>{
    const movieHomePage = ()=>{
        setPageNumber(1)
    }

    return (
        <NavBar>
            <Logo onClick={movieHomePage}>
            <StyledLink to='/'><h2><span>M</span>vies</h2></StyledLink>
            </Logo>
            <Menu>
                <ul>
                    <StyledLink onClick={movieHomePage} to='/'><li>Popularne Filmy</li></StyledLink>
                    <StyledLink onClick={movieHomePage} to={`/PopularTvSeries`}><li>Popularne Seriale</li></StyledLink>
                    <StyledLink to='/Categories'><li>Kategorie</li></StyledLink>
                    <StyledLink to='/Actors'><li>Aktorzy</li></StyledLink>
                    <StyledLink to='/Search'><li>Szukaj filmu</li></StyledLink>
            </ul>
            </Menu>
        </NavBar>
    )
}


export default DesktopNavigation