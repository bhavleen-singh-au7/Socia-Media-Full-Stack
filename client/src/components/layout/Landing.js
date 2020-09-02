import React from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WelcomeImg from "./welcome_img.svg";

const Landing = ({ isAuthenticated }) => {

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section>
      <div className="container text-center">
        <h1 className="mb-5"> Welcome to August Test App</h1>
        <h3>Consider Register Yourself</h3>
        <img
          className="m-5"
          width="300px"
          src={WelcomeImg}
          alt="post_img"
        />
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
