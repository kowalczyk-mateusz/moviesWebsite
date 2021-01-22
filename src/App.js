import React from 'react'
import Home from './pages/Home'
import Nav from './components/Navigation/nav'
import styled from 'styled-components'

function App() {

  return (
    <Main>

      <Nav />
      <Home />
    </Main>
  );
}
const Main = styled.div`
background-color: #030B11;
`
export default App;
