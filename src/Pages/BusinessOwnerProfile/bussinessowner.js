import React, { useEffect } from "react";
import { getOwnerUserById } from "../../Redux/actions/ownerInfoActionCreator";
import { useDispatch } from "react-redux";

import { Toast, ToastBody, ToastHeader, Container, Row, Col } from "reactstrap";
import InsideNav from "../../Layout/Navbar/insidenav";
import PersonalInfo from "../../Components/UpperSectionProfile/upperSection-Profile-Info";

import TaskProfile from "../../Components/Task/taskprofile";
import SubmittedTask from "../HomePage/SubmittedTaskSection/submittedTask";
const BussinessOwnerProfile = props => {
  const dispatch = useDispatch();
  const userId = props.match.params.id;
  // console.log(props);
  console.log(userId);
  useEffect(() => {
    dispatch(getOwnerUserById(userId));
  }, [dispatch]);
  return (
    <div>
      <InsideNav></InsideNav>
      <PersonalInfo></PersonalInfo>
      <Container>
        <Row>
          <Col>
            <div className="d-inline-block rounded mt-4 ">
              <Toast style={{ maxWidth: "837px" }}>
                <ToastHeader
                  className="p-3 text-warning"
                  style={{ backgroundColor: "#494848" }}
                >
                  My Jobs
                </ToastHeader>
                <ToastBody className="p-0">
                  <TaskProfile></TaskProfile>
                  <TaskProfile></TaskProfile>
                </ToastBody>
              </Toast>
            </div>
          </Col>
          <Col>
            <SubmittedTask></SubmittedTask>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BussinessOwnerProfile;
