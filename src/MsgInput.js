import React, { useState } from "react";

function MsgInput({
  size,
  onInput,
}) {
  const [text, setText] = useState('');
  const getRandomUserNumber = () => {
    return Math.floor((Math.random() * size) + 1) || 1;
  }
  return (
    <div className="app-msg-input">
      <div className="app-msg-input-box">
        <div className="app-msg-input-box-text">
          <input
            type="text"
            placeholder="Say something..."
            value={text}
            onChange={({ target: { value } }) => setText(value)}
            onKeyPress={({ key }) => {
              if (key === 'Enter') {
                onInput({ userId: getRandomUserNumber(), text, time: '10:33 PM' });
                setText('');
              }
            }}
          />
        </div>
      </div>
      <div className="app-msg-input-icon">
        <div className="app-msg-picker">
          <i className="material-icons" size="24">sentiment_very_satisfied</i>
        </div>
        <div className="app-msg-input-send">
          <p className="app-msg-input-send-p">0/200</p>
          <i
            className="material-icons"
            onClick={() => {
              onInput({ userId: getRandomUserNumber(), text, time: '10:33 PM' });
              setText('');
            }}
          >send</i>
        </div>
      </div>
    </div>
  );
}

export default MsgInput;