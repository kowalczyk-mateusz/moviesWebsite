import React from 'react'
import styled from 'styled-components'

const BurgerMenu = ({clickHandler, open})=>{
    return(
        <HamburgerBox onClick={clickHandler}>

        <HamburgerButton className={open ? 'open' : null}  >
            <Hamburger className='burger'></Hamburger>
        </HamburgerButton>

    </HamburgerBox>
    )
}
const HamburgerBox = styled.div`
position: fixed;
top: 0px;
right: 25px;
z-index: 99;
cursor: pointer;
`
const HamburgerButton = styled.button`
outline: #47CCA0;
background-color: transparent;
padding: 2rem;
cursor: pointer;
&.open .burger{
    width: 0px;
    ::before{
        transform: translateY(-15px) rotate(45deg);
    }
    ::after{
      
       transform: translateY(15px) rotate(-45deg);
    }
}
`
const Hamburger = styled.span`
display: inline-block;
width: 40px;
height: 4px;
background-color: #47CCA0;
position: absolute;
transition: all 0.3s;
border-radius: 5px;
&:before{
    content: '';
    width: 40px;
    height: 4px;
    background-color: #47CCA0;
    position: absolute;
    top: 15px;
    left: 0;
    transition: all 0.4s;
    border-radius: 5px;
}
&::after{
    content: '';
    width: 40px;
    height: 4px;
    background-color: #47CCA0;
    position: absolute;
    top: -15px;
    left: 0;
    transition: all 0.4s;
    border-radius: 5px;
}
`
export default BurgerMenu