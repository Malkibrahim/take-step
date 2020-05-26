import React from "react";
import { Button, Form, FormGroup, Col, Input } from "reactstrap";
import "./login.css";

const Login = props => {
  return (
    <React.Fragment>
      <div>
        <div className="card-border" style={{ borderRadius: "50px" }}>
          <div className="title card-title">Login</div>
          <Form>
            <FormGroup row>
              <Col sm={12}>
                <Input
                  className="card-border input-style input-bg-style"
                  bsSize="lg"
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Email or Username"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={12}>
                <Input
                  className="card-border input-style input-bg-style"
                  // style={{ backgroundColor: "#f8f9fa" }}
                  bsSize="lg"
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Password"
                />
              </Col>
            </FormGroup>
            <p className="form-text step-form-text">Forgot your password?</p>
            <div className="row-btns-comtainer">
              <Button
                className="step-btn-form"
                style={{
                  backgroundColor: "#EBC010",
                  borderColor: "#EBC010",
                  color: "#0e0d0d",
                  borderRadius: "5rem",
                  display: "block"
                }}
              >
                Login{" "}
              </Button>
              <Button
                className="step-btn-form"
                style={{
                  backgroundColor: "#0e0d0d",
                  borderRadius: "5rem",
                  display: "block"
                }}
              >
                Sign Up{" "}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
