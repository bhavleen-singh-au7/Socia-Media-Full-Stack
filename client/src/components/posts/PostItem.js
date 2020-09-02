import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: {
    _id,
    text,
    name,
    avatar,
    user,
    likes,
    comments,
    date
  },
  showActions
}) => (
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
        <p>
          Posted on <Moment format="DD/MM/YYYY">{date}</Moment>
        </p>
        {showActions &&
          <Fragment>
            <button onClick={e => addLike(_id)} type="button" className="btn btn-light">
              <i className="fa fa-thumbs-up"></i>{"  "}
              <span>{likes.length > 0 && (
                <span>{likes.length}</span>
              )}</span>
            </button>
            <button
              onClick={e => removeLike(_id)}
              type="button"
              className="btn btn-light">
              <i className="fa fa-thumbs-down"></i>
            </button>
            <Link to={`/post/${_id}`} className="btn btn-outline-primary mx-3">
              Comment {" "}
              {comments.length > 0 && (
                <span className='comment-count'>{comments.length}</span>
              )}
            </Link>
            {!auth.loading && user === auth.user._id && (
              <button
                onClick={e => deletePost(_id)}
                type="button"
                className="btn btn-outline-danger"
              >
                <i className="fa fa-times"></i>
              </button>
            )}
          </Fragment>}
      </div>
    </div>
  );

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps,
  { addLike, removeLike, deletePost }
)(PostItem);
