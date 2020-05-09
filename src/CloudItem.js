import React, { Component } from 'react'

export default class CloudItem extends Component {
    render() {
        return (

            <li>
            <p><strong>Name: </strong>{this.props.cloud.name}</p>
            <p><strong>Atmospheric Level:</strong> {this.props.cloud.level}</p>
            <p><strong>Is Severe? </strong> {String(this.props.cloud.is_severe)}</p>
            </li>
        )
    }
}

