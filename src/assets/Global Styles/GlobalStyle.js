import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
body{
width: 100%;
::-webkit-scrollbar {
  width: 0.5rem;
}

::-webkit-scrollbar-track {
  background: #fff;
}

::-webkit-scrollbar-thumb {
  background: #47cca0;
}
}
*, ::before, ::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    font-family: 'Oswald', sans-serif;
}
li{
    list-style: none;
}
a{
    text-decoration: none;
}
`