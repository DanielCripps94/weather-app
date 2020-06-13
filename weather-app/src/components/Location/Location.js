import React from 'react'
import './Location.css'
import { Card } from 'react-bootstrap'

export const Location = ({ weatherData }) => {
   
    const renderLocation = () => {
        if(weatherData.sys, weatherData.main) {
            return <p className='location--wrapper'>
                    {weatherData.name}
                    {weatherData.sys.country}
                    {weatherData.main.temp}
                </p>
        }
    }
   
    return (
        <div>
            {renderLocation()}
        </div>
    )
}

// city name 
// weather icon
// description
