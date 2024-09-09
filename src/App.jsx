import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StorySubmission from "./pages/StorySubmission";
import NewStoryAlert from "./pages/NewStoryAlert";
import WelcomeToSN from "./pages/WelcomeToSN";
import SelectionOne from "./components/SelectionOne";
import SelectionTwo from "./components/SelectionTwo";
import SelectionThree from "./components/SelectionThree";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome-to-sn" element={<WelcomeToSN />} />
        <Route path="/story-submission" element={<StorySubmission />} />
        <Route path="/new-story-alert" element={<NewStoryAlert />} />
        <Route path="/selection" element={<SelectionOne />} />
        <Route path="/nextque" element={<SelectionTwo />} />
        <Route path="/nextque1" element={<SelectionThree />} />
      </Routes>
    </Router>
  );
}

export default App;
