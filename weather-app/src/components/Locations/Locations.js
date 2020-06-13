import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAction } from '../../actions/locations'
import { Location } from '../Location/Location'

const Locations = () => {
    const dispatch = useDispatch();
    const { data }  = useSelector(state => state.locations)
    
    useEffect(() => {
        dispatch(fetchAction());
    }, [dispatch])

    console.log(data)
    

    return <div>
                <Location weatherData={data}/>
            </div>
            
}

export default Locations