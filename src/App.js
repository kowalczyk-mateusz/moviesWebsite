import React, {useState} from 'react'
import MobileHook from './Hooks/mobileHook'
import DesktopNavigation from './components/Navigation/DesktopNavigation'
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
import MobileNavigation from './components/Navigation/MobileNavigation'
function App() {
  
  const [pageNumber, setPageNumber] = useState(1);
  const [mobile, setMobile] = useState(false)
  MobileHook(setMobile, 1000);
  return (
    <Main>
    {mobile ? <MobileNavigation/> : <DesktopNavigation pageNumber={pageNumber} setPageNumber={setPageNumber}/>}
    <Switch>
          
      <Route path="/" exact>
        <PopularMovies pageNumber={pageNumber} setPageNumber={setPageNumber}/>
      </Route>
      <Route  path='/PopularTvSeries'>
        <PopularTvSeries pageNumber={pageNumber} setPageNumber={setPageNumber}/>
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
    <Route path="/Categories/:genreName/:id" component={CategoriesMovie}>

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
