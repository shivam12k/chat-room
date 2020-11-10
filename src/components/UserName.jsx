import React, { Component } from "react";
import "./UserName.css";
class UserName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  username(e) {
    this.setState({ name: e.target.value });
    
  }

//   chatRoom(e) {
//     e.preventDefault();
//     console.log("clicked");
   
//   }

  render() {
    return (
      <div className="wrapper">
        <div className="chatbox center">
          <div className="heading">
            <h1 className="glow">Welcome to chat room</h1>
          </div>
          <form action="#">
            <div>
              <input
                className="name-in"
                type={Text}
                placeholder="Enter your name"
                onChange={(event) => this.username(event)}
              />

              <button
                className="btn"
                type="submit"
                onClick={()=>this.props.Router(this.state.name)}>
                Enter
              </button>

            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UserName;
