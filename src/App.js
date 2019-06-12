import React from 'react'
import { Home, Article } from './screens'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default () => (
  <Router>
    <Route path='/' component={Home} />
    <Route path='/article/:id' component={Article} />
  </Router>
)
