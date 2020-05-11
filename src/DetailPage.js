import React, { Component } from 'react';
import { getCloud } from './api-calls.js';

export default class DetailPage extends Component {
    state = { cloud: null }
    componentDidMount = async () => {
        const fetchedData = await getCloud(this.props.match.params.id);

        this.setState({ cloud: fetchedData })
    }

    render() {
        return (
            <div>
                Detail Page

                <div>
                {
                    this.state.cloud
                    ? JSON.stringify(this.state.cloud)
                    : 'Loading........'
                }
                </div>
            </div>
        )
    }
}

