import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import "./modal.css";

const ModalCreateTask = props => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [state, setState] = useState({
    jobTitle:"",
    proposals:0,
    timeDurationNumber:0,
    timeDurationTypes:"",
    description:"",
    userId:props.currentUser.id
  });
const handleChange=(e)=>{
  const { name, value } = e.target;
  setState(prevState => ({
    ...prevState,
    [name]: value,
    
  }));
}
const handleSubmit=(e)=>{
e.preventDefault();

}
  return (
    <div>
      <p onClick={toggle}> What's your Task ?</p>

      <Modal
        className="modalShap"
        isOpen={modal}
        toggle={toggle}
        style={{ marginLeft: "320px" }}
      >
        <ModalHeader
          className="headerModal"
          toggle={toggle}
          style={{ paddingLeft: "320px" }}
        >
          Create Job
        </ModalHeader>

        <ModalBody className="bodyModal">
          <div>
            <img
              src="./img/profilephoto.png"
              alt="userimg"
              style={{
                width: "10%",
                borderRadius: "50%",
                marginRight: "20px"
              }}
            />
            <a>
              {props.currentUser.firstName}
              {props.currentUser.lastName}
            </a>
          </div>
          <div style={{ marginLeft: "60px", marginTop: "20px" }}>
            <Form style={{ width: "100%" }}>
              <FormGroup row>
                <Label for="jobTitle">Job Title &nbsp;&nbsp;&nbsp;:</Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="jobTitle"
                    
                    placeholder="write task title "
                    onChange={handleChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="Proposals">Proposals &nbsp;&nbsp;:</Label>
                <Col sm={4}>
                  <Input
                    type="number"
                    name="proposals"
                    id="Proposals"
                    placeholder="Proposals num "
                    min="1"
                    max="20"
                    onChange={handleChange}
                  />
                </Col>
                <Label for="Time">Task Duration:</Label>
                <Col sm={2}>
                  <Input
                    type="number"
                    name="timeDurationNumber"
                    id="Time"
                    // value="0"
                    min="1"
                    onChange={handleChange}
                  ></Input>
                </Col>
                <Col style={{ paddingRight: "28px" }}>
                  <Input
                    type="select"
                    name="timeDurationType"
                    id="exampleSelect"
                     onChange={handleChange}
                  >
                    {props.timeDurationTypes.map(item => (
                      <option key={item.id} value={item.id}>
                        {item.durationType}
                      </option>
                    ))}
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="Description">Description :</Label>
                <Col sm={10}>
                  <Input type="textarea" name="description" id="Description"
                  onChange={handleChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleFile">File /Image :</Label>
                <Col sm={10}>
                  <Input type="file" name="file" id="exampleFile"
                  onChange={handleChange} />
                </Col>
              </FormGroup>
            </Form>
          </div>
        </ModalBody>
        <ModalFooter
          className=" bodyModal"
          style={{ backgroundColor: "white" }}
        >
          <Button
            className=" mr-0 cancelModal"
            onClick={toggle}
            style={{ color: "#ebc010", backgroundColor: "#494848" }}
          >
            Cancel
          </Button>
          <Button
            className=" ml-2 mr-1 addModal"
            onClick={toggle}
            style={{ color: "#ebc010", backgroundColor: "#494848" }}
          >
            Add
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
const mapStateToProps = reduxState => {
  return {
    currentUser: reduxState.Users.currentUser,
    timeDurationTypes: reduxState.Users.timeDurationTypes
  };
};
export default connect(mapStateToProps)(ModalCreateTask);
