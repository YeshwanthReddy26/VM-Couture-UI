import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import DrawerAppBar from './Components/DrawerAppBar';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <Router >
      <div className="App">
        <DrawerAppBar />
        <div style={{ paddingTop: "56px" }}>

          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>

          <Routes>
            <Route exact path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
