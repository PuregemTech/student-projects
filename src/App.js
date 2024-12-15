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

function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/student-project/login" element={<Login />} />
        <Route path="/student-project/register" element={<Register />} />
        <Route path="/student-project/home" element={<Home />} />
        <Route path="/student-project/tests" element={<Tests />} />
        <Route path="/student-project/instruction" element={<Instruction />} />
        <Route path="/student-project/question" element={<Question />} />
        <Route path="/student-project/score" element={<Score />} />

      </Routes>
      {/* <LandingPage /> */}
    </>
  );
}

export default App;
