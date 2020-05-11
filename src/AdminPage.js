import React, { Component } from 'react'
import { addCloud } from './api-calls.js'

export default class AdminPage extends Component {
    state = {
        name: '',
        level: 0,
        is_severe: false,
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const newCloud = await addCloud(this.state)

        this.setState({ success: newCloud })

        this.props.history.push(`/cloud/${newCloud.id}`);

    }

    handleGeneralChange = (e) => {
        const newState = {}
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    render() {
        const { name, level, is_severe } = this.state;

        return (
            <div className="form-container">
                <h3>Enter a new cloud!</h3>

                <form onSubmit={this.handleSubmit}>

                    <label> Cloud Name
                    <input onChange={this.handleGeneralChange} value={name} name="name"/>
                    </label>

                    <label> Level
                    <input onChange={this.handleGeneralChange} value={level} name="level" type="number"/>
                    </label>

                    <label> Is Severe
                    <input onChange={this.handleGeneralChange} checked={is_severe === "true"} name="is_severe" type="radio" value="true" />
                    </label>

                    <label> Is Not Severe<input onChange={this.handleGeneralChange} checked={is_severe === "false"} name="is_severe" type="radio" value="false" />
                    </label>

                    <button>Submit</button>

                </form>
            </div>
        )
    }
}


