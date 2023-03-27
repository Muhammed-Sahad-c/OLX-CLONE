import React, { useContext, useEffect, useState } from 'react';
import Heart from '../../assets/Heart';
import './Post.css';
import { Context } from '../../store/firebaseContext';
import { useNavigate } from 'react-router-dom';
function Posts() {
  const navigate = useNavigate();
  const { firebase } = useContext(Context);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    firebase.firestore().collection('products').get().then((snapshot) => {
      let allpost = snapshot.docs.map((product) => {
        return {
          products: product.data(),
          id: product.id
        }
      })
      setProducts(allpost)
    })
  }, []);
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {
            products.map((item) => {
              return <div
                className="card" onClick={()=>{
                  navigate('/view', {state:{product:item.products}})
                }}>
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={item.products.url} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {item.products.price}</p>
                  <span className="kilometer">{item.products.name}</span>
                  <p className="name">{item.products.category}</p>
                </div>
                <div className="date">
                  <span>{item.products.createdAt}</span>
                </div>
              </div>
            })
          }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
