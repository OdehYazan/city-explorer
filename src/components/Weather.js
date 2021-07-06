import React from 'react'



class Weather extends React.Component {
  constructor(props) {
    super(props);

  };
  render() {
    return (
      <div>
        {
          this.props.weather.map((item, index) => {
            return (
              <div key={index}>
                <p>Date: {item.date} </p>
                <p>Weather: {item.description}</p  >
              </div>
            )
          })
        }

      </div>
    )
  }
}


export default Weather;