import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import "./Chat.css";
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';


function Chat() {

    const [seed,setSeed]=useState("");
    const [input,setInput]=useState("");
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    },[]);

    const sendMessage=(e)=>{
        e.preventDefault();

        setInput("");
    }
    
    return (
        <div className="chat">
            <div className="chat__header">
            <Avatar  src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="chat__headerInfo">
                <h3>Room Name</h3>
                <p>Last seen at ...</p>
            </div>
            <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
            </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true &&"chat__reciever"}`}>
                <span className="chat__name">Samir</span>
                    Hey Guys
                <span className="chat__timestamp">3:53 AM</span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Send message" />
                    <button type="submit" onClick={sendMessage}>Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
