import axios from "axios";
import { GET_TASK_BY_ID, ADD_NEW_TASK, GET_VOL_TASKS,ADD_SUBMITTASK_LINK,GET_ALLSUBMITTED_TASKS } from "../actionTypes";

export const AddTasksToVol = (volunteerId, taskId) => async (dispatch) => {
  // debugger;
  // console.log("///////", newTask);
  const response = await axios.get(
    `https://take-a-step-9ca1d.firebaseio.com/jobs/${taskId}.json`
  );
  const newTask = response.data;
  newTask.status = "inprogress";

  console.log(newTask);
  const taskRes = await axios.post(
    `https://take-a-step-9ca1d.firebaseio.com/Inprogress/${volunteerId}.json`,
    newTask
  );
  newTask.id = taskRes.data.name;

  dispatch(AddTask(newTask));
};

const AddTask = (task) => {
  return { type: ADD_NEW_TASK, payload: task };
};

export const getTasksByVolId = (id) => (dispatch) => {
  // debugger;
  axios
    .get(`https://take-a-step-9ca1d.firebaseio.com/Inprogress/${id}.json`)
    .then((response) => {
      const { data } = response;
      //   newTask.id = data.name;

      console.log(data);
      dispatch(getVolTasks(data));
    })
    .catch(console.log("error"));
};

const getVolTasks = (task) => {
  return { type: GET_VOL_TASKS, payload: task };
};

///////////////////////Upload Link here///////////////////////////////
export const addSubmitTaskLink = task => {
  return { type: ADD_SUBMITTASK_LINK, payload: task };
};
/////////////////////Get finished submitted tasks ///////////////////////////
  export const getAllSubmitTasks = task => {
  return { type: GET_ALLSUBMITTED_TASKS, payload: task };

};
//------------------------------------------------------------------------///
