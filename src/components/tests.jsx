import React, {Component} from 'react';
import SideBar from './sidebar';
import user from '../assets/user.png';
import backbutton from '../assets/backbutton.png';
import {Link} from 'react-router-dom';

class Tests extends Component {
  state = {};
  render () {
    return (
      <div className="wrapper">
        <SideBar />
        <div className="content m-4">
          <img src={user} alt="" className="float-end" />
          <div style={{clear: 'both'}} />
          <div className="row">
            <div className="col">
              <h3>Mock Tests</h3>
              {' '}
              <h6 style={{color: '#7A7A7A', lineHeight: '10px'}}>
                100 Level Tests
              </h6>
            </div>
            <div className="col">
              <div style={{width: '80%'}}>
                <span
                  style={{
                    display: 'block',
                    textAlign: 'end',
                    color: '#7A7A7A',
                  }}
                >
                  5/12 Done
                </span>
                <div className="progress" style={{height: '10px'}}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{
                      width: '50%',
                      background: 'linear-gradient(90deg, #9BBCFF 0%, #FFA6A6 100%)',
                    }}
                  />
                </div>
              </div>

            </div>

          </div>
          <div className="row mt-4" style={{width: '90%'}}>
            <div className="col">
              <div className="card test-card">
                <div className="card-body">
                  <h5>GST111</h5>
                  <h6 style={{color: '#696969'}}>Communication in English I</h6>
                  <Link to="/student-project/instruction">
                    <img
                      src={backbutton}
                      alt=""
                      style={{
                        position: 'absolute',
                        bottom: '5px',
                        right: '5px',
                        width: '25px',
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card test-card">
                <div className="card-body">
                  <h5>GST111</h5>
                  <h6 style={{color: '#696969'}}>Communication in English I</h6>
                  <img
                    src={backbutton}
                    alt=""
                    style={{
                      position: 'absolute',
                      bottom: '5px',
                      right: '5px',
                      width: '25px',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card test-card">
                <div className="card-body">
                  <h5>GST111</h5>
                  <h6 style={{color: '#696969'}}>Communication in English I</h6>
                  <img
                    src={backbutton}
                    alt=""
                    style={{
                      position: 'absolute',
                      bottom: '5px',
                      right: '5px',
                      width: '25px',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col mt-4">
              <div className="card test-card">
                <div className="card-body">
                  <h5>GST111</h5>
                  <h6 style={{color: '#696969'}}>Communication in English I</h6>
                  <img
                    src={backbutton}
                    alt=""
                    style={{
                      position: 'absolute',
                      bottom: '5px',
                      right: '5px',
                      width: '25px',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col mt-4">
              <div className="card test-card">
                <div className="card-body">
                  <h5>GST111</h5>
                  <h6 style={{color: '#696969'}}>Communication in English I</h6>
                  <img
                    src={backbutton}
                    alt=""
                    style={{
                      position: 'absolute',
                      bottom: '5px',
                      right: '5px',
                      width: '25px',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col mt-4">
              <div className="card test-card">
                <div className="card-body">
                  <h5>GST111</h5>
                  <h6 style={{color: '#696969'}}>Communication in English I</h6>
                  <img
                    src={backbutton}
                    alt=""
                    style={{
                      position: 'absolute',
                      bottom: '5px',
                      right: '5px',
                      width: '25px',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col mt-4">
              <div className="card test-card">
                <div className="card-body">
                  <h5>GST111</h5>
                  <h6 style={{color: '#696969'}}>Communication in English I</h6>
                  <img
                    src={backbutton}
                    alt=""
                    style={{
                      position: 'absolute',
                      bottom: '5px',
                      right: '5px',
                      width: '25px',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col mt-4">
              <div className="card test-card">
                <div className="card-body">
                  <h5>GST111</h5>
                  <h6 style={{color: '#696969'}}>Communication in English I</h6>
                  <img
                    src={backbutton}
                    alt=""
                    style={{
                      position: 'absolute',
                      bottom: '5px',
                      right: '5px',
                      width: '25px',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col mt-4">
              <div className="card test-card">
                <div className="card-body">
                  <h5>GST111</h5>
                  <h6 style={{color: '#696969'}}>Communication in English I</h6>
                  <img
                    src={backbutton}
                    alt=""
                    style={{
                      position: 'absolute',
                      bottom: '5px',
                      right: '5px',
                      width: '25px',
                    }}
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Tests;
