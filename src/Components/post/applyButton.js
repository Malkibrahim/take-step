import React, { Component } from "react";

import { Button } from "reactstrap";
import axios from "axios";
import { connect } from "react-redux";
import { AddTasksToVol } from "./../../Redux/actions/InprogressActionCreator";
import { ADD_NEW_TASK } from "../../Redux/actionTypes";

class ApplyButton extends Component {
  state = {
    jobIds: [],
    applied: true,
    include: false,
  };

  fetchInpogData = async () => {
    // debugger;
    const user = localStorage.getItem("user");
    const volunteerId = JSON.parse(user).id;
    this.setState({ volunteerId });
    // debugger;
    await axios
      .get(
        `https://take-a-step-9ca1d.firebaseio.com/Inprogress/${volunteerId}.json`
      )
      .then((res) => {
        const inprog = res.data;
        if (inprog) {
          const inprogArray = Object.keys(inprog).map((key) => ({
            id: String(key),
            details: inprog[key],
          }));
          const jobIds = inprogArray.map((arr) => arr.details.id);
          console.log(jobIds);
          this.setState({ jobIds });
          // console.log("/////", this.state.jobIds);

          // console.log("Array os ids", inprogArray);

          // console.log("/////////////");
        }
      });
  };

  async componentDidMount() {
    await this.fetchInpogData();
  }
  handleClick = async (taskID) => {
    console.log(taskID);
    this.setState({ applied: false });
    // window.location.reload(true);
    this.props.job.status = "inprogress";

    // console.log(newTask);
    const taskRes = await axios.post(
      `https://take-a-step-9ca1d.firebaseio.com/Inprogress/${this.props.volunteerId}.json`,
      this.props.job
    );
    this.props.job.id = taskRes.data.name;

    console.log(this.props.job);
    this.props.addTask(this.props.job);
    await this.fetchInpogData();
    // if () {
    //   this.setState({ include: true });
    // }
  };
  render() {
    const { job, currentUser, handleClick, applied, jobs } = this.props;

    // console.log(this.state.jobIds);
    return !this.state.applied || this.state.jobIds.includes(job.id) ? (
      <Button
        style={{ backgroundColor: "#6c757d" }}
        disabled
        className=" applyBtn float-right"
        onClick={() => this.handleClick(job.id)}
      >
        Applied
      </Button>
    ) : (
      !currentUser.paymentData && (
        <Button
          className=" applyBtn float-right"
          onClick={() => this.handleClick(job.id)}
        >
          Apply
        </Button>
      )
    );
  }
}
const mapDispatchToprops = (dispatch) => {
  return {
    addTask: (job) => dispatch({ type: ADD_NEW_TASK, payload: job }),
  };
};
export default connect(null, mapDispatchToprops)(ApplyButton);
