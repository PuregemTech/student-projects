import './App.css';
import {Route, Routes} from 'react-router-dom';
//import LandingPage from './assets/LandingPage.png';
//import LandingPageHeader from './components/landingPageHeader';
import Login from './components/login';
import LandingPage from './components/landingPage';
import Register from './components/register';
import Home from './components/home';
import Tests from './components/tests';
import Instruction from './components/instruction';
import Question from './components/question';
import Score from './components/score';
import LandingPageHeader from './components/landingPageHeader';
import LandingPagee from './assets/LandingPagee.png';


function App () {
  return (
    <>
      <main>
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

      {/* <Routes>
        <Route path="/student-projects" element={} />
        <Route path="/student-project/login" element={<Login />} />
        <Route path="/student-project/register" element={<Register />} />
        <Route path="/student-project/home" element={<Home />} />
        <Route path="/student-project/tests" element={<Tests />} />
        <Route path="/student-project/instruction" element={<Instruction />} />
        <Route path="/student-project/question" element={<Question />} />
        <Route path="/student-project/score" element={<Score />} />

      </Routes> */}
      {/* <LandingPage /> */}
    </>
  );
}

export default App;
