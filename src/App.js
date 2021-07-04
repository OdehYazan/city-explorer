import React from 'react'
import {form,button} from 'react-bootstrap';
import axios from 'axios'
import { render } from '@testing-library/react';

class App extends  React.Component{
  constructor(props){
    super(props);
    this.state ={
      cityInfo :{}

    }
    
  }
getlocation = async () =>{
  let url='https://us1.locationiq.com/v1/search.php?key=pk.891ff00d5f4e98e578a4be3cb6478d75&q=Amman&format=json'
}
  

render(){
  return(
    <div>
      <h1>City Explorer</h1>
    </div>
  )
}
}
export default App;
