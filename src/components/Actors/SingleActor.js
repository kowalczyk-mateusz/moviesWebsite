import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
const SingleActor = ( )=>{

    const {actor} = useSelector((state)=> state.actorDetails)
    const finalImage = `https://image.tmdb.org/t/p/w300${actor.profile_path}`
    return(
        <StyledActor>
            <ActorBox>
            <ActorImage>
            <img src={finalImage} alt={actor.name}/>
            </ActorImage>
            <ActorInfo>
            <ActorName>
                {actor.name}
            </ActorName>
            <ActorBiography>
                {actor.biography}
            </ActorBiography>

            <ActorBirthday>
                Birthday: {actor.birthday}
            </ActorBirthday>
            {actor.deathday && (
            <ActorDeathday>
                Deathday: {actor.deathday}
            </ActorDeathday>
            )}
            </ActorInfo>
            </ActorBox>
        </StyledActor>
    )
}
const StyledActor = styled.div`
color: white;
width: 70%;
min-height: 100vh;
margin: 0 auto;
display: flex;

`
const ActorBox = styled.div`
display: flex;
width: 100%;
height: 50vh;
justify-content: space-between;
padding: 0rem 5rem;
`
const ActorInfo = styled.div`
flex: 2;
padding: 0rem 5rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
`
const ActorName = styled.h2`
padding-bottom: 1rem;
font-size: 2rem;
`
const ActorBiography = styled.div`
padding-bottom: 1rem;
font-size: 1rem;
letter-spacing: 1px;
`

const ActorBirthday = styled.div`
`
const ActorDeathday = styled.div`
`
const ActorImage = styled.div`
img{
    width: 100%;
    height: 100%;
    object-fit: fill;
}
`

export default SingleActor