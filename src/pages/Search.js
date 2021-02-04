import React, {useState } from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import {loadSearch} from '../actions/searchAction'

import OneActor from '../components/Search/SingleActor'
import OneMovie from '../components/Search/SingleMovie'
import OneSeries from '../components/Search/SingleSeries'

const Search = () =>{
    const dispatch = useDispatch()
    const [searchInput, setSearchInput] = useState('')
    const {searchMovie, searchSeries, searchActor} = useSelector((state)=> state.search)
    const inputHandler = (e) => {
        setSearchInput(e.target.value)
    }

    const loadSearchData = (event) => {
        event.preventDefault();
        if(searchInput.length===0){
            return null;
        }
        else{
            dispatch(loadSearch(searchInput))
            setSearchInput('')
        }
    }

    return(
        <SearchPage>
            <h2>Wyszukaj film, serial lub aktora</h2>
            <SearchInput>
                <input onChange={inputHandler} type="text" placeholder='Wyszukaj film, serial lub aktora...' />
                <button onClick={loadSearchData}>Szukaj</button>
            </SearchInput>
            <SearchData>
            {searchMovie.length ? (
                                <SearchMovie>
                                    <h2>MOVIES</h2>
                                {   
                                       searchMovie.map((data)=><OneMovie
                                           key={data.id}
                                           id={data.id}
                                           title={data.original_title}
                                           image={data.poster_path}
                                       />)
                                       
                                   }
                                 
                               </SearchMovie>
            ): ''}
            {searchSeries.length ? (
                                <SearchSeries>
                                    <h2>TV SERIES</h2>
                                {   
                                       searchSeries.map((data)=><OneSeries
                                       key={data.id}
                                       id={data.id}
                                        title={data.original_name}
                                        image={data.poster_path}
                                       />)
                                       
                                   }
                                 
                               </SearchSeries>
            ): ''}

            {searchActor.length ? (
                                <SearchActor>
                                    <h2>ACTORS</h2>
                                {   
                                       searchActor.map((data)=><OneActor
                                       key={data.id}
                                       id={data.id}
                                       name={data.name}
                                       image={data.profile_path}
                                       />)
                                       
                                   }
                                 
                               </SearchActor>
            ): ''}
            </SearchData>
        </SearchPage>
    )
}
const SearchPage = styled.div`
    min-height: 100vh;
    width: 80%;
    margin: 0 auto;
h2{
    text-align: center;
    color: white;
    font-size: 2.5rem;
    padding: 1rem 0rem;
}
`
const SearchInput = styled.div`
width: 100%;
display: flex;
justify-content: center;
button{
    padding: 0.5rem 2rem;
    margin-left: 0.5rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    color: #47CCA0;
    background-color: #030B11;
    border: 1px solid #47CCA0;
    transition: all 0.3s;
    font-weight: bold;
    &:hover{
        background-color:#47CCA0;
        color:  #030B11;

    }
}
input{
    width: 50%;
    padding: 1rem 0rem;
    background-color:  #47CCA0;
    font-size: 1rem;
    border-radius: 0.5rem;
    padding-left: 1rem;
    transition: all 0.3s;
    ::placeholder{
        font-weight: bold;
        color: #071621;
    }
    &:focus{
        border: 1px solid #47CCA0;
        background-color:  #030B11;
        
        color: #47CCA0;

    }

}
@media (max-width: 850px){
    flex-direction: column;
    input{
        margin: 0 auto;
        width: 80%;
    }
    button{
        width: 35%;
        margin: 0 auto;
        margin-top: 1rem;
        text-align: center;
    }
}
`
const SearchData = styled.div`
display: flex;
@media (max-width: 1300px){
    justify-content: center;
    flex-wrap: wrap;
}
`
const SearchMovie = styled.div`
h2{
    font-size: 2rem;
    text-align: center;
}
flex: 1;
`
const SearchActor = styled.div`
flex: 1;
h2{font-size: 2rem}
`
const SearchSeries = styled.div`
flex: 1;
h2{font-size: 2rem}
`

export default Search