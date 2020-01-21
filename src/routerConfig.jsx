import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home'
import LanguageDesign from './pages/languageDesign'
import ComponentDesign from './pages/componentDesign'

export default function routerConfig() {
  return (
    <Router>
      <div className="header">
        <div style={{fontSize: 26}}>Ant Design</div>
        <nav>
          <ul className="header-nav">
            <li>
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/language">设计语言</Link>
            </li>
            <li>
              <Link to="/component">组件</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/language">
            <LanguageDesign/>
          </Route>
          <Route path="/component">
            <ComponentDesign/>
          </Route>
        </Switch>
    </Router>
  )
}