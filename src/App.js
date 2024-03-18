import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import DrawerAppBar from './Components/DrawerAppBar';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import NotFound from './Pages/NotFound';
import { Navigate } from 'react-router-dom';
import QualityAssuranceFooter from './Components/QualityAssuranceFooter';

function App() {
  return (
    <Router >
      <div className="App">
        <DrawerAppBar />
        
        <div style={{ paddingTop: "56px" }}>
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route exact path="/contact-us" element={<ContactUs />} />

            <Route exact path="/about-us" element={<AboutUs />} />

            <Route exact path="/notfound" element={<NotFound />} />

            <Route path="*" element={<Navigate to="/notfound" replace />} />
          </Routes>
        </div>

        <QualityAssuranceFooter />
      </div>
    </Router>
  );
}

export default App;
