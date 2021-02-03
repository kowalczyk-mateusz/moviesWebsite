
import React from 'react'
import {Logo, NavBar, Menu, StyledLink} from './navStyle'

const Nav = () =>{
    return (
        <NavBar>
            <Logo>
            <StyledLink to='/PopularMovies'><h2><span>M</span>vies</h2></StyledLink>
            </Logo>
            <Menu>
                <ul>
                    <StyledLink to='/PopularMovies'><li>Popularne Filmy</li></StyledLink>
                    <StyledLink to='/PopularTvSeries'><li>Popularne Seriale</li></StyledLink>
                    <StyledLink to='/Categories'><li>Kategorie</li></StyledLink>
                    <StyledLink to='/Actors'><li>Aktorzy</li></StyledLink>
                    <StyledLink to='/Search'><li>Szukaj filmu</li></StyledLink>
            </ul>
            </Menu>
        </NavBar>
    )
}


export default Nav