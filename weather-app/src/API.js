// constant

import { API_LOCATION_URL, API_KEY } from './constants/api'

// api

const get = url => fetch(url).then(resp => resp.json())

// functions

export const fetchLocations = city => get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
