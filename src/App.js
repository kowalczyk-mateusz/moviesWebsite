import React from 'react'

import Nav from './components/Navigation/nav'
import styled from 'styled-components'
import {Route, Switch, Router} from 'react-router-dom'
import {useLocation} from 'react-router-dom';
import Categories from './pages/Categories';
import PopularTvSeries from './pages/PopularTvSeries'
import PopularMovies from './pages/PopularMovies'
import DrawMovie from './pages/DrawMovie'
import SingleMovie from './components/Movie/singleMovie';
import SingleSeries from './components/series/singleSeries'
function App() {

  return (
    <Main>
    <Nav />
    <Switch>
          
      <Route path={"/"} exact>
        <PopularMovies/>
      </Route>
      <Route path='/PopularTvSeries'>
        <PopularTvSeries/>
      </Route>
      <Route path="/Caregories">
        <Categories/>
      </Route>
      <Route path="/movie/:id">
        <SingleMovie />
      </Route>
      <Route path="/DrawMovie">
        <DrawMovie/>
      </Route>
    <Route path="/series/:id">
      <SingleSeries />
    </Route>
      </Switch>
      </Main>
)}

const Main = styled.div`
background-color: #030B11;
width: 100%;
min-height: 100vh;

`
export default App;
