import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavBar from "./Components/Navigation/NavBar";
// import routes from "./Components/Routes/Routes";
import Home from "./Components/Pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <Home />
    </div>
    // <Router>
    //   <NavBar />
    //   <div className='container mt-4'>
    //     <Routes>
    //       {routes.map((route, index) => (
    //         <Route key={index} path={route.path} element={route.component} />
    //       ))}
    //     </Routes>
    //   </div>
    // </Router>
  );
};

export default App;