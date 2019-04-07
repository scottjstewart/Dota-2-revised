import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
// import withMUI from './lib/withMUI'
// import withApollo from './lib/withApollo'
import Grid from '@material-ui/core/Grid'
import Home from './components/Home'
import Navigation from './components/Navigation'

const history = createHistory()

class App extends Component {
  render () {
    return (
      <Router history={history}>
        <div>
          <Grid container direction='row'>
            <Grid item sm={10} style={{ backgroundColor: 'white' }}>
              <Navigation />
              <Route path='/' component={Home} />
            </Grid>
          </Grid>
        </div>
      </Router>
    )
  }
}

// export default withMUI(withApollo(App))
export default App
