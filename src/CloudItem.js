import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CloudItem extends Component {
    render() {
        return (

            <li className="cloud-item">
            <p><strong>Name: </strong> <Link to={`/cloud/${this.props.cloud.id}`}>{this.props.cloud.name}</Link> </p>
            <p><strong>Atmospheric Level:</strong> {this.props.cloud.level}</p>
            <p><strong>Is Severe? </strong> {String(this.props.cloud.is_severe)}</p>
            </li>
        )
    }
}

