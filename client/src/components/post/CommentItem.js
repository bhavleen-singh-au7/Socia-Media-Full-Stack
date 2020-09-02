import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteComment } from "../../actions/post";

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment
}) => {
  return (
    <div className="bg-light rounded border border-primary p-3 my-3">
      <Link to="/dashboard">
        <img
          className="rounded-circle shadow mx-4"
          style={{
            float: "left",
            height: "100px",
            width: "100px"
          }}
          src={avatar}
          alt="user-img"
        />
      </Link>

      <div>
        <h4>{name}</h4>
        <p className="my-1">{text}</p>
        <p>Posted on
        <Moment format="DD/MM/YYY">{date}</Moment>
        </p>
        {!auth.loading && user === auth.user._id && (
          <button onClick={e => deleteComment(postId, _id)}
            className="btn btn-danger">
            <i className="fa fa-times"></i>
          </button>
        )}
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
