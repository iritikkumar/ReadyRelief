import './App.css';
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom"
import Donation from './pages/Donation';
import Login from './pages/Login';
import RegisterUser from "./pages/RegisterUser"
import RegisterHospital from "./pages/RegisterHospital"
import Home from "./pages/Home"

// function App() {
//   return (
//     // <Login/>
//     // <Register/>
//     <Donation/>
//     // <Home/>

//   );
// }

// export default App;


function App() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/registeruser' element={<RegisterUser />} />
            <Route path='/registerhospital' element={<RegisterHospital />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;