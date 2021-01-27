import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

export const NavBar = styled(motion.div)`
width: 100%;
height: 10vh;
background-color: #071621;
display: flex;
color: #47CCA0;
align-items: center;
position: sticky;
top: 0;
left: 0;
z-index: 10;
`
export const Logo = styled(motion.div)`
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
export const Menu = styled(motion.div)`
flex: 3;
ul{
    justify-content: flex-end;
    display: flex;
    padding-right: 5rem;
    li{
        padding: 0rem 0.5rem;
        font-size: 0.7rem;
        cursor: pointer;
        &:hover{
            transform: scale(1.2);
            
        }
    }
    
}
`
export const Search = styled(motion.div)`
flex: 1;
input{
    width: 70%;
    padding: 0.5rem 0rem;
    background-color:  #47CCA0;
    font-size: 0.5rem;
    padding-left: 0.25rem;
    border-radius: 0.5rem;
    
    ::placeholder{
        color: #071621;
    }
}
`

export const StyledLink = styled(Link)`
text-decoration: none;
color: #47CCA0;

`

