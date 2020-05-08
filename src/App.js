import React, { Component } from 'react'
// import { clouds } from './clouds.js'
import CloudList from './CloudList.js'
import request from 'superagent'


export default class App extends Component {

state = {
      data: []
  }

async componentDidMount (){
  const fetchedData = await request.get('https://serene-plains-21154.herokuapp.com/clouds')
  this.setState({data:fetchedData.body})
  }


  render() {

    return (
      <div>
  <CloudList clouds={this.state.data} />




      </div>
    )
  }
}




