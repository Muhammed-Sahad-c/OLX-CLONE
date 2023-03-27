
import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Error from './Pages/error'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import { AuthContext, Context } from './store/firebaseContext'
// import protectedRoute from './Components/protectedRoute';
import ProtextedRoute from './Components/protectedRoute';
// Firebase
function App() {
  const { user, setUser } = useContext(AuthContext)
  const { firebase } = useContext(Context)
  useEffect(() => {
    console.log(localStorage.getItem('user'), 'fuck')
    firebase.auth().onAuthStateChanged((data) => {
      setUser(data)
    })
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<ProtextedRoute><Create /></ProtextedRoute>} />
          <Route path="/view" element={<View />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
