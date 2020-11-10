import React from 'react';
import './ChatBox.css';
import ChatInput from './ChatInput';
import Messages from './Messages';



const Chatbox = () => {
    return ( < div className = "wrapper" >
        <
        div className = "chatbox" >
        <
        Messages / >
        <
        ChatInput / >
        <
        /div> <
        /div>
    );
};




export default Chatbox;