import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import WelcomeNavBar from "./Layout/Navbar/navbar";
import ModalPost from "./Components/Modal/AddPostModel/modal";
import Post from './Components/post/post';
 import SubscribeCardsSection from './Pages/WelcomePage/SubscribeCardSections/subscribeCardSection';
ReactDOM.render(
  <React.StrictMode>
  <WelcomeNavBar />
    <ModalPost />
    <Post/>
<SubscribeCardsSection />

    {/* <App /> */}
    <App />
    {/* <Header/> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
