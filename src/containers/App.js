import React from 'react'
import { connect } from "react-redux";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";

import Home from "../components/Home";
import News from "../components/News";
import Profile from "../components/Profile";
import Login from "../containers/Login";
import Menu from "./Menu";

class App extends React.Component {
  render() {
    const {userAuth} = this.props;
    console.log("app", userAuth);
    return (
      <Router>
        <div>
          <Menu/>
          <Route exact path="/" component={Home}/>
          <Route path="/news" component={News}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute authed={userAuth} path="/profile" component={Profile}/>
        </div>
      </Router>
    )
  }
}


function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login'}} />}
    />
  )
}

const mapStateToProps = store => {
  console.log(store);
  return {
    userAuth: store.userAuth,
  }
};

export default connect(mapStateToProps)(App);