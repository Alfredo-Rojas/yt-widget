import React, { useEffect, useRef, useState } from "react";
import UserAvatar from 'react-user-avatar';

import './MsgShow.css';

function MsgShow({
    users,
    msgData,
}) {
    const [showAnchor, setShowAnchor] = useState(false);
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        setShowAnchor(false);
    }
    useEffect(scrollToBottom, [msgData]);

    const updateAnchorState = ((msgShowElement) => {
        const { scrollHeight, scrollTop, clientHeight } = msgShowElement
            ? msgShowElement
            : { scrollHeight: 400, scrollTop: 0, clientHeight: 400 };
        const scrollRange = scrollHeight - clientHeight;
        if (scrollRange > 0) {
            if (scrollTop / scrollRange < 0.95) {
                setShowAnchor(true);
            } else {
                setShowAnchor(false);
            }
        }
    });

    return (
        <div className="app-msg-show-wrapper">
            <div
                id="app-msg-show-id"
                className="app-msg-show"
                onWheel={() => {
                    const msgShowElement = document.getElementById('app-msg-show-id');
                    if (!msgShowElement) return;
                    updateAnchorState(msgShowElement);
                }}
            >
                {msgData.map(({ userId, text, time }, index) => {
                    const userName = users.find(user => user.userId === userId).userName;
                    return (
                        <div className="app-msg-show-item" key={index}>
                            <div className="app-msg-show-item-avatar">
                                <UserAvatar size="24" name={userName} />
                            </div>
                            <div className="app-msg-show-item-text">
                                <span className="app-msg-show-item-time">{time}</span>
                                <span className="app-msg-show-item-username">{userName}</span>
                                <p className="app-msg-show-item-p">{text}</p>
                            </div>
                        </div>
                    );
                })}
                <div ref={messagesEndRef} />
            </div>
            <div
                className="app-msg-anchor"
                style={{ display: showAnchor ? 'block' : 'none' }}
                onClick={scrollToBottom}
            ><i className="material-icons arrow-down-icon">arrow_downward</i></div>
        </div>
    );
}

export default MsgShow;