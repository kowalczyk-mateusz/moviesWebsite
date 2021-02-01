import React from 'react'
import styled from 'styled-components'

const DrawMovie = ()=>{
    const lastNumber = 49120
    const random = Math.floor(Math.random() * lastNumber)
    console.log(random);
    return(
        <h1>DRAW</h1>
    )
}
export default DrawMovie