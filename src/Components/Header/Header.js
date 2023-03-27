import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, Context } from '../../store/firebaseContext'
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(Context)
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span onClick={() => {
            if (!user) {
              navigate('/login')
            }
          }}>{user ? user.displayName : 'Login'}</span>
          <hr />

        </div>
        {
          user &&
          <div className="loginPage">
            <span onClick={() => {
              firebase.auth().signOut();
              localStorage.setItem('user', 'Guest')
              navigate('/');
            }}>Logout</span>
            <hr />
          </div>
        }
        <a href="/create">
          <div className="sellMenu">
            <SellButton></SellButton>
            <div className="sellMenuContent">
              <SellButtonPlus></SellButtonPlus>
              <span>SELL</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Header;
