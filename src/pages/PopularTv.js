import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {loadSeries} from '../actions/seriesAction'
const PopularTv = () =>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(loadSeries())
    }, [dispatch])

    const {popularSeries} = useSelector((state)=>state.series)
        console.log(popularSeries)
    return(
        <h1>Popularne</h1>
    )
}

export default PopularTv