import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

  const authLinks = (
    <ul className="navbar-nav ml-auto">
      |
      <li className="nav-item font-weight-bold active px-3">
        <Link className="nav-link" to="/posts"><i className="fa fa-file-text-o"></i>{'  '}Posts</Link>
      </li>
      |
      <li className="nav-item font-weight-bold active px-3">
        <Link className="nav-link" to="/dashboard">Dashboard</Link>
      </li>
          |
      <li className="nav-item font-weight-bold active px-3">
        <Link
          className="btn btn-outline-danger"
          onClick={logout}
          to="/"
        >
          <i className="fa fa-sign-out"></i>
          {"  "}
          Signout
          </Link>
      </li>
          |
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav ml-auto">
      |
      <li className="nav-item font-weight-bold active px-3">
        <Link className="nav-link" to="/"><i className="fa fa-home"></i>{'  '}Home</Link>
      </li>
          |
      <li className="nav-item font-weight-bold active px-3">
        <Link className="nav-link" to="/register"><i className="fa fa-user-plus"></i>{"  "}Register</Link>
      </li>
          |
      <li className="nav-item font-weight-bold active px-3">
        <Link className="nav-link" to="/login"><i className="fa fa-sign-in"></i>{"  "}Login</Link>
      </li>|
    </ul>
  );


  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light mb-3">
      <Link className="navbar-brand font-weight-bold" to="/">
        <i className="fa fa-flag logo"></i>{"  "}
        <span className="logo">Test App</span>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {!loading && (
          <Fragment>
            {isAuthenticated ? authLinks :
              guestLinks
            }
          </Fragment>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapSateToProps = state => ({
  auth: state.auth
});

export default connect(mapSateToProps, { logout })(Navbar);
