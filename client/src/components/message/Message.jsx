import React from "react";
import "./message.css";
import { format } from "timeago.js";

export default function Message({ message, own }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className={own ? "message own" : "message"}>
      {message.text && (
        <div className="messageTop">
          <img
            src={message.profilePicture || PF + "person/noAvatar.png"}
            alt=""
            className="messageImg"
          />
          <div className="messageDialogue">
            <div className="messageText">
              {message.text}
              <div className="messageBottom">{format(message.createdAt)}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
