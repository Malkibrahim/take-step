import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Layout/Header/header";
import WelcomeNavBar from "./Layout/Navbar/navbar";
import ModalPost from "./Components/Modal/AddPostModel/modal";
import AddSkill from "./Components/Modal/AddSkillModal/AddSkillModal";
import Post from "./Components/post/post";
import Login from "./Pages/LoginPage/login";
import Portflio from "./Components/Portflio/Portflio";
import OwnerProfileCard from "./Components/Card/BusinessOwnerProfileCard/OwnerProfileCard";
// import EducationSection from './Components/EducationSection/EducationSection';
// import CreateTask from './Pages/HomePage/CreateTaskSection/createTask';
ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
  {/* <WelcomeNavBar /> */}
  {/* <Header/> */}
  {/* <AddSkill/> */}
  {/* <ModalPost/> */}
  {/* <Post/>  */}
=======
    {/* <WelcomeNavBar />
  <Header/>
  <AddSkill/>
  <ModalPost/>
  <Post/> */}
>>>>>>> be1849a83e3abad32f29c4e8839d58b765947e59

    {/* <App /> */}
    {/* <App /> */}

    {/* <CreateTask  /> */}
    {/* <WelcomeNavBar />
    <ModalPost />
    <Post/> */}
    {/* <EducationSection />  */}

    {/* <App /> */}
    {/* <App /> */}
    {/* <Header/> */}

    {/* <Login /> */}
    {/* <Portflio /> */}
    {/* <OwnerProfileCard /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
