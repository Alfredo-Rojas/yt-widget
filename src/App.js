import React, { useState } from "react";
import MsgInput from './MsgInput';
import MsgShow from './MsgShow';
import TopBar from './TopBar';

import "./App.css";

const users = [
  { userId: 1, userName: 'User James', avatarLink: '' },
  { userId: 2, userName: 'User John', avatarLink: '' },
  { userId: 3, userName: 'User Nick', avatarLink: '' },
  { userId: 4, userName: 'User Dom', avatarLink: '' },
  { userId: 5, userName: 'User Cherry', avatarLink: '' },
  { userId: 6, userName: 'User Rol', avatarLink: '' },
];
const messages = [
  { userId: 1, text: 'message1', time: '7:43 AM' },
  { userId: 3, text: 'message2', time: '7:44 AM' },
  { userId: 3, text: 'message232', time: '7:45 AM' },
  { userId: 1, text: 'message efwefw', time: '7:46 AM' },
  { userId: 2, text: 'fwefowefwef', time: '7:47 AM' },
];

function App() {
  const [show, setShow] = useState(true);
  const [msgData, setMsgData] = useState(messages);

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m8 offset-m2 l4 offset-l4 widget-container">
          {show && <div>
            <TopBar />
            <MsgShow
              users={users}
              msgData={msgData}
            />
            <MsgInput
              size={users.length}
              onInput={(msg) => setMsgData([...msgData, msg])}
            />
          </div>}
          {show && <div className="hr" />}
          <div className="widget-hider" onClick={() => setShow(!show)}>
            {show ? "Hide Chat" : "Show Chat"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
