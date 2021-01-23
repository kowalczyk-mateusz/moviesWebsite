import React from 'react'
import Home from './pages/Home'
import Nav from './components/Navigation/nav'
import styled from 'styled-components'
import SingleMovie from './components/Single Movie/singleMovie'

function App() {

  return (
    <Main>
                  <SingleMovie />
      <Nav />
      <Home />
    </Main>
  );
}
const Main = styled.div`
background-color: #030B11;
`
export default App;
