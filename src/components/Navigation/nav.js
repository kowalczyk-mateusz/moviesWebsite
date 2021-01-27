
import React from 'react'
import {Logo, NavBar, Menu, Search, StyledLink} from './navStyle'
const Nav = () =>{
    return (
        <NavBar>
            <Logo>
            <StyledLink to='/'><h2><span>M</span>vies</h2></StyledLink>
            </Logo>
            <Menu>
                <ul>
                    <StyledLink to='/'><li>Popularne Filmy</li></StyledLink>
                    <StyledLink to='/popularTvSeries'><li>Popularne Seriale</li></StyledLink>
                    <StyledLink to='/categories'><li>Kategorie</li></StyledLink>
                    <StyledLink to='/random'><li>Wylosuj film na dzis!</li></StyledLink>

                </ul>
            </Menu>
            <Search>
                    <input type="text" placeholder="wyszukaj film lub serial"/>
            </Search>
        </NavBar>
    )
}


export default Nav