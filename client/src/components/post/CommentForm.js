import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { addComment } from "../../actions/post";

const CommentForm = ({ postId, addComment }) => {

  const [text, setText] = useState("");

  return (
    <div className="p-3 my-3 shadow-lg rounded border border-success color">
      <div className="py-2 border border-success rounded">
        <h4 className="text-center">Leave a Comment</h4>
      </div>

      <div className="text-center my-3">
        <form
          onSubmit={e => {
            e.preventDefault();
            addComment(postId, { text });
            setText("");
          }}
        >
          <textarea
            name="text"
            rows="5"
            placeholder="Create a post"
            value={text}
            onChange={e => setText(e.target.value)}
            required
            className="rounded p-2 my-2 font-weight-bold border border-success"
            style={{
              letterSpacing: "2px",
              outline: "none",
              width: "90%"
            }}
          ></textarea>
          <br />
          <input
            type="submit"
            className="btn btn-outline-success my-2 px-5" value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(null, { addComment })(CommentForm);
