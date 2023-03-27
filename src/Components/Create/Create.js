import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { Context, AuthContext } from '../../store/firebaseContext'
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
  const { firebase } = useContext(Context)
  const { user } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null)
  const date = new Date().toString();
  //submit form data
  const createProduct = e => {
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ ref }) => {
      ref.getDownloadURL().then((url) => {
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId:user.uid ,
          createdAt:date
        })
        navigate('/')
      })
    })
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
              }}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" value={price} onChange={(e) => {
              setPrice(e.target.value)
            }} />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : '...'}></img>
          <br />
          <input type="file" onChange={(e) => {
            setImage(e.target.files[0]);
          }} />
          <br />
          <button className="uploadBtn" onClick={createProduct}>upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
