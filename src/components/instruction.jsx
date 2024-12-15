import React, {Component} from 'react';
import Logo from '../assets/Logo.png';
import Menu from '../assets/menu.png';
import file from '../assets/file.png';
import hourglass from '../assets/hourglass.png';
import review from '../assets/review.png';

import {Link} from 'react-router-dom';

class Instruction extends Component {
  state = {};
  render () {
    return (
      <div className="container">
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
          <div className="col">
            <img src={Menu} alt="menu" className="float-end" />
          </div>
        </div>
        <div className="card-container mt-4">
          <div className="">
            <h5
              style={{
                display: 'inline-block',
                lineHeight: '40px',
              }}
            >
              Instructions before you begin the test
            </h5>
            <img
              src={file}
              alt="file"
              style={{width: '30px', marginLeft: '10px'}}
            />
          </div>
          <div className="card instruction-card">
            <div className="card-body" style={{color: '#343434'}}>
              <ul>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui laborum dolorum, laudantium
                </li>
                <li>
                  corporis omnis praesentium blanditiis, reiciendis sit aut fugit reprehenderit culpa eum natus sapiente? Debitis possimus incidunt ducimus
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis neque
                  {' '}
                </li>
                <li>
                  perferendis quam magni ut ea. Deleniti minima maxime voluptates tempora aspernatur totam earum nam nisi, iure fugiat eligendi deserunt voluptatibus.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A atque consequuntur dolore, asperiores aspernatur hic quas quae dolor saepe doloremque! Saepe officia eius accusantium voluptate! Ex odit eaque iusto reprehenderit.
                </li>
              </ul>
              <div className="row" style={{marginLeft: '1.5rem'}}>
                <div className="col-3">
                  <div
                    className="card"
                    style={{
                      background: '#B5CCFA',
                      width: '100%',
                      maxWidth: '200px',
                    }}
                  >
                    <div className="card-body">
                      <h5>Time Duration</h5>
                      <h6
                        style={{
                          display: 'inline-block',
                          color: '#585757',
                        }}
                      >
                        02:00 Hrs
                      </h6>
                      {' '}
                      <img src={hourglass} alt="" style={{height: '25px'}} />
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div
                    className="card"
                    style={{
                      background: '#B5CCFA',
                      width: '100%',
                      maxWidth: '200px',
                    }}
                  >
                    <div className="card-body">
                      <h5>Minimum Score</h5>
                      <h6
                        style={{
                          display: 'inline-block',
                          color: '#585757',
                        }}
                      >
                        40%
                      </h6>
                      {' '}
                      <img src={review} alt="" style={{height: '25px'}} />
                    </div>
                  </div>
                </div>
                <div className="col-3 position-relative">
                  <Link to="/student-project/question">
                    <button className="btn instruction-btn position-absolute bottom-0">
                      Start
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Instruction;
