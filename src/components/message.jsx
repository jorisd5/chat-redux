import React from 'react';
import { emojify } from 'react-emojione';

const Message = (props) => {
  const { createdAt, author, content } = props.message;
  const time = new Date(createdAt).toLocaleTimeString();
  return (
    <div className="message-container">
      <i className="author">
        <span>{author}</span>
        <small>{time}</small>
      </i>
      <p>{emojify(content)}</p>
    </div>
  );
};
export default Message;
