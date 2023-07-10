import Home from "./pages/Home";
import Exam from "./pages/Exam";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Exam" element={<Exam />} />
      </Routes>
    </Router>
  );
};

export default App;
