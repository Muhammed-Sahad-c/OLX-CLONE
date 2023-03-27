import React, { useContext, useState } from 'react';
import { Context } from '../../store/firebaseContext'
import Logo from '../../olx-logo.png';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { firebase } = useContext(Context)
  const doLogin = e => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).then((result) => {
      localStorage.setItem('user', "USER");
      navigate('/')
    }).catch((err) => {
      document.getElementById('password').style.borderBottom = '3PX solid red'
      document.getElementById('email').style.borderBottom = '3PX solid red'
    })
  }


  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={doLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            defaultValue="John"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            defaultValue="Doe"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
