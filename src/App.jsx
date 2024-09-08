import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StorySubmission from './pages/StorySubmission';
import NewStoryAlert from './pages/NewStoryAlert';
import WelcomeToSN from './pages/WelcomeToSN';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome-to-sn" element={<WelcomeToSN />} />
        <Route path="/story-submission" element={<StorySubmission />} />
        <Route path="/new-story-alert" element={<NewStoryAlert />} />
      </Routes>
    </Router>
  );
}

export default App;