import React, {Component} from 'react';
import back from '../assets/back.png';
import user from '../assets/user.png';
import {Link} from 'react-router-dom';

class Score extends Component {
  state = {
    score: 0,
    numberOfQuestions: 0,
  };
  componentDidMount () {
    const data = JSON.parse (localStorage.getItem ('studentStats'));
    this.setState ({
      score: data.score,
      numberOfQuestions: data.numberOfQuestions,
    });
    //localStorage.removeItem ('studentStats');
    // this.setState (
    //   prevState => ({
    //     score: prevState.score,
    //     numberOfQuestions: prevState.numberOfQuestions,
    //   }),
    //   () => {
    //     localStorage.removeItem ('studentStats');
    //   }
    // );
  }
  render () {
    // const data = JSON.parse (localStorage.getItem ('studentStats'));
    // console.log (data);
    // let stats;
    // if (data === null || data === '') {
    //   stats = 'Data is empty';
    //   //console.log ('Data is empty');
    // } else {
    //   stats = 'Data is not empty';
    //   //console.log ('Data is not empty');
    // }

    const {score, numberOfQuestions} = this.state;
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <Link to="/student-project/instruction">
              <img src={back} alt="" />
            </Link>
            {' '}
            Back
          </div>
          <div className="col">
            <img src={user} alt="" className="float-end" />
          </div>
        </div>
        <div className="score-card p-4">
          <h3
            className="text-center"
            style={{
              color: '#535353',
            }}
          >
            Congratulations! You have scored
          </h3>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <div
              className="rounded-circle text-center d-flex justify-content-center align-items-center flex-column"
              style={{
                width: '200px',
                height: '200px',
                background: 'linear-gradient(144.97deg, #ED81FF 14.35%, #4F40D6 85.76%)',
              }}
            >
              <h1 className="text-white display-2 fw-bold">{score}</h1>
              <h5 className="text-white">Out of {numberOfQuestions}</h5>
            </div>
          </div>
          <div
            className="mt-5"
            style={{display: 'flex', justifyContent: 'flex-end'}}
          >

            <Link to="/student-project/home">
              {' '}<button
                className="btn"
                style={{
                  color: '#343434',
                  background: '#51B6FF',
                }}
              >
                Go back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Score;
