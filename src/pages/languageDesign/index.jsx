import React, { Component } from 'react'
import {
  Route,
  Link
} from "react-router-dom";
import Introduce from './components/introduce'
import Values from './components/values'
import Cases from './components/cases'

export default class LanguageDesign extends Component {
  render() {
    return (
      <div className="flex" style={{height: '500px'}}>
        <ul className="left-menu">
          <li>
            <Link to="/language/introduce">介绍</Link>
          </li>
          <li>
            <Link to="/language/values">设计价值观</Link>
          </li>
          <li>
            <Link to="/language/cases">实践案例</Link>
          </li>
        </ul>
        <div className="content">
          <Route path="/language/introduce" component={Introduce}></Route>
          <Route path="/language/values" component={Values}></Route>
          <Route path="/language/cases" component={Cases}></Route>
        </div>
      </div>
    )
  }
}
