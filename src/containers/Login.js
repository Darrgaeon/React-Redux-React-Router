import React from "react";
import { connect } from "react-redux";
import { LoginAuth } from "../actions/UserActions";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect} from "react-router-dom";

const dataAdmin = {
  adminLogin: "admin",
  adminPassword: "12345"
};

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmitAuthorization = this.handleSubmitAuthorization.bind(this);
  }

  handleSubmitAuthorization(e) {
    e.preventDefault();
    const login = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    window.localStorage.setItem("login", login);
    window.localStorage.setItem("password", password);

    this.checkAuthorization();
  }

  checkAuthorization() {
    const checkLogin = window.localStorage.getItem("login");
    const checkPassword = window.localStorage.getItem("password");

    (checkLogin === dataAdmin.adminLogin && checkPassword === dataAdmin.adminPassword) ? this.props.checkLoginAction(true) :  alert("Ваш аккаунт не найден. Попробуйте еще раз.");

  }

  render() {

    if (this.props.userAuth) {
      return <Redirect to={{pathname: '/profile'}} />
    }

    return (
      <Form inline onSubmit={this.handleSubmitAuthorization}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="login" className="mr-sm-2">Login</Label>
        <Input type="text" name="login" id="login" placeholder="Введите логин" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="password" className="mr-sm-2">Password</Label>
        <Input type="password" name="password" id="password" placeholder="Введите пароль" />
      </FormGroup>
      <Button>Войти</Button>
    </Form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);