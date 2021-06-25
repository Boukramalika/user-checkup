import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import UserList from './components/UserList'
import UserProfile from './components/UserProfile'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      user:""
    }

  }
  setUser =()=>{

  }
  render() {
    return (
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item" setUser={this.props.setUser} ><Link className="nav-link" to="/"> Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/UserList">UserList</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/UserProfile">UserProfile</Link></li>

          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/UserList" component={UserList}/>
          <Route path="/UserProfile" component={UserProfile}/>


        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
