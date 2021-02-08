import styled from 'styled-components'


export const Menu = styled.div`
padding-bottom: 5rem;
position: sticky;
top: 0;
left: 0;
background-color:#071621;
height: 50px;
z-index: 99;
ul{
    transition: .5s ease-in-out;
width: 100%;
height: 100vh;
background-color: #030B11;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
top: 0;
left: 0;
transform: ${({open})=> open === true ? 'translateX(0)' : 'translateX(-100%)'};

}
`