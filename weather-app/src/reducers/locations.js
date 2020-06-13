const initialState = {
    data: {},
    error: null
};

export default function locations( state = initialState, action) {
    if (action.type === 'FETCH_LOCATIONS_SUCCESS') {
        return {
            ...state,
            data: action.payload
        }
    }

    if (action.type === 'FETCH_LOCATIONS_FAILED') {
        return {
            ...state,
            error: action.payload
        }
    }
       
    return state
}