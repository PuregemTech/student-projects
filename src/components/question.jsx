import React, {Component} from 'react';
import back from '../assets/back.png';
import user from '../assets/user.png';
import stopwatch from '../assets/stopwatch.png';
import {Link} from 'react-router-dom';
import questions from '../questions.json';

class Question extends Component {
  state = {
    questions,
    currentQuestion: {},
    nextQuestion: {},
    previousQuestion: {},
    answer: '',
    numberOfQuestions: 0,
    numberOfAnsweredQuestion: 0,
    currentQuestionIndex: 0,
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    time: {},
    radioButtonValue: '',
  };

  constructor (props) {
    super (props);
    this.interval = null;
  }

  componentDidMount () {
    const {
      questions,
      currentQuestion,
      nextQuestion,
      previousQuestion,
    } = this.state;
    this.displayQuestion (
      questions,
      currentQuestion,
      nextQuestion,
      previousQuestion
    );

    this.startTimer ();
  }

  displayQuestion = (
    question,
    currentQuestion,
    nextQuestion,
    previousQuestion
  ) => {
    const {questions, currentQuestionIndex} = this.state;
    if (questions.length !== 0) question = questions;
    currentQuestion = questions[currentQuestionIndex];
    nextQuestion = questions[currentQuestionIndex + 1];
    previousQuestion = questions[currentQuestionIndex - 1];
    const answer = currentQuestion.answer;
    this.setState ({
      currentQuestion,
      nextQuestion,
      previousQuestion,
      answer,
      numberOfQuestions: question.length,
    });
  };

  handleOptionClick = event => {
    //console.log ('Option clicked');
    //console.log (this.state.answer);
    //console.log (event.target.value);

    if (
      event.target.value.toLowerCase () ===
      this.state.answer.toLocaleLowerCase ()
    ) {
      this.correctAnswer ();
      //   console.log (this.state.answer);
      //   console.log (event.target.value);
    } else {
      this.wrongAnswer ();
      //console.log (this.state.answer);
      //console.log (event.target.value);
    }
  };

  correctAnswer = () => {
    console.log ('Correct answer clicked');

    this.setState (
      prevState => ({
        score: prevState.score + 1,
        correctAnswers: prevState.correctAnswers + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        numberOfAnsweredQuestion: prevState.numberOfAnsweredQuestion + 1,
      }),
      () => {
        const {
          question,
          currentQuestion,
          nextQuestion,
          previousQuestion,
        } = this.state;
        if (nextQuestion === undefined) {
          this.endGame ();
        } else {
          this.displayQuestion (
            question,
            currentQuestion,
            nextQuestion,
            previousQuestion
          );
        }
      }
    );
  };

  wrongAnswer = () => {
    console.log ('Wrong answer clicked');

    this.setState (
      prevState => ({
        wrongAnswers: prevState.wrongAnswers + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        numberOfAnsweredQuestion: prevState.numberOfAnsweredQuestion + 1,
      }),
      () => {
        const {
          question,
          currentQuestion,
          nextQuestion,
          previousQuestion,
        } = this.state;

        if (nextQuestion === undefined) {
          this.endGame ();
        } else {
          this.displayQuestion (
            question,
            currentQuestion,
            nextQuestion,
            previousQuestion
          );
        }
      }
    );
  };

  handleQuitButton = e => {
    if (window.confirm ('Are you sure you want to quit?')) this.endGame ();
  };

  handleNextButton = e => {
    if (this.state.nextQuestion !== undefined)
      this.setState (
        prevState => ({
          currentQuestionIndex: prevState.currentQuestionIndex + 1,
        }),
        () => {
          const {
            question,
            currentQuestion,
            nextQuestion,
            previousQuestion,
          } = this.state;
          this.displayQuestion (
            question,
            currentQuestion,
            nextQuestion,
            previousQuestion
          );
        }
      );
    if (this.state.nextQuestion === undefined) {
      this.endGame ();
    }
  };

