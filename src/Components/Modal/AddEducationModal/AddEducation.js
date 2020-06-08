import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
// import addEducation from "../../../Redux/actions/educationActionCreator";
import { addEducation } from "../../../Redux/actions/educationActionCreator";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import "./AddEducation.css";

const AddEducation = props => {
  const initialFieldValues = {
    university: "",
    degree: "",
    graduationYear: "",
    grade: ""
  };
  let [values, setValues] = useState(initialFieldValues);
  const handleInputChange = e => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    console.log("kkkkkkkkkkkk");

    const newEdu = {
      university: values.university,
      degree: values.degree,
      graduationYear: values.graduationYear,
      grade: values.grade
    };

    const response = await axios.post(
      "https://take-a-step-9ca1d.firebaseio.com/educationSection.json",
      newEdu
    );
    const { data } = response;
    newEdu.id = data.name;
    if (response.status === 200) {
      props.dispatch(addEducation(newEdu));
      // toggle();
      setValues({
        university: "",
        degree: "",
        graduationYear: "",
        grade: ""
      });
    }
  };

  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const { dispatch } = props;

  return (
    <div>
      <Button className="bg-skill rounded-circle w-2 h-2" onClick={toggle}>
        <i class="d-inline-block p-10 fas fa-plus text-warning"></i>
        {/* <i class=" d-inline-block p-10 fas fa-pen text-warning"></i> */}
      </Button>
      <Modal
        style={{ width: "720px" }}
        className="modal-structure"
        isOpen={modal}
        toggle={toggle}
        className={className}
        style={{ marginLeft: "320px" }}
      >
        <ModalHeader
          className="modal-structure-header"
          toggle={toggle}
          style={{ paddingLeft: "310px" }}
        >
          Add Education
        </ModalHeader>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <ModalBody style={{ width: "720px", backgroundColor: "#f2f2f2" }}>
            <FormGroup>
              <Label className="lab-size" for="exampleEmail">
                University
              </Label>
              <Input
                className="input-border"
                type="select"
                name="university"
                placeholder="Ex: oxford university"
                value={values.university}
                name="university"
                onChange={handleInputChange}
              >
                <option>Harvard University</option>
                <option>Yale University</option>
                <option>Northwestern University</option>
                <option>Tsinghua University</option>

                <option>Monash University</option>
                <option>Al-Azhar University</option>
                <option>Massachusetts Institute of Technology (MIT)</option>
                <option>Stanford University</option>

                <option>University of Oxford</option>
                <option>EPFL</option>
                <option>The University of Tokyo</option>
                <option>Duke University</option>
                <option>Cornell University</option>
                <option>University of British Columbia</option>
                <option>UCL</option>
                <option>The University of Tokyo</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Degree</Label>
              <Input
                className="input-border"
                type="degree"
                placeholder="Ex: Bachelor's"
                value={values.degree}
                name="degree"
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleDate">Graduation Date</Label>
              <Input
                className="input-border"
                type="date"
                // name="date"
                id="exampleDate"
                placeholder="date placeholder"
                value={values.graduationYear}
                name="graduationYear"
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="gradeSelect">Grade</Label>
              <Input
                className="input-border"
                type="select"
                name="select"
                id="gradeSelect"
                value={values.grade}
                name="grade"
                onChange={handleInputChange}
              >
                <option>Excellent</option>
                <option>Very good</option>
                <option>Good</option>
                <option>Fair</option>
              </Input>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={toggle}
              style={{
                backgroundColor: "white",
                borderRadius: "20px",
                border: "1px solid #EBC010",
                color: "black",
                width: "100px"
              }}
            >
              Cancel
            </Button>{" "}
            <Button
              onClick={toggle}
              type="submit"
              color="secondary"
              style={{
                backgroundColor: "#494848",
                borderRadius: "20px",
                color: "#EBC010",
                width: "100px"
              }}

              // onClick={handleSubmit}
            >
              Add
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return { dispatch: dispatch };
};
export default connect(null, mapDispatchToProps)(AddEducation);
