import { fetchLocations } from '../API'

export const fetchAction = () => async dispatch => {
    try {
        const data = fetchLocations();
        dispatch({ type: 'FETCH_LOCATIONS_SUCCESS', payload: data})
    } catch (err) {
        dispatch({ type: 'FETCH_LOCATION_FAILED', payload: err.message})
    }
} 