import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import SidebarLogo from '../assets/Logo.png';

class SideBar extends Component {
  state = {};
  render () {
    return (
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{
          width: '100%',
          maxWidth: '280px',
          height: '650px',
          boxShadow: '8px 4px 17.5px 0px #00000040',
        }}
      >
        <NavLink
          to="/student-project/home"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <img
            src={SidebarLogo}
            alt=""
            style={{
              width: '65px',
              height: '65px',
              top: '28px',
              left: '30px',
              gap: '0px',
              opacity: '0px',
              marginRight: '1rem',
            }}
          />
          <span className="sidebar-text">
            NIGERIAN SOCIETY OF BIOCHEMISTRY STUDENTS
          </span>
        </NavLink>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink
              to="/student-project/home"
              className="nav-link"
              aria-current="page"
            >
              <i className="fa fa-home" />
              {' '}
              <span className="sidebar-link-text">
                Home
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/student-project/tests" className="nav-link link-dark">
              <i className="fa fa-book" />
              <span className="sidebar-link-text">
                Tests
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/student-project/result"
              className="nav-link link-dark"
            >
              <i className="fa fa-home" />
              <span className="sidebar-link-text">
                Results
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/student-project/notification"
              className="nav-link link-dark"
            >
              <i className="fa fa-bell" />
              <span className="sidebar-link-text">
                Notifications
              </span>
            </NavLink>
          </li>
        </ul>
        <hr />
        <ul className="nav nav-pills flex-column">
          <li>
            <NavLink to="/student-project/#" className="nav-link link-dark">
              {' '}
              <i className="fa fa-sign-out" />
              <span className="sidebar-link-text">
                Logout
              </span>
            </NavLink>
          </li>
        </ul>

      </div>
    );
  }
}

export default SideBar;
