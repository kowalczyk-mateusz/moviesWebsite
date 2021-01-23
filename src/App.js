import React from 'react'
import Home from './pages/Home'
import Nav from './components/Navigation/nav'
import styled from 'styled-components'
import SingleMovie from './components/Single Movie/singleMovie'
import {Route} from 'react-router-dom'
import {useLocation} from 'react-router-dom';
function App() {
  const location = useLocation()
  const pathId = location.pathname.split('/')[2];
  console.log(pathId)

  return (
    <Main>
      <Route path={["/movie/:id", "/"]}>
                  {pathId && <SingleMovie />}
      <Nav />
      <Home />
      </Route>
    </Main>
  );
}
const Main = styled.div`
background-color: #030B11;
`
export default App;
