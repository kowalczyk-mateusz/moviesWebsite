import React from 'react'
import {Logo, NavBar, Menu, StyledLink, Line} from './navStyle'
import {motion} from 'framer-motion'
import {useLocation} from 'react-router-dom'

const DesktopNavigation = ({setPageNumber}) =>{
    const movieHomePage = ()=>{
        setPageNumber(1)
    }
    const {pathname} = useLocation()
    return (
        <NavBar>
            <Logo onClick={movieHomePage}>
            <StyledLink to='/'><h2><span>M</span>vies</h2></StyledLink>
            </Logo>
            <Menu>
                <ul>
                    <StyledLink onClick={movieHomePage} to='/'><li>Popular Movies</li> <Line transition={{duration: 0.75}} initial={{width: '0%'}} animate={{width: pathname === '/' ? '50%' : '0%'}}/></StyledLink>
                    <StyledLink onClick={movieHomePage} to={`/PopularTvSeries`}><li>Popular TV Series</li> <Line transition={{duration: 0.75}} initial={{width: '0%'}} animate={{width: pathname === '/PopularTvSeries' ? '50%' : '0%'}}/></StyledLink>
                    <StyledLink to='/Categories'><li>Categories</li> <Line transition={{duration: 0.75}} initial={{width: '0%'}} animate={{width: pathname === '/Categories' ? '50%' : '0%'}}/></StyledLink>
                    <StyledLink to='/Actors'><li>Actors</li> <Line transition={{duration: 0.75}} initial={{width: '0%'}} animate={{width: pathname === '/Actors' ? '50%' : '0%'}}/></StyledLink>
                    <StyledLink to='/Search'><li>Find Movie</li> <Line transition={{duration: 0.75}} initial={{width: '0%'}} animate={{width: pathname === '/Search' ? '50%' : '0%'}}/></StyledLink>
            </ul>
            </Menu>
        </NavBar>
    )
}


export default DesktopNavigation