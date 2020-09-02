import React, { Fragment, useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import PropTypes from 'prop-types';
import { register } from "../../actions/auth";

const Register = ({ setAlert, register, isAuthenticated }) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    if (password !== password2) {
      setAlert('Passwords do not match', "danger");
    } else {
      register({ name, email, password });
    };
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="d-flex justify-content-center m-5">
        <div className="text-center p-5 shadow-lg p-3 mb-5 color rounded">
          <h1 className="display-3 font-weight-bold">Sign Up</h1>

          <h3 className="py-3">
            <i className="fa fa-user-plus"></i>
            {"  "}
            Create Your Account
         </h3>

          <form onSubmit={e => onSubmit(e)} >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                autoComplete="off"
                name="name"
                required
                value={name}
                onChange={e => onChange(e)}
              />
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email Address"
                name="email"
                autoComplete="off"
                value={email}
                onChange={e => onChange(e)}
                required
              />
              <small className="form-text">
                Gravatar email
            </small>
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                minLength="6"
                required
                value={password}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                placeholder="Confirm Password"
                name="password2"
                minLength="6"
                required
                value={password2}
                onChange={e => onChange(e)}
              />
            </div>
            <input type="submit" className="btn
             btn-outline-primary btn-block my-3" value="Register" />
          </form>
          <p className="my-1">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
