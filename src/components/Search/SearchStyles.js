import styled from 'styled-components'

export const Search = styled.div`
margin: 0 auto;
width: 400px;
height: 400px;
overflow: hidden;
justify-content: space-between;
cursor: pointer;
padding: 2rem 4rem;
&:hover{
   transform: scale(1.02);

}

img{
    width: 100%;
    height: 100%;
    object-fit: fill;
}
h1{
    height: 2rem;
    font-size: 1rem;
    text-align: left;
    color: #47CCA0;
    z-index: 4;
}
`
