import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends React.Component {
    render() {
        return (
            <div >
                {this.props.show &&  
                <h5>Weather</h5>
            }
                {this.props.newWeatherArray.map((item, index) => {
                    return (
                        <div key={index}>  
                            <p>  Date: {item.valid_date}</p>
                            <p> Description: {item.description}</p>
                            <p>======================</p>
                        </div>

                    )
                }
                )}
            </div>

        )

    }
}

export default Weather;
