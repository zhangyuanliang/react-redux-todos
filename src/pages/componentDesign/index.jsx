import React, { Component } from 'react'
import {
  Route,
  Link
} from "react-router-dom";
import Start from './components/start'
import Project from './components/project'
import Create from './components/create'

import './index.scss'

export default class ComponentDesign extends Component {
  render() {
    return (
      <div className="flex" style={{height: '500px'}}>
        <ul className="left-menu">
          <li>
            <Link to="/component/start">快速上手</Link>
          </li>
          <li>
            <Link to="/component/project">项目实战</Link>
          </li>
          <li>
            <Link to="/component/create">在create-react-app中使用</Link>
          </li>
        </ul>
        <div className="content">
          <Route path="/component/start" component={Start}></Route>
          <Route path="/component/project" component={Project}></Route>
          <Route path="/component/create" component={Create}></Route>
        </div>
      </div>
    )
  }
}