  handlePreviousButton = e => {
    if (this.state.previousQuestion !== undefined)
      this.setState (
        prevState => ({
          currentQuestionIndex: prevState.currentQuestionIndex - 1,
        }),
        () => {
          const {
            question,
            currentQuestion,
            nextQuestion,
            previousQuestion,
          } = this.state;
          this.displayQuestion (
            question,
            currentQuestion,
            nextQuestion,
            previousQuestion
          );
        }
      );
  };

  startTimer = props => {
    const countDownTime = Date.now () + 60000;
    this.interval = setInterval (() => {
      const now = Date.now ();
      const distance = countDownTime - now;
      const minutes = Math.floor (distance % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor (distance % (1000 * 60) / 1000);

      if (distance < 0) {
        clearInterval (this.interval);
        this.setState (
          {
            time: {
              minutes: 0,
              seconds: 0,
            },
          },
          () => {
            // alert ('Your time is over!');
            // window.location.replace ('/instruction');
            this.endGame ();
          }
        );
      } else {
        this.setState ({
          time: {
            minutes,
            seconds,
          },
        });
      }
    }, 1000);
  };

  endGame = () => {
    alert ('Quiz has ended!');
    const {score, numberOfQuestions} = this.state;
    const studentStats = {
      score,
      numberOfQuestions,
    };
    console.log (studentStats);
    localStorage.setItem ('studentStats', JSON.stringify (studentStats));
    setTimeout (() => {
      //this.props.history.push ('/');
      window.location.replace ('/student-project/score');
    }, 500);
  };

  render () {
    // console.log (question);
    const {
      currentQuestion,
      currentQuestionIndex,
      numberOfQuestions,
      time,
    } = this.state;
    //console.log (currentQuestion.question);
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <Link to="/instruction"><img src={back} alt="" /></Link> Back
          </div>
          <div className="col">
            <img src={user} alt="" className="float-end" />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <div style={{width: '50%'}}>
              <div className="quest-numb">
                {currentQuestionIndex + 1}/{numberOfQuestions}
              </div>
              <div
                className="progress mt-1"
                style={{
                  background: '#E1E1E1',
                  height: '10px',
                }}
              >
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{
                    width: '50%',
                    background: '#2085EB',
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="time float-end py-1">
              <img src={stopwatch} alt="" /> {time.minutes}:{time.seconds} Min
            </div>
          </div>
        </div>
        <div className="question p-4 mt-4">
          Q{currentQuestionIndex + 1}. {currentQuestion.question}
          <div className="mt-4" style={{marginLeft: '2rem'}}>
            <div className="form-check">
              <label className="form-check-label quest-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optradio"
                  value={currentQuestion.optionA}
                  onChange={this.handleOptionClick}
                />
                {currentQuestion.optionA}

              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label quest-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optradio"
                  value={currentQuestion.optionB}
                  onClick={this.handleOptionClick}
                />
                {currentQuestion.optionB}
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label quest-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optradio"
                  value={currentQuestion.optionC}
                  onClick={this.handleOptionClick}
                />
                {currentQuestion.optionC}
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label quest-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optradio"
                  value={currentQuestion.optionD}
                  onClick={this.handleOptionClick}
                />
                {currentQuestion.optionD}
              </label>
            </div>
            <div
              className="mt-5"
              style={{display: 'flex', justifyContent: 'flex-end'}}
            >

              <button
                className="btn instruction-btn"
                onClick={this.handleQuitButton}
              >
                Quit
              </button>

              {/* <button
                className="btn instruction-btn"
                style={{marginLeft: '1rem'}}
              >
                Skip
              </button> */}

              <button
                onClick={this.handlePreviousButton}
                className="btn instruction-btn"
                style={{marginLeft: '1rem'}}
              >
                Previous
              </button>

              <button
                onClick={this.handleNextButton}
                className="btn instruction-btn"
                style={{marginLeft: '1rem'}}
              >
                Next
              </button>

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Question;
