import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import  LandingPage  from "./Components/Landing Page/LandingPage";
import FormPage from "./Components/FormPage/FormPage"
import {Home} from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import Detail from "./Components/DetailPage/DetailPage";
import About from "./Components/About/About";
import axios from 'axios';
axios.defaults.baseURL='http://localhost:3001/';


function App() {
  
  return (
    <div className="App">
      
      <BrowserRouter>
      
      <Routes>
        <Route path={"/"} element={<LandingPage/>}/>
        <Route path={"/home"}element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
        <Route path={"/detail/:id"} element={<Detail/>}/>
        <Route path={"/about"} element={<About/>}/>
        <Route path={"/formPage"} element={<FormPage/>}/>
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;