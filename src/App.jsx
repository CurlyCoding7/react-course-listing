import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseListing from './components/CourseListing.jsx';
import CourseDetails from './components/CourseDetails.jsx';
import Dashboard from './components/Dashboard.jsx';
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<CourseListing/>} />
        <Route path="/course/:id" element={<CourseDetails/>} />
        <Route path="/dashboard/:id" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
