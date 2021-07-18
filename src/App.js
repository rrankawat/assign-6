import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import Navbar from './components/Navbar'
import About from './pages/About'
import AllIssuesPage from './pages/AllIssuesPage'
import IssueDetail from './pages/IssueDetail'
import AddIssue from './pages/AddIssue'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={AllIssuesPage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/issues' component={AllIssuesPage} />
          <Route exact path='/addIssue' component={AddIssue} />
          <Route exact path='/issues/:description' component={IssueDetail} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
