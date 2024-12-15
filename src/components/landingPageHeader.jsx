import React from 'react';
import Logo from '../assets/Logo.png';
import {Outlet, Link} from 'react-router-dom';

const LandingPageHeader = () => {
  return (
    <React.Fragment>
      <div className="row mt-3">
        <div className="col">
          <div className="row">
            <div className="col-2 image">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="col-10 headerText mt-3">
              {' '}
              NIGERIAN SOCIETY OF BIOCHEMISTRY STUDENTS{' '}
            </div>
          </div>

        </div>
        <div className="col mt-3">
          <Link to="/student-project/login">
            {' '}<button
              className="btn btn-style"
              style={{marginRight: '3rem'}}
            >
              Log In
            </button>
          </Link>
          <Link to="/student-project/register">
            <button className="btn btn-style">
              Register
            </button>
          </Link>

        </div>
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default LandingPageHeader;
