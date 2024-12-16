import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './components/landingPage';
import LandingPageHeader from './components/landingPageHeader';

function App () {
  return (
    <Router>
      <div className="container">
        <LandingPageHeader />
      </div>
      <Routes>
        <Route path="/student-projects" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
