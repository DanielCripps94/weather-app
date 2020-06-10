import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAction } from '../actions/locations'

const Locations = () => {
    const dispatch = useDispatch();
    const locations = useSelector(state => state.locations)

    useEffect(() => {
        dispatch(fetchAction());
    }, [])

    console.log(locations)

    return <div>
    </div>
}

export default Locations