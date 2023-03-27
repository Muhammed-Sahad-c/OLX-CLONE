import React, { useState, useContext } from 'react';
import Logo from '../../olx-logo.png';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import { Context } from '../../store/firebaseContext';

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const { firebase } = useContext(Context)
  // submit Form Datas

  const submitSignUpPage = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      document.getElementById('pass').style.borderBottom = '3PX solid red'
    } else if (phone.length != 10) {
      document.getElementById('mobile').style.borderBottom = '3PX solid red'
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
        result.user.updateProfile({ displayName: username }).then(() => {
          firebase.firestore().collection('Users').add({
            id: result.user.uid,
            username: username,
            phone: phone
          }).then(() => {
            navigate('/login');
          })
        })
      })
      document.getElementById('mobile').style.borderBottom = '3PX solid green'
    }
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={submitSignUpPage}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="username"
            defaultValue="John"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
            }}
            required
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="mobile"
            name="phone"
            value={phone}
            onChange={(e) => {
              if (e.target.value.length != 10) {
                setPhone(e.target.value)
                document.getElementById('mobile').style.borderBottom = '3PX solid red'
              }
              else {
                document.getElementById('mobile').style.borderBottom = '3PX solid green'
                setPhone(e.target.value)
              }
            }}
            required
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="pass"
            name="password"
            defaultValue="Doe"

            onChange={(e) => {
              if (e.target.value.length < 8) {
                setPassword(e.target.value)
                document.getElementById('pass').style.borderBottom = '3PX solid red'
              }
              else {
                document.getElementById('pass').style.borderBottom = '3PX solid green'
                setPassword(e.target.value)
              }
            }}
            value={password}
            required
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
