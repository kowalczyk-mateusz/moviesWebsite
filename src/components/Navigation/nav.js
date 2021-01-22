import {motion} from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

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
                    <input type="text"/>
            </Search>
        </NavBar>
    )
}

const NavBar = styled(motion.div)`
width: 100%;
height: 10vh;
background-color: #071621;
display: flex;
color: #47CCA0;
align-items: center;

`
const Logo = styled(motion.div)`
flex: 1;
display: flex;
justify-content: center;
h2{
    font-size: 1.5rem;
    letter-spacing: -1px;
}
span{
    font-weight: 300;
    font-size: 2.5rem;
}
`
const Menu = styled(motion.div)`
flex: 3;
ul{
    justify-content: flex-end;
    display: flex;
    padding-right: 5rem;
}
`
const Search = styled(motion.div)`
flex: 1;
`

export default Nav