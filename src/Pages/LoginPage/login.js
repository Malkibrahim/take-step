import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import "./login.css";
import InsideNav from "../../Layout/Navbar/insidenav";
const Login = props => {
  const [state, setState] = useState({
    email: "",
    password: ""
  });
  // const [statePassword, setStatePassword] = useState("");
  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));

    // setStateEmail({
    //   [e.target.id]: e.target.value
    // });
    // setStatePassword({
    //   [e.target.id]: e.target.value
    // });
  };
  // const handleSubmit = e => {
  //   e.preventDefault();

  //   console.log(state.email);
  //   console.log(state.password);
  // };

  const  handleValidSubmit=(event,values) =>{
    console.log("click login ",values)
     event.preventDefault();
    //console.log("state",state)
    // dispatch(Signup(state));
 
  }

  return (
    <>
      <InsideNav></InsideNav>
      <Container>
       <AvForm 
        onValidSubmit={handleValidSubmit}
          className="border-warning  p-5"
          style={{
            width: "50%",
            margin: "110px auto",
            border: "1px solid",
            borderRadius: "1.5rem"
          }}
        >
          <h3 className="text-center m-3 mb-5"> Login</h3>
          <FormGroup className="input-icons">
            <i class="fa fa-envelope icon text-warning"></i>
           <AvField
             errorMessage="Invalid email"
             validate={{email: true}}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="input-field"
              onChange={handleChange}
              style={{ paddingLeft: "3rem" }}
            />
          </FormGroup>{" "}
          <FormGroup className="input-icons">
            <i class="fas fa-lock icon text-warning"></i>
            <AvField
               errorMessage="Invalid password must be 4  numbers/charchters at least " validate={{
                required: {value: true},
                pattern: {value: '^[A-Za-z0-9]+$'},
                minLength: {value:4}
             }}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              style={{ paddingLeft: "3rem" }}
            />
            <p className="m-3">Forgot your Password ?</p>
          </FormGroup>{" "}
          <Button
            className="d-block bg-warning border-warning  text-dark"
            style={{
              margin: "20px auto",
              borderRadius: "1.5rem",
              padding: ".7rem 5rem"
            }}
          >
            Login
          </Button>
          <Button
            className="d-block bg-dark border-dark"
            style={{
              margin: "20px auto",
              borderRadius: "1.5rem",
              padding: ".7rem 4.5rem"
            }}
          >
            Sign Up
          </Button>
        </AvForm >
      </Container>
    </>
  );
};

export default Login;
