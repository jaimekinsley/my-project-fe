import React, { Component } from 'react'

export default class CloudItem extends Component {
    render() {
        return (
            <li>
            <p>{this.props.cloud.name}</p>
            </li>
        )
    }
}
