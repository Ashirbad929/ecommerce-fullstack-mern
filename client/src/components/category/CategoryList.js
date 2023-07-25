import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../ApiFunctions/category';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCategories().then((res) => {
      setCategories(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row mt-4">
          {categories.map((c) => (
            <div className="col-lg-4 col-md-6 mb-3" key={c._id}>
              <Link to={`/category/${c.slug}`} className="text-decoration-none">
                <div className="card" style={styles.card}>
                  <div className="card-body">
                    <div className="card-text">{c.name}</div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryList;

// Custom styles
const styles = {
  card: {
    backgroundColor: '#f0f0f0',
    padding: '10px',
    borderRadius: '5px',
    color: '#333',
    fontSize: '18px',
    transition: 'background-color 0.3s ease-in-out', // Add transition for smooth effect
    boxShadow: 'none', // Remove the shadow
    cursor: 'pointer', // Change cursor on hover
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    textDecoration: 'none',
  },
  cardHover: {
    backgroundColor: '#ccc', // Change the background color on hover
  },
};