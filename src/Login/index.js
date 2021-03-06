import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Admin from "../Admin";
import logo from "../assets/rainbow.png";

class Login extends Component {
  state = {
    isAuthenticated: false,
    user: ""
  };

  setIsAuthenticated(isAuthenticated) {
    this.setState({ isAuthenticated });
  }

  setUser(user) {
    this.setState({ user });
  }

  render() {
    if (!this.state.isAuthenticated)
      return (
        <>
          <div className="header oppo">
            <Link className="nolink" to="/">
              <img className="logo" src={logo} />
              <h1>Oppo</h1>
              <img className="logo" src={logo} />
            </Link>
          </div>
          <div className="admin card container">
            <Admin user={this.state.user} />
          </div>
        </>
      );
    return (
      <div>
        <Form onSubmit={() => this.setIsAuthenticated(true)}>
          <Form.Group controlId="user">
            <Form.Label>User</Form.Label>
            <input
              type="text"
              value={this.user}
              onChange={e => this.setUser(e.target.value)}
              className="form control input"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Button
            onClick={() => this.setIsAuthenticated(true)}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
