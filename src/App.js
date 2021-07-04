import React from 'react'
import { Form, Button } from 'react-bootstrap'
import Axios from 'axios'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityInfo: {},
      userInputForCityName: '',
      showMap: false
    }

  }


  getLocation = async (event) => {

    event.preventDefault();

    await this.setState({

      userInputForCityName: event.target.City.value

    })

    console.log(this.state.userInputForCityName);

    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_LOCATION_KEY}&q=${this.state.userInputForCityName}&format=json`

    let dataArray = await Axios.get(url);

    console.log(dataArray)
    console.log(dataArray.data[0])

    this.setState({


      cityInfo: dataArray.data[0],
      showMap: true
    })

  }


  render() {
    return (
      <div>
        <h1>City Explorer</h1>
        <Form onSubmit={this.getLocation}>
          <label > City Name :  </label>
          <Form.Control size="lg" type="text" placeholder="Enter City name" name='City' />
          <Button variant="primary" type="submit">Explore!</Button>

        </Form>

        <h3>City Information</h3>
        <h4>City Name :{this.state.cityInfo.display_name}</h4>
        <h5> latitude :{this.state.cityInfo.lat} /longitude :{this.state.cityInfo.lon}</h5>
        {this.state.showMap &&
        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_LOCATION_KEY}&center=${this.state.cityInfo.lat},${this.state.cityInfo.lon}&zoom=18&size=800x800&format=jpg&maptype=roadmap`} alt='map' />}
      </div>
    )
  }
}
export default App;
