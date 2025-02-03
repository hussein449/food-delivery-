import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Categories() {
  const navigate = useNavigate(); // Initialize the navigate function

  // State to store selected food categories
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
        return prevState.filter((item) => item !== category); // Uncheck category
      } else {
        return [...prevState, category]; // Check category
      }
    });
  };

  const goBack = () => {
    navigate('/'); // Navigate back to the home page
  };

  return (
    <div style={styles.container}>
      {/* Go Back Button */}
      <button onClick={goBack} style={styles.button}>
        Go Back
      </button>

      <h1 style={styles.heading}>Categories Page</h1>
      <p style={styles.text}>Welcome to the categories page!</p>

      <div style={styles.checkboxContainer}>
        <h2 style={styles.checkboxHeading}>Select Food Categories:</h2>
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

// Inline styles
const styles = {
  container: {
    backgroundColor: 'white',
    padding: '20px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  button: {
    padding: '10px 20px',
    marginBottom: '20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  heading: {
    fontSize: '2rem',
    margin: '20px 0',
  },
  text: {
    fontSize: '1.2rem',
    color: '#555',
  },
  checkboxContainer: {
    marginTop: '20px',
  },
  checkboxHeading: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  checkboxItem: {
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: '10px',
  },
  checkboxLabel: {
    fontSize: '1rem',
    color: '#333',
  },
};

// Responsive styling for smaller screens
if (window.innerWidth <= 600) {
  styles.container.padding = '10px';
  styles.button = {
    ...styles.button,
    width: '100%',
    padding: '12px 20px',
  };
  styles.checkboxHeading = {
    fontSize: '1.2rem',
  };
  styles.checkboxItem = {
    marginBottom: '8px',
  };
}

export default Categories;
