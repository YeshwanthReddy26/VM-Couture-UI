import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import DrawerAppBar from './Components/DrawerAppBar';

function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      <div style={{ paddingTop: "56px" }}>
        <Router >
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
