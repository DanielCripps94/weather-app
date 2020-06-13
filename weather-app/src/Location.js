import React from 'react'
import { Card, Dropdown, Row, Col  } from 'react-bootstrap'

export const Location = ({ weatherData }) => {
   
    const renderLocation = () => {
        if(weatherData.sys, weatherData.main, weatherData.weather) {

            return <div className='location--wrapper'>
                <Row className='show-grid'>
                   <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {weatherData.name}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Darlington</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Leeds</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Newcastle</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">London</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        <img src='http://openweathermap.org/img/w/10d.png'/>
                        <div>
                            <Col>{Math.round(weatherData.main.temp - 273.5)}°c</Col>
                            <Col>{weatherData.weather[0].description}</Col>
                        </div>
                    </Row>
                </div>
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
