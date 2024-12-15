import React from 'react';
import LandingPageHeader from './landingPageHeader';
import LandingPagee from '../assets/LandingPagee.png';

const LandingPage = () => {
  return (
    <React.Fragment>
      {' '}<main>
        <div className="container">
          <LandingPageHeader />

          <div className="row">
            <div className="col LandingPage">
              <img src={LandingPagee} alt="Logo" />
            </div>
            <div className="col" style={{marginTop: '5.2rem'}}>
              <div className="welcome-text mb-3">Welcome Students!</div>
              <div className="welcome-text2 mb-5">
                to the Exam Portal where curiosity meets assessment.
              </div>
              <div className="quote-text">
                "Success is stumbling from failure to failure with no loss of enthusiasm." - Winston S. Churchill
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default LandingPage;
