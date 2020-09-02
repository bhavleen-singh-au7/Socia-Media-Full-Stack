import React, { Fragment, useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="d-flex justify-content-center m-5">
        <div className="text-center p-5 shadow-lg p-3 mb-5 color rounded">
          <h1 className="display-3 font-weight-bold">Sign In</h1>

          <h3 className="py-3">
            <i className="fa fa-user"></i>
            {"  "}
             Sign In to your Account
         </h3>

          <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                autoComplete="off"
                name="email"
                value={email}
                onChange={e => onChange(e)}
                required
              />

            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                minLength="6"
                value={password}
                onChange={e => onChange(e)}
                required
                className="form-control"
              />
            </div>
            <input type="submit" className="btn btn-block btn-outline-primary my-4" value="Login" />
          </form>
          <p className="my-1">
            Don't have an account? <Link to="/register">Log In</Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
