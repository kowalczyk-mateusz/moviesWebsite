import React, {useState} from 'react'
import styled from 'styled-components'

const MobileNavigation = ()=>{

    const [open, isOpen] = useState(false)
    console.log(open)
    const isOpenHandler = ( )=>{
        return isOpen(!open)
        
    }
    return(
        <HamburgerBox onClick={isOpenHandler}>

            <HamburgerButton className={open ? 'open' : null}  >
                <Hamburger className='burger'></Hamburger>
            </HamburgerButton>

        </HamburgerBox>
    )
}
const HamburgerBox = styled.div`
padding: 2rem;
`
const HamburgerButton = styled.button`
outline: red;
background-color: transparent;
&.open .burger{
    background-color: transparent;
    transform: translateX(30px);
    ::before{
        transform: translate(-30px, -15px) rotate(45deg);
    }
    ::after{
      
       transform: translate(-30px, 15px) rotate(-45deg);
    }
}
`
const Hamburger = styled.span`
display: inline-block;
width: 50px;
height: 4px;
background-color: red;
position: absolute;
transition: all 0.3s;
&:before{
    content: '';
    width: 50px;
    height: 4px;
    background-color: red;
    position: absolute;
    top: 15px;
    left: 0;
    transition: all 0.5s;
}
&::after{
    content: '';
    width: 50px;
    height: 4px;
    background-color: red;
    position: absolute;
    top: -15px;
    left: 0;
    transition: all 0.5s;
}
`

export default MobileNavigation