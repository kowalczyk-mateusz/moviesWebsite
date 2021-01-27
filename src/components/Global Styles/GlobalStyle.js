import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
body{
width: 100%;

}
*, ::before, ::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
}
li{
    list-style: none;
}
a{
    text-decoration: none;
}
`