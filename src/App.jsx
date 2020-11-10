import React from "react";
import Chatbox from "./components/Chatbox";
import Navbar from "./components/Navbar";
import "./App.css";
import UserName from "./components/UserName";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      route: "signin",
    };
  }
  handleEntry = (name) => {
    console.log(name);
    this.setState({ name });
    if (name.length != 0) {
      this.setState({ route: "chatRoom" });
    }else{
            window.alert("please enter your name first")
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        {this.state.route == "signin" ? (
          <UserName Router={this.handleEntry} />
        ) : (
          <Chatbox />
        )}
      </div>
    );
  }
}

export default App;
