import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import "./upperSection-Profile-Info.css";
// import profilephoto from "./assets/profilephoto.png";
// import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
const PersonalInfo = props => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg="9">
            <div className="first-profile-info">
              <div class="edit-icon">
                <i class="fas fa-pencil-alt"></i>
              </div>
              <div class="upper-info">
                <div className="profile-photo">
                  <img src="./img/profilephoto.png" className="img" />
                </div>

                <div className="username-location">
                  <span>User Name</span>
                  <br />
                  <span className="map-icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </span>
                  <span className="location">Location</span>
                </div>
              </div>

              <div className="job">
                <p className="job-title">Job title</p>
                <p className="job-description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <div className="col-profile-setting">
              <div className="profile-setting">
                <p>Profile Setting</p>
              </div>
              <div className="loctaion">
                <h6>Location</h6>
                <p>Cairo</p>
              </div>
              <div className="languages">
                <h6>languages</h6>
                <p>English</p>
              </div>
              <div className="profile-link">
                <p>ProfileLink</p>
              </div>
              <div className="link">
                <p>http://www.nameproject.com</p>
              </div>
              <div className="copylink">
                <p>CopyLink</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PersonalInfo;