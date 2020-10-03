import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Home from "./Components/Home"
import Board from "./Components/Board"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/saved-games" component={Home}></Route>
          <Route exact path="/board" component={Board}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
