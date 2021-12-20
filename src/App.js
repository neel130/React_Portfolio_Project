import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Service from './Service';
import Home from './Home';


function App() {
  return (
    <>
     <Router>
        <NavBar/>
    <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="resume" element={<Resume />} />
        <Route path="service" element={<Service />} />


      </Routes>
<Footer/>

</Router>

    </>



  );
}

export default App;
