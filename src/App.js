import React from 'react'

import Nav from './components/Navigation/nav'
import styled from 'styled-components'
import {Route, Switch} from 'react-router-dom'
import Categories from './pages/Categories';
import PopularTvSeries from './pages/PopularTvSeries'
import PopularMovies from './pages/PopularMovies'
import Actors from './pages/Actors'
import SingleMovie from './components/Movie/singleMovie';
import SingleSeries from './components/series/singleSeries'
import CategoriesMovie from './components/Categories/CategoriesMovie';
import Search from './pages/Search'
import SingleActor from './components/Actors/SingleActor';
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
      <Route path="/Categories" exact>
        <Categories/>
      </Route>
      <Route path="/movie/:id">
        <SingleMovie />
      </Route>
      <Route path="/Actors">
        <Actors/>
      </Route>
    <Route path="/series/:id">
      <SingleSeries />
    </Route>
    <Route path="/Categories/List/:id">
      <CategoriesMovie/>
    </Route>
    <Route path="/Search">
      <Search />
    </Route>
    <Route path="/actor/:id">
      <SingleActor/>
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
