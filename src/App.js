import React from "react";
import { Container, Row, Col } from "reactstrap";
// import logo from "./logo.svg";
import "./App.css";
// import Example from "./Components/Card/InProgressTaskCard/inprogresstaskcard";

import VolunteerProfile from "./Pages/VolunteerProfile/volunteerprofile";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import OurLogin from "./Pages/LoginPage/ourLogin";
import Login from "./Pages/LoginPage/login";
import SignUp from "./Pages/SignUpPage/sign-up";
import Portflio from "./Components/Portflio/Portflio";
import OwnerProfileCard from "./Components/Card/BusinessOwnerProfileCard/OwnerProfileCard";
import NotificationDropdown from "./Components/Dropdown/NotificationDropdown";
import HomePage from "./Pages/HomePage/Home";

function App() {
  return (
    <div>
      {/* <Welcome></Welcome> */}
      {/* <Example /> */}
      {/* <Login></Login> */}
      {/* <SignUp /> */}
      {/* <Portflio /> */}
      {/* <OwnerProfileCard /> */}
      {/* <NotificationDropdown /> */}
      {/* <OurLogin></OurLogin> */}
      <HomePage></HomePage>
      {/* <WelcomePage></WelcomePage> */}
      {/* <HowITWork></HowITWork> */}
      {/* <Example /> */}
      {/* <HowItWorkCard></HowItWorkCard> */}
      {/* <VolunteerProfile></VolunteerProfile> */}
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
