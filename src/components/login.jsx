import React, {Component} from 'react';
import LandingPageHeader from './landingPageHeader';
import LoginImage from '../assets/LoginImage.png';
import Form from './common/form';
import Joi from 'joi-browser';

class Login extends Form {
  state = {
    data: {
      matricnumber: '',
      password: '',
    },
    errors: {},
  };

  schema = {
    matricnumber: Joi.string ().required ().label ('Matric Number'),
    password: Joi.string ().required ().label ('Password'),
  };

  doSubmit = () => {
    // Call the server
    console.log ('Form Submitted');
    window.location.replace ('/student-project/home');
  };

  render () {
    return (
      <div className="container">
        <LandingPageHeader />

        <div className="row">
          <div className="col loginImage">
            <img src={LoginImage} alt="" />
          </div>
          <div className="col" style={{marginTop: '7rem'}}>
            <form
              onSubmit={this.handleSubmit}
              style={{width: '100%', maxWidth: '300px'}}
            >

              {this.renderInput (
                'matricnumber',
                'Matric Number',
                'Enter your name'
              )}
              {this.renderInput ('password', 'Password')}
              <div className="text-end forgot-password mb-4">
                Forgot Password?
              </div>
              {this.renderButton ('Login To Your Account')}

            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default Login;
