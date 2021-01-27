
import React from 'react'
<<<<<<< HEAD
import {Logo, NavBar, Menu, Search, StyledLink} from './navStyle'
=======

import {Logo, NavBar, Menu, Search} from './navStyle'
>>>>>>> 454438a4f9aebfa35152d3afeb09d223511d3a79
const Nav = () =>{
    return (
        <NavBar>
            <Logo>
<<<<<<< HEAD
            <StyledLink to='/'><h2><span>M</span>vies</h2></StyledLink>
            </Logo>
            <Menu>
                <ul>
                    <StyledLink to='/'><li>Popularne Filmy</li></StyledLink>
                    <StyledLink to='/popularTvSeries'><li>Popularne Seriale</li></StyledLink>
                    <StyledLink to='/categories'><li>Kategorie</li></StyledLink>
                    <StyledLink to='/random'><li>Wylosuj film na dzis!</li></StyledLink>
=======
                <h2><span>M</span>vies</h2>
            </Logo>
            <Menu>
                <ul>
                    <li>Popularne Filmy</li>
                    <li>Popularne Seriale</li>
                    <li>Kategorie</li>
                    <li>Wylosuj film na dzis!</li>
>>>>>>> 454438a4f9aebfa35152d3afeb09d223511d3a79

                </ul>
            </Menu>
            <Search>
                    <input type="text" placeholder="wyszukaj film lub serial"/>
            </Search>
        </NavBar>
    )
}


export default Nav