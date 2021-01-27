import React from 'react'
<<<<<<< HEAD
import Nav from './components/Navigation/nav'
import styled from 'styled-components'
import {Route, Switch, Router} from 'react-router-dom'
import {useLocation} from 'react-router-dom';
import SingleMovie from './components/Single Movie/singleMovie'
import Home from './pages/Home'
import Categories from './pages/Categories';
import PopularTv from './pages/PopularTv'
function App() {
  const location = useLocation()
  const pathId = location.pathname.split('/')[2];
  console.log(pathId);
  return (
    <Main>

            <Nav />
            <Switch location={location}  key={location.pathname}>
            <Route path={["/movie/:id", "/"]} exact>
            {pathId && <SingleMovie />}
      <Home></Home>
      </Route>
      <Route path='/categories'>
        <Categories />
      </Route>
      <Route path="/popularTvSeries">
        <PopularTv/>
      </Route>
      </Switch>
=======
import Home from './pages/Home'
import Nav from './components/Navigation/nav'
import styled from 'styled-components'
import SingleMovie from './components/Single Movie/singleMovie'
import {Route} from 'react-router-dom'
import {useLocation} from 'react-router-dom';
function App() {
  const location = useLocation()
  const pathId = location.pathname.split('/')[2];

  return (
    <Main>
      <Route path={["/movie/:id", "/"]}>
                  {pathId && <SingleMovie />}
      <Nav />
      <Home />
      </Route>
>>>>>>> 454438a4f9aebfa35152d3afeb09d223511d3a79
    </Main>
  );
}
const Main = styled.div`
background-color: #030B11;
<<<<<<< HEAD
width: 100%;
min-height: 100vh;
=======
>>>>>>> 454438a4f9aebfa35152d3afeb09d223511d3a79
`
export default App;
