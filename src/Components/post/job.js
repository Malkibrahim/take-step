import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getAllComments } from "../../Redux/actions/commentActionCreator";
import { addComments } from "../../Redux/actions/commentActionCreator";
import {
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./post.css";
import { getUserById } from "../../Redux/actions/businessOwnerActionCreator";
const Job = props => {
  const { currentUser, jobs, bussinessOwnerUsers } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const dispatch = useDispatch();
  useEffect(() => {
    let userIds = jobs.map(job => job.userId);
    userIds = [...new Set(userIds)];
    userIds.forEach(userId => dispatch(getUserById(userId)));
  }, [jobs, dispatch]);
  //  const user = bussinessOwnerUsers.find(u => u.id === job.userId);
  return (
    <>
      <div className=" pl-5 pt-3 pr-5 clearfix">
        <div style={{ display: "flex", "justify-content": "space-between" }}>
          <div>
            <img className="post-img  rounded-circle" src="./img/people.png" />
            <div className="username-post ml-3">
              <div className="mt-3 postOwnerNameStyle">
                {props.user && props.user.firstName}
                &nbsp;&nbsp;
                {props.user && props.user.lastName}
              </div>
              <div className="ml-0 postOwnerNameStyle">
                {props.user && props.user.jobTitle}
              </div>
            </div>
          </div>

          <Dropdown
            isOpen={dropdownOpen}
            toggle={toggle}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <DropdownToggle style={{ background: "none", border: "none" }}>
              <div className="post-ortions">...</div>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Edit</DropdownItem>
              <DropdownItem>Delete</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>

      <div
        className=" ml-5  clearfix mt-3 d-flex"
        style={{ justifyContent: "space-between" }}
      >
        <div className=" float-left">
          <span className=" font-weight-bold">Time : </span>
          <span className="">
            {props.job && props.job.timeDurationNumber}&nbsp;&nbsp;
            {props.job && props.job.timeDurationType}
          </span>
        </div>
        <div className=" ml-5 float-left">
          <span className="font-weight-bold ">Proposals :</span>
          <span className="">&nbsp;{props.job && props.job.proposals}</span>
        </div>
        <Button className=" applyBtn float-right">Apply</Button>
      </div>
      <div className="postBody pt-3 pr-5 pl-5  m-0">
        <p className="text-justify">{props.job && props.job.description}</p>
      </div>

      <div className=" reactToPost clearfix">
        {/* <div className=" ml-5 float-left">
                <span className="mt-2 mr-2">4</span>
                <span>
                  <i class=" mb-3 fas fa-thumbs-up"></i>
                </span>
                {/* <img  className="mb-3" src="./img/smallLike.png"/> */}
        {/* </div>  */}
        <div className=" ml-5 float-left">
          <span className="mt-2 mr-2">5</span>
          <span>
            <i class=" mb-3 fas fa-comment-alt"></i>
          </span>
          {/* <img className=" d-inline mb-2"  src="./img/smallcomment.png"/> */}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = reduxState => {
  return {
    currentUser: reduxState.Users.currentUser,
    jobs: reduxState.Users.jobs,
    bussinessOwnerUsers: reduxState.Users.bussinessOwnerUsers
  };
};
export default connect(mapStateToProps)(Job);
