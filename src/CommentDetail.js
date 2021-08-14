import React from "react";

const CommentDetail = ({ author, timestamp, text, imgUrl }) => {
  return (
    <>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={imgUrl} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {author}
          </a>
          <div className="metadata">
            <span className="date">{timestamp}</span>
          </div>
          <div className="text">{text}</div>
        </div>
      </div>
    </>
  );
};

export default CommentDetail;
