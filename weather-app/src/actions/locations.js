import { fetchLocations } from '../API'

export const fetchAction = city => async dispatch => {
    try {
        const data = await fetchLocations(city);
        dispatch({ type: 'FETCH_LOCATIONS_SUCCESS', payload: data})
    } catch (err) {
        dispatch({ type: 'FETCH_LOCATION_FAILED', payload: err.message})
    }
} 

