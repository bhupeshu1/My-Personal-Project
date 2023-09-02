import {Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./Pages/HOME/HomePage";
import AboutPage from "./Pages/ABOUT/AboutPage";
import NavbarElements from "./Components/Elements/Navbar";
import ContactPage from "./Pages/CONTACT/ContactPage";
import VisitPage from "./Pages/VISIT";


function App() {
  return (
    <div className="App"> 
    <NavbarElements/>
  <Routes>
      <Route path='/' element={<HomePage/>}></Route>
        <Route path='/AboutPage' element={<AboutPage/>}></Route>
        <Route path='/ContactPage' element={<ContactPage/>}></Route>
        <Route path='/VisitPage' element={<VisitPage/>}></Route>
        </Routes>
      </div>
  );
}

export default App;
