import React from "react";
import { Component } from "react";
import "./ChatInput.css";
class ChatInput extends Component {
  
  constructor(){
      super()
      this.state={
          text:''
      }
  }
  texting=(e)=>{
        this.setState({text:e.target.value})
       
  }
  display=()=>{
    console.log(this.state.text)
  }
  
    render() {
    return (
      <div>
        <form action="#" id="send-container">
          <div className="chat">
            <input className="inp" 
            type={Text} 
            placeholder="Type a message"
            onChange={(e)=>this.texting(e)} />
        
            <button 
            onClick={this.display}
            className="button1"
             type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ChatInput;
