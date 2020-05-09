import React, { Component } from 'react'
// import { clouds } from './clouds.js'
import request from 'superagent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CloudList from './CloudList.js'
import DetailPage from './DetailPage.js'
import AdminPage from './AdminPage.js'


export default class App extends Component {




  render() {

    return (
      <div className="container">
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <CloudList {...routerProps} />}
            />

            <Route
            path="/cloud/:id"
            exact
            render={(routerProps) => <DetailPage {...routerProps} />}
            />

            <Route
            path="/admin"
            exact
            render={(routerProps) => <AdminPage {...routerProps} />}
            />
        </Switch>
        </Router>
      </div>
    )
  }
}




