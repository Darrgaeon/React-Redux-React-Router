import React from "react";
import { connect } from "react-redux";
import { LoginAuth } from "../actions/UserActions";
import { Link } from "react-router-dom";
import { Button, Navbar } from "reactstrap";

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.loginExitButton = this.loginExitButton.bind(this);

  }

  loginExitButton() {
    if (this.props.userAuth) {
      this.props.checkLoginAction(false);
      localStorage.clear()
    }
  }

  render() {
    const {userAuth} = this.props;

    return (
      <div >
        <Navbar color="primary" light expand="md">
        <Link to="/">Главная</Link>
        <Link to="/news">Новости</Link>
        <Link to="/profile">Профиль</Link>
        {userAuth ? <Button onClick={this.loginExitButton}>Выйти</Button> : <div></div> }
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = store => {
  console.log("store:", store);
  return {
    userAuth: store.userAuth,
  }
};

const mapDispatchToProps = dispatch => ({

  checkLoginAction: userAuth => dispatch(LoginAuth(userAuth)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);