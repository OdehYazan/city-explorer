import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import Weather from './components/Weather';
import Movies from './components/Movies';


class App extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      cityData: {},
      userInput: '',
      showMap: false,
      newWeatherArray: [],
      newMoviesArray: [],

    }
  }
  getLocationFun = async (event) => {

    event.preventDefault();

    await this.setState({

      userInput: event.target.cityName.value,
    })

    console.log(this.state.userInput)

    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_LOCATION_KEY}&q=${this.state.userInput}&format=json`;

    let resData = await axios.get(url);

    await this.setState({

      cityData: resData.data[0],
      showMap: true,
    })
    this.getWeather();
    this.weatherReq();
    this.moviesReq();

  }
  weatherReq = async () => {

    let cityName = this.state.userInput;
    let weatherUrl = `${process.env.REACT_APP_SERVER_URL}/weather?cityName=${cityName}`;
    // let weatherUrl = `http://localhost:3001/weather?cityName=${cityName}&format=json`;

    let weatherData = await axios.get(weatherUrl)

    await this.setState({ newWeatherArray: weatherData.data, });
  }

  moviesReq = async () => {

    let cityName = this.state.userInput;

    let moviesUrl = `${process.env.REACT_APP_SERVER_URL}/movies?cityName=${cityName}`;

    // let moviesUrl = `http://localhost:3001/movies?cityName=${cityName}&format=json`;
    let moviesData = await axios.get(moviesUrl);

    await this.setState({ newMoviesArray: moviesData.data, })
    console.log(this.state.newMoviesArray);
  }
  getWeather = async () => {

    let cityName = this.state.userInput

    let cityData = await axios.get(`${process.env.REACT_APP_SERVER_URL}/weather?cityName=${cityName}`)

    // let cityData = await axios.get(`http://localhost:3001/weather?cityName=${cityName}&format=json`)
    
    await this.setState({ newWeatherArray: cityData.data, })
  }

  render() {
    return (

      <>
        <h1>City Explorer </h1>


        <Form onSubmit={this.getLocationFun}>

          <Form.Group className="mb-3" controlId="formBasic">
          <Form.Control type="text" placeholder="City Name" name='cityName'/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>

        
        {this.state.showMap && <div>
          <p>City Name:{this.state.cityData.display_name}</p>
          <p>Latitude :{this.state.cityData.lat}</p>
          <p>Longitude :{this.state.cityData.lon}</p>
        </div>}
        {this.state.showMap && <img alt='map' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_LOCATION_KEY
          }&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=15`} />
        }
        <Weather newWeatherArray={this.state.newWeatherArray} show={this.state.showMap} />
        <Movies newMoviesArray={this.state.newMoviesArray} />


      </>
    )
  }
}

export default App;
