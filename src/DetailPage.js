import React, { Component } from 'react';
import { getCloud, newCloudName } from './api-calls.js';

export default class DetailPage extends Component {
    state = { cloud: null }
    componentDidMount = async () => {
        const fetchedData = await getCloud(this.props.match.params.id);

        this.setState({ cloud: fetchedData })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const newName = await newCloudName(this.state);

        this.setState({ success: newName })

        this.props.history.push(`/`)
    }

// handleChange = (e) => {
//     const newState = {}
//     newState[e.target.name] = e.target.value;
//     this.setState(newState);
// }

handleChange = (e) => {
    this.setState({name: e.target.value});
}



    render() {
        return (
            <div>
                Detail Page

                <div>
                {
                    this.state.cloud
                    ? <>
                    <li className="detail-item">
            <p><strong>Name </strong> {this.state.cloud.name}</p>
            <p><strong>Atmospheric Level </strong> {this.state.cloud.level}</p>
            <p><strong>Is Severe? </strong> {String(this.state.cloud.is_severe)}</p>
            </li>

            <p>Edit cloud name </p>
            <form onSubmit ={this.handleSubmit}></form>
            <label> New Cloud Name <input onChange={this.handleChange} value={this.state.name} name="name"/>
            </label>
            <button>Submit</button>
            </>
                    : 'Loading........'
                }
                </div>
            </div>
        )
    }
}

