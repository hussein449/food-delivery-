import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Categories() {
  const navigate = useNavigate();

  const [selectedCategories, setSelectedCategories] = useState([]);

  const foodCategories = [
    'Pizza',
    'Burgers',
    'Sushi',
    'Pasta',
    'Salads',
    'Desserts',
    'Drinks',
  ];

  const handleCheckboxChange = (category) => {
    setSelectedCategories((prevState) => {
      if (prevState.includes(category)) {
        return prevState.filter((item) => item !== category);
      } else {
        return [...prevState, category];
      }
    });
  };

  const goBack = () => {
    navigate('/Home');
  };

  return (
    <div style={styles.container}>
      {/* Go Back Button */}
      <button onClick={goBack} style={styles.button}>
        Go Back
      </button>

      <h1 style={styles.heading}>Food Categories</h1>
      <p style={styles.text}>Select the food categories you're interested in</p>

      <div style={styles.checkboxContainer}>
        <h2 style={styles.checkboxHeading}>Choose your favorites:</h2>
        {foodCategories.map((category, index) => (
          <div key={index} style={styles.checkboxItem}>
            <input
              type="checkbox"
              id={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCheckboxChange(category)}
              style={styles.checkbox}
            />
            <label htmlFor={category} style={styles.checkboxLabel}>
              {category}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f7f7f7',
    padding: '30px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    transition: 'all 0.3s ease',
  },
  button: {
    padding: '12px 24px',
    marginBottom: '30px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
  heading: {
    fontSize: '2.5rem',
    margin: '20px 0',
    color: '#333',
    fontWeight: '700',
    textAlign: 'center',
  },
  text: {
    fontSize: '1.2rem',
    color: '#666',
    textAlign: 'center',
    marginBottom: '30px',
  },
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px',
  },
  checkboxHeading: {
    fontSize: '1.6rem',
    marginBottom: '15px',
    color: '#333',
    fontWeight: '600',
  },
  checkboxItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
    transition: 'all 0.2s ease',
  },
  checkbox: {
    marginRight: '12px',
    cursor: 'pointer',
    width: '20px',
    height: '20px',
    accentColor: '#4CAF50',
    transition: 'all 0.2s ease',
  },
  checkboxLabel: {
    fontSize: '1.2rem',
    color: '#444',
    cursor: 'pointer',
    transition: 'color 0.2s ease',
  },
  checkboxLabelHover: {
    color: '#4CAF50',
  },
};

// Adding responsiveness
if (window.innerWidth <= 600) {
  styles.container.padding = '15px';
  styles.button = {
    ...styles.button,
    width: '100%',
    padding: '14px 28px',
    fontSize: '1rem',
  };
  styles.heading.fontSize = '2rem';
  styles.text.fontSize = '1rem';
  styles.checkboxItem.marginBottom = '8px';
  styles.checkboxHeading.fontSize = '1.4rem';
}

export default Categories;
