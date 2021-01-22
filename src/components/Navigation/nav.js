
import React from 'react'

import {Logo, NavBar, Menu, Search} from './navStyle'
const Nav = () =>{
    return (
        <NavBar>
            <Logo>
                <h2><span>M</span>vies</h2>
            </Logo>
            <Menu>
                <ul>
                    <li>Popularne Filmy</li>
                    <li>Popularne Seriale</li>
                    <li>Kategorie</li>
                    <li>Wylosuj film na dzis!</li>

                </ul>
            </Menu>
            <Search>
                    <input type="text" placeholder="wyszukaj film lub serial"/>
            </Search>
        </NavBar>
    )
}


export default Nav