import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleCheck, faHeart, faPlus, faCartShopping, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import './FooterRight.css';
import { CartContext } from '../CartContext';
function FooterRight({ likes, profilePic, productDescription }) {
  const {handleUpdateCart, cartItems}=useContext(CartContext);
  const [liked, setLiked] = useState(false);
  const [plusIcon, setPlusIcon] = useState(faCirclePlus);
  const [showInfoPage, setShowInfoPage] = useState(false);
  const [showCartPage, setCartPage] = useState(false);


  
  const HandleAdding = () => {
    if (productDescription) {
      console.log('Product Description:', productDescription);
      handleUpdateCart(productDescription);
    
    }
  };

  const handleUserAddClick = () => {
    setPlusIcon(faCircleCheck);
    setTimeout(() => {
      setPlusIcon(faCirclePlus);
    }, 3000);
  };

  const handleAddToCart = () => {
    setCartPage(true);
  };

  const handleCloseCart = () => {
    setCartPage(false);
  };

  const CartPage = () => (
    <div
      style={{
        width: '80%',
        maxWidth: '400px',
        height: 'auto',
        color: 'black',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
        padding: '20px',
        textAlign: 'center',
      }}
      className="cart-page"
    >
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      <FontAwesomeIcon
        icon={faTimes}
        style={{
          position: 'absolute',
          top: '5px',
          right: '10px',
          cursor: 'pointer',
          color: 'red',
          fontSize: '18px',
        }}
        onClick={handleCloseCart}
      />
    </div>
  );

  const InfoPage = () => (
    <div
      style={{
        width: '100%',
        height: '100px',
        color: 'black',
        position: 'absolute',
        bottom: '15%',
        left: '0',
        backgroundColor: 'white',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
      }}
      className="info-page"
    >
      <h2>Info Page</h2>
      <p>This is the content of your info page.</p>
      <FontAwesomeIcon
        icon={faTimes}
        style={{
          position: 'absolute',
          top: '5px',
          right: '10px',
          cursor: 'pointer',
          color: 'red',
          fontSize: '18px',
        }}
        onClick={() => setShowInfoPage(false)}
      />
    </div>
  );

  const parseLikesCount = (count) => {
    if (typeof count === 'string') {
      if (count.endsWith('K')) {
        return parseFloat(count) * 1000;
      }
      return parseInt(count);
    }
    return count;
  };

  const formatLikesCount = (count) => {
    if (count >= 10000) {
      return (count / 1000).toFixed(1) + 'K';
    }
    return count;
  };

  const handleLikeClick = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  return (
    <div className="footer-right">
      <div className="sidebar-icon">
        {profilePic && (
          <img
            src={profilePic}
            className="userprofile"
            alt="Profile"
            style={{ width: '45px', height: '45px', color: '#616161' }}
          />
        )}
        <FontAwesomeIcon
          icon={plusIcon}
          className="useradd"
          style={{ width: '15px', height: '15px', color: '#FF0000' }}
          onClick={handleUserAddClick}
        />
      </div>

      <div className="sidebar-icon">
        <FontAwesomeIcon
          icon={faHeart}
          style={{ width: '35px', height: '35px', color: liked ? '#FF0000' : 'white' }}
          onClick={handleLikeClick}
        />
        <p>{formatLikesCount(parseLikesCount(likes) + (liked ? 1 : 0))}</p>
      </div>

      <div className="sidebar-icon">
        <FontAwesomeIcon
          icon={faInfoCircle}
          style={{ width: '35px', height: '35px', color: 'white' }}
          onClick={() => setShowInfoPage(true)}
        />
        {showInfoPage && InfoPage()}
      </div>

      <div className="sidebar-icon">
        <FontAwesomeIcon
          icon={faPlus}
          style={{ width: '35px', height: '35px', color: '#ffc107' }}
          onClick={HandleAdding}
        />
      </div>

      <div className="sidebar-icon">
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{ width: '35px', height: '35px', color: 'white' }}
          onClick={handleAddToCart}
        />
        <p>Cart</p>
      </div>

      {showCartPage && CartPage()}

      <div className="sidebar-icon record">
        <img
          src="https://static.thenounproject.com/png/934821-200.png"
          alt="Record Icon"
        />
      </div>
    </div>
  );
}

export default FooterRight;