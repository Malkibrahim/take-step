import React, { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import {
  getAllCountries,
  getAllUsers
} from "../../Redux/actions/businessOwnerActionCreator";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Container,
  Col,
  Row
} from "reactstrap";
import { Link } from "react-router-dom";
import "./signup.css";
import InsideNav from "../../Layout/Navbar/insidenav";
import { Signup } from "../../Redux/actions/businessOwnerActionCreator";
const SignUp = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    country:"-M8q-QJgtfbIqI-VZP47",
    isBussines: false,
    paymentData: {
      cardNum: 0,
      phone: 0,
      total: 0,
      secretNum:0
    }
  });
  
  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
        
        [name]: value
      
      
    })); 
  };
  const handlePaymentChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,paymentData:{
        ...prevState.paymentData,
        [name]: value
      }
      
    })); 
  };
  const  handleValidSubmit=(event,values) =>{
    console.log("values",values)
    event.preventDefault();
    console.log("state",state)
    dispatch(Signup(state));
 
  }

  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getAllUsers());
  }, [dispatch]);




  const handleClick = e => {
    // console.log(e.target.textContent);
    if (e.target.textContent === "Bussiness Owner") {
      setState(prevState => ({
        ...prevState,
        isBussines: true
      }));
      // console.log(state.isBussines);
    } else {
      setState(prevState => ({
        ...prevState,
        isBussines: false
      }));
      // console.log(state.isBussines);
    }
  };

 
  const handleSubmit = (event) => {
    event.preventDefault();


    dispatch(Signup(state));
    // history.push("/logIn");
    // console.log(state.email);
    // console.log(state.password);
    // console.log(state.firstName);
    // console.log(state.lastName);
  };
 
  return (
    <>
      <InsideNav></InsideNav>
      <Container>
        <AvForm 
        onValidSubmit={handleValidSubmit}
          // onSubmit={handleSubmit}
          className="border-warning  p-5"
          style={{
            width: "50%",
            margin: "110px auto",
            border: "1px solid",
            borderRadius: "1.5rem"
          }}
        >
          <h3 className="text-center m-3 mb-5"> Sign Up</h3>
          <FormGroup className="input-icons">
            <i class="fa fa-envelope icon text-warning"></i>
            <AvField
             errorMessage="Invalid email"
             validate={{email: true}}
          
              onChange={handleChange}
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email"
              className="input-field"
              style={{ paddingLeft: "3rem" }}
            />
          </FormGroup>{" "}
          <Row>
            <Col md={6}>
              <FormGroup className="input-icons">
                <i class="fas fa-user icon text-warning"></i>
                <AvField
                 errorMessage="Invalid First-name" validate={{
                  required: {value: true},
                  pattern: {value: '^[A-Za-z]+$'},
                  minLength: {value: 2},
                  maxLength: {value: 16}
               }}

                  onChange={handleChange}
                  type="text"
                  name="firstName"
                  placeholder="FirsttName"
                  style={{ paddingLeft: "3rem" }}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="input-icons">
                <i class="fas fa-user icon text-warning"></i>
                <AvField
                 errorMessage="Invalid Last-name" validate={{
                  required: {value: true},
                  pattern: {value: '^[A-Za-z]+$'},
                  minLength: {value: 2},
                  maxLength: {value: 16}
               }}
                  onChange={handleChange}
                  type="text"
                  name="lastName"
                  placeholder="LastName"
                  style={{ paddingLeft: "3rem" }}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup className="input-icons">
            <i class="fas fa-lock icon text-warning"></i>
            <AvField
                 errorMessage="Invalid password must be 4  numbers/charchters at least " validate={{
                  required: {value: true},
                  pattern: {value: '^[A-Za-z0-9]+$'},
                  minLength: {value:4}
               }}
            ///^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
              onChange={handleChange}
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Create a Password"
              style={{ paddingLeft: "3rem" }}
            />
          </FormGroup>{" "}
          <FormGroup row>
            <Col>
              <Input
                type="select"
                name="country"
                id="exampleSelect"
                onChange={handleChange}
              >
                
                {props.countries.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.en}
                  </option>
                ))}
              </Input>
            </Col>
          </FormGroup>
          <p className="text-center">I want to work as a :</p>
          <Button
            onClick={handleClick}
            className="  border-warning text-dark "
            style={{
              marginLeft: "4rem ",
              backgroundColor: "#F2F2F2",
              padding: ".7rem 1rem"
            }}
          >
            Bussiness Owner
          </Button>
          <Button
            onClick={handleClick}
            className="  border-warning text-dark"
            style={{
              margin: "20px ",

              padding: ".7rem 2rem"
            }}
          >
            Volunteer
          </Button>
          {state.isBussines && (
            <>
              <div style={{ display: "inline-block", "text-align": "center" }}>
                <img width="20%" className="mr-3" src="./img/visa.png" />
                <span>Or</span>
                <img width="20%" className="ml-3" src="./img/mastercard.png" />
              </div>
              <FormGroup className="input-icons">
                <i class="far fa-credit-card icon text-primary"></i>
                <AvField
                 errorMessage="Invalid  card num  must be 12 number " validate={{
                  required: {value: true},
                
                  minLength: {value:12},
                  maxLength:{value:12}
               }}
               min="1"
            
                  onChange={handlePaymentChange}
                  type="Number"
                  name="cardNum"
                  id="exampleEmail"
                  placeholder="Card-num"
                  className="input-field"
                  style={{ paddingLeft: "3rem" }}
                />
              </FormGroup>
            
              <FormGroup className="input-icons">
                <i class="fa fa-envelope icon text-warning"></i>
                <AvField
                 errorMessage="Invalid secret num must be 3  numbers " validate={{
                  required: {value: true},
                 
                  minLength: {value:3},
                  maxLength:{value:4}
               }}
               min="0"
               onChange={handlePaymentChange}
                  type="Number"
                  name="secretNum"
                  id="exampleEmail"
                  placeholder="Secret-num"
                  className="input-field"
                  style={{ paddingLeft: "3rem" }}
                />
              </FormGroup>
            
              <FormGroup className="input-icons">
                <i class="fas fa-phone-alt icon text-secondary"></i>

                <AvField
                 errorMessage="Invalid phone number must be 12 number " validate={{
                  required: {value: true},
                
                  minLength: {value:12},
                  maxlength:{value:13}
               }}
         min="0"
                  onChange={handlePaymentChange}
                  type="Number"
                   name="phone"
                  id="phone"
                  placeholder="Phone"
                  className="input-field"
                  style={{ paddingLeft: "3rem" }}
                />
              </FormGroup>
                
              <FormGroup className="input-icons">
                <i class="fas fa-money-bill-wave icon text-success"></i>

                <Input
                  onChange={handlePaymentChange}
                  type="Number"
                  name="total"
                  min="1"
                  id="total"
                  placeholder="Total"
                  className="input-field"
                  style={{ paddingLeft: "3rem" }}
                />
              </FormGroup> 
            </>
          )}
          <Button
            className="d-block bg-dark border-dark"
            style={{
              margin: "20px auto",
              borderRadius: "1.5rem",
              padding: ".7rem 2.5rem"
            }}
          >
            Create new Account
          </Button>
          <div className="text-center">
            <span className="text-center">Already have an account? </span>
            <Link to="/logIn" className="d-inline-block p-1">
              Log in !
            </Link>
          </div>
        </AvForm>
        {/* {this.state.values && <div>
          <h5>Submission values</h5>
          Values: <pre>{JSON.stringify(this.state.values, null, 2)}</pre>
        </div>} */}
      </Container>
    </>
  );
};
const mapStateToProps = reduxState => {
  return {
    users: reduxState.bussinessOwnerUsers.users,
    countries: reduxState.bussinessOwnerUsers.countries
    // mystate: reduxState.bussinessOwnerUsers
  };
};
export default connect(mapStateToProps)(SignUp);
