import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAction } from '../actions/locations'
import { Location } from './Location'

const Locations = () => {
    const dispatch = useDispatch();
    const [city, setCity] = useState('London')
    const { data }  = useSelector(state => state.locations)
    
    useEffect(() => {
        dispatch(fetchAction(city));
    }, [dispatch, city])

    console.log(data)
    

    return <div>
                <Location weatherData={data} setCity={setCity} city={city}/>
            </div>
            
}

export default Locations