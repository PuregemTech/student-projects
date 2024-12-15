import React, {Component} from 'react';
import SideBar from './sidebar';
import {Link} from 'react-router-dom';
import ProfilePic from '../assets/ProfilePic.png';
import Group1 from '../assets/Group1.png';
import Group2 from '../assets/Group2.png';

class Home extends Component {
  state = {};
  render () {
    return (
      <React.Fragment>
        <div className="wrapper">
          {/* <main> */}
          <SideBar />
          <div className="content m-4">
            <div className="row">
              <div className="col offset-8">
                <Link to="/student-project/resume">
                  {' '}<button
                    className="btn btn-style"
                    style={{marginRight: '3rem'}}
                  >
                    Resume
                  </button>
                </Link>
                <Link to="/student-project/restart">
                  <button className="btn btn-style">
                    Restart
                  </button>
                </Link>

              </div>
            </div>

            <div className="row">
              <div className="col">
                <img src={ProfilePic} alt="" className="profile-image" />
              </div>
              <div className="col-9 mt-5">
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'Josefin Sans',
                    fontSize: '40px',
                    fontWeight: '400',
                    lineHeight: '40px',
                    textAlign: 'justified',
                  }}
                >
                  Jacob William
                </span>
                <span
                  style={{
                    color: '#7A7A7A',
                    lineHeight: '20px',
                  }}
                >
                  200 level
                </span>
                <div style={{width: '80%'}}>
                  <span
                    style={{
                      display: 'block',
                      textAlign: 'end',
                      color: '#7A7A7A',
                    }}
                  >
                    8/12 Tests
                  </span>
                  <div className="progress" style={{}}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{
                        width: '80%',
                        background: 'linear-gradient(90deg, #E95A5A 0%, rgba(255, 80, 185, 0.71) 100%)',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="line" />
            <div className="row">
              <h3 className="mt-3">Latest Updates</h3>
              <h6
                style={{
                  color: '#7A7A7A',
                  lineHeight: '20px',
                }}
              >
                Know what's going on in your school
              </h6>
              <div className="col">
                <img
                  src={Group1}
                  alt=""
                  style={{height: '270px', width: '200px'}}
                />
              </div>
              <div className="col">
                <img
                  src={Group1}
                  alt=""
                  style={{height: '270px', width: '200px'}}
                />
              </div>
              <div className="col">
                <img
                  src={Group1}
                  alt=""
                  style={{height: '270px', width: '200px'}}
                />
              </div>
              <div className="col-4">
                <img
                  src={Group2}
                  alt=""
                  style={{height: '270px', width: '200px'}}
                />
              </div>
            </div>
          </div>
          {/* </main> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
