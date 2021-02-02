import React, { useEffect } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import styled from 'styled-components'
import {loadActors} from '../actions/actorsActions'
import Actor from '../components/Actors/Actor'
const Actors = () =>{

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadActors())
    },[dispatch])

    const {actors} = useSelector((state)=> state.actorsList)
    return(
        <StyledActors>

        <h2>top 20 aktorów dzisiaj</h2>
        {actors &&(

        <ActorsList>
            {
            actors.map((actor) =><Actor
                id={actor.id}
                key={actor.id}
                name={actor.name}
                image={actor.image_path}
            />

            )}
            </ActorsList>
                            )}
    </StyledActors>
    )
}
const StyledActors = styled.div`
width: 100%;
height: auto;
h2{
    text-align: center;
    color: #47CCA0;
    padding-top: 1rem;
    font-size: 2rem;

}
`
const ActorsList = styled.div`
display: grid;
width: 80%;
margin: 0 auto;
margin-top: 5rem;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-column-gap: 1rem;
grid-row-gap: 3rem;
`
export default Actors