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
                    <StyledLink onClick={movieHomePage} to='/'><li>Popular Movies</li></StyledLink>
                    <StyledLink onClick={movieHomePage} to={`/PopularTvSeries`}><li>Popular TV Series</li></StyledLink>
                    <StyledLink to='/Categories'><li>Categories</li></StyledLink>
                    <StyledLink to='/Actors'><li>Actors</li></StyledLink>
                    <StyledLink to='/Search'><li>Find Movie</li></StyledLink>
            </ul>
            </Menu>
        </NavBar>
    )
}


export default DesktopNavigation