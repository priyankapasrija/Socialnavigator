import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StorySubmission from "./pages/StorySubmission";
import NewStoryAlertPopUp from "./components/NewStoryAlert";
//import WelcomeToSN from "./components/WelcomeToSN";
//import SelectionOne from "./components/SelectionOne";
//import SelectionTwo from "./pages/SelectionTwo";
//import SelectionThree from "./pages/SelectionThree";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/welcome-to-sn" element={<WelcomeToSN />} />*/}
        <Route path="/story-submission" element={<StorySubmission />} />
       {/* <Route path="/new-story-alert" element={<NewStoryAlertPopUp />} /> */}
      {/*  <Route path="/selection" element={<SelectionOne />} />
        <Route path="/nextque" element={<SelectionTwo />} />
  <Route path="/nextque1" element={<SelectionThree />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
