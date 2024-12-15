import React, {Component} from 'react';
import RegistrationFrame1 from '../assets/RegistrationFrame1.png';
import RegistrationFrame2 from '../assets/RegistrationFrame2.png';
import Joi from 'joi-browser';
import Form from './common/form';
import {Link} from 'react-router-dom';

class Register extends Form {
  state = {
    data: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      phonenumber: '',
      matricnumber: '',
      levelnumber: '',
    },
    errors: {},
  };

  schema = {
    firstname: Joi.string ().required ().label ('First Name'),
    lastname: Joi.string ().required ().label ('Last Name'),
    email: Joi.string ().required ().email ().label ('Email'),
    password: Joi.string ().required ().min (5).label ('Password'),
    phonenumber: Joi.string ().required ().length (11).label ('Phone Number'),
    matricnumber: Joi.string ().required ().max (8).label ('Matric Number'),
    levelnumber: Joi.number ().required ().label ('Level Number'),
  };

  doSubmit = () => {
    // Call the server
    console.log ('Form Submitted');
  };

  render () {
    return (
      <div className="container" style={{position: 'relative'}}>
        <div className="row">
          <div className="col reg-col1">
            <img src={RegistrationFrame1} alt="" className="reg-frame1" />
            <img src={RegistrationFrame2} alt="" className="reg-frame2" />
            <div className="reg-header-text">
              NIGERIAN SOCIETY OF BIOCHEMISTRY STUDENTS
            </div>
          </div>
          <div className="col">
            <div className="reg-col2">
              <h1>STUDENT REGISTRATION</h1>
              <form
                onSubmit={this.handleSubmit}
                style={{width: '100%', maxWidth: '300px', margin: 'auto'}}
              >

                {this.renderInputWithoutLabel ('firstname', 'First Name')}
                {this.renderInputWithoutLabel ('lastname', 'Last Name')}
                {this.renderInputWithoutLabel ('email', 'Email')}
                {this.renderInputWithoutLabel ('password', 'Password')}
                {this.renderInputWithoutLabel ('phonenumber', 'Phone Number')}
                {this.renderInputWithoutLabel ('matricnumber', 'Matric Number')}
                {this.renderInputWithoutLabel ('levelnumber', 'Level Number')}

                <div>
                  <button
                    disabled={this.validate ()}
                    className="btn btn-primary btn-style"
                    style={{float: 'right'}}
                  >
                    Register
                  </button>
                </div>

                <div
                  style={{clear: 'both', textAlign: 'end', fontSize: '14px'}}
                >
                  <span style={{color: '#e4ebfd'}}>
                    {' '}Already Have An Account?
                  </span>
                  {' '}
                  <Link to="/student-project/login">Login</Link>

                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
