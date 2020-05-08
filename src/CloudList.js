import React, { Component } from 'react'
import CloudItem from './CloudItem.js'

export default class CloudList extends Component {
    render() {
        return (
            <ul>
            { this.props.clouds.map(cloud => {
               return <CloudItem cloud={cloud}/>
            }) }
            </ul>
        )
    }
}
