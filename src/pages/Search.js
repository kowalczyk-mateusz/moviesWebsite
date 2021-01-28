import React, { useEffect } from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import {loadSearch} from '../actions/searchAction'

const Search = () =>{
const searchId = 'superman'
  const dispatch = useDispatch()

    const loadSearchData = (event) => {
        dispatch(loadSearch(searchId))
        event.preventDefault();
    }

    return(
        <SearchPage>
            <h2>Wyszukaj film, serial lub aktora</h2>
            <SearchInput>
                <input type="text" placeholder='Wyszukaj film, serial lub aktora...' />
                <button onClick={loadSearchData}>Szukaj</button>
            </SearchInput>
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

export default Search