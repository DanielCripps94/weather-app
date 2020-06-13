// constant

import { API_LOCATION_URL } from './constants/api'

// api

const get = url => fetch(url).then(resp => resp.json())

// functions

export const fetchLocations = () => get(API_LOCATION_URL)
