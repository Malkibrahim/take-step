import React, { Component } from 'react';

import  './createTask.css';
class  CreateTask extends Component {
    state = {  }
    render() { 
        return (
          
            <div className="post-container">
              <div className="post-top">
                <h6>Create Task</h6>
              </div>
              <div className="post-middle">
                <p> What's your Task ?</p>
              </div>
              <div className="post-line"></div>
              <div className="post-bottom">
              <div className="post-bottom-camera">
              <i class="fas fa-camera" style={{fontSize:"30px",marginRight:"10px"}}></i>
                   
                  
                </div>
                <div className="post-bottom-file">
                <i class="fas fa-file-alt" style={{fontSize:"30px"}}></i>
                </div>
           
              </div>
             
            </div>
          );
    }
}
 
export default CreateTask;

