import React from 'react';
import './Messages.css'


const Messages = () => {
    return (
        <div>
            <p>sam</p>
            <div className="msg-container left animate__animated animate__bounce" >
                hello world ,this is message testing
            </div>
            <p className="right">you</p>
            <div className="msg-container right">
                hello world ,this is message testing
            </div>
        </div>
    );
};




export default Messages;
