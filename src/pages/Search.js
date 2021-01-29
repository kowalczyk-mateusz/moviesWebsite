import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import {loadSearch} from '../actions/searchAction'
import SingleSearch from '../components/Search/Search'

const Search = () =>{
  const dispatch = useDispatch()


    const [searchInput, setSearchInput] = useState('')
    const {search} = useSelector((state)=> state.search)
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
            {search.length ? (
                                <SearchList>
                                {   
                                       search.map((data)=><SingleSearch
                                           key={data.id}
                                           name={data.name}
                                           title={data.original_title}
                                           image={data.profile_path}
                                           poster={data.poster_path}
                                           id={data.id}
                                       />)
                                       
                                   }
                                 
                               </SearchList>
            ): ''}
        </SearchPage>
    )
}
const SearchPage = styled.div`
    width: 80%;
    margin: 0 auto;
h2{
    text-align: center;
    color: white;
    font-size: 1.5rem;
    padding: 1rem 0rem;
}
`
const SearchInput = styled.div`
width: 100%;
display: flex;
justify-content: center;
button{
    padding: 0.5rem 1rem;
    margin-left: 0.5rem;
    border-radius: 0.5rem;
    font-size: 0.5rem;
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
    padding: 0.5rem 0rem;
    background-color:  #47CCA0;
    font-size: 0.5rem;
    border-radius: 0.5rem;
    padding-left: 0.25rem;
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
`

const SearchList = styled.div`
display: grid;
width: 80%;
margin: 0 auto;
margin-top: 5rem;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-column-gap: 1rem;
grid-row-gap: 3rem;
`

export default Search