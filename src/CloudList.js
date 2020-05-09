import React, { Component } from 'react'
import CloudItem from './CloudItem.js'
import request from 'superagent'

export default class CloudList extends Component {

    state = {
      data: []
  }

async componentDidMount (){
  const fetchedData = await request.get('https://serene-plains-21154.herokuapp.com/clouds')
  this.setState({data:fetchedData.body})
  console.log(this.state.data)
  }

    render() {

        return (
            <ul>
            { this.state.data.map(cloud => {
               return <CloudItem cloud={cloud}/>
            }) }
            </ul>
        )
    }
}
