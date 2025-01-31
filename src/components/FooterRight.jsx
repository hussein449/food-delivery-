import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleCheck, faHeart, faBookmark, faCartShopping, faInfoCircle ,faTimes} from '@fortawesome/free-solid-svg-icons';
import './FooterRight.css';

function FooterRight({ likes, saves, profilePic }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [userAddIcon, setUserAddIcon] = useState(faCirclePlus);
  const [showInfoPage, setShowInfoPage] = useState(false);
  const [showCartPage, setCartPage] = useState(false);
  const handleUserAddClick = () => {
    setUserAddIcon(faCircleCheck);
    setTimeout(() => {
      setUserAddIcon(null);
    }, 3000);
  };
  function CartPage() {
    return (
      <div style={{
        width: '80%',
        maxWidth: '400px',
        height: '200px',
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
      }} className="cart-page">
        <h2>Cart</h2>
        <p>here it will show the products and from which restaurant with prices</p>
        <FontAwesomeIcon
        icon={faTimes}
        style={{
          position: 'absolute',
          top: '5px',
          right: '10px',
          cursor: 'pointer',
          color: 'red',
          fontSize: '18px'
        }}
        onClick={() => setCartPage(false)}
      />
      </div>
    );
  }
  function InfoPage() {
    return (
      <div style={{ width: '100%', height: '100px', color: 'black', position: "absolute", bottom: "15%", left: "0", backgroundColor: "white" ,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',}} className="info-page">
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
          fontSize: '18px'
        }}
        onClick={() => setShowInfoPage(false)}
      />
      </div>
    );
  }
   const handleCartClick =() =>{
    setCartPage(true);
   }
  const handleIconClick = () => {
    setShowInfoPage(true);
  };

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
        {profilePic ? (
          <img src={profilePic} className='userprofile' alt='Profile' style={{ width: '45px', height: '45px', color: '#616161' }} />
        ) : null}
        <FontAwesomeIcon icon={userAddIcon} className='useradd' style={{ width: '15px', height: '15px', color: '#FF0000' }} onClick={handleUserAddClick} />
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
        {/* this is the information section  */}
        <FontAwesomeIcon
          icon={faInfoCircle}
          style={{ width: '35px', height: '35px', color: 'white' }}
          onClick={handleIconClick}
        />
        {showInfoPage && InfoPage()}
      </div>
      <div className="sidebar-icon">
        {saved ? (
          <FontAwesomeIcon
            icon={faBookmark}
            style={{ width: '35px', height: '35px', color: '#ffc107' }}
            onClick={() => setSaved(false)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faBookmark}
            style={{ width: '35px', height: '35px', color: 'white' }}
            onClick={() => setSaved(true)}
          />
        )}
        <p>{saved ? saves + 1 : saves}</p>
      </div>
      {/* this is the new cart section   */}
      <div className="sidebar-icon">
        <FontAwesomeIcon icon={faCartShopping} style={{ width: '35px', height: '35px', color: 'white' }} 
        onClick={handleCartClick}/>
        <p>cart</p>
      </div>
      {showCartPage && CartPage()}
      <div className="sidebar-icon record">
        <img src="https://static.thenounproject.com/png/934821-200.png" alt='Record Icon' />
      </div>
    </div>
  );
}

export default FooterRight;
