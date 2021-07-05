import React from 'react'



class Weather extends React.Component {
    constructor(props) {
      super(props);
    
    };
    render() {
      return (
        <div>
          <p>Date: {this.props.date}</p>
          <p>Weather: {this.props.description}</p>
        </div>
      )
    }
  }


    export default Weather;