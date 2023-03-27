import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../../store/firebaseContext';
import './View.css';

function View() {
  const location = useLocation();
  const { firebase } = useContext(Context)
  // products and userID for fetching details and showing details
  const product = location.state.product;
  const userID = product.userId

  //state for store user data
  const [userData, setUserData] = useState({});
                                                                              
  useEffect(() => {
    let userDetails = 0
    firebase.firestore().collection('Users').get({ id: userID }).then((snapshot) => {
      let userData = snapshot.docs.map((data) => {
        data = data.data()
        if (data.id == userID) {
          userDetails = {
            id: data.id,
            name: data.username
          }
        }
        setUserData(userDetails)
      })
    })
  }, []);
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={product.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {product.price} </p>
          <span>{product.name}</span>
          <p>{product.category}</p>
          <span>Tue May 04 2021</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userData.name}</p>
          <p>{userData.id}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
