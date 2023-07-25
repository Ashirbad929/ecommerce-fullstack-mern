import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSubs } from '../../ApiFunctions/sub';

const SubList = () => {
  const [subs, setSubs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getSubs().then((res) => {
      setSubs(res.data);
      setLoading(false);
    });
  }, []);

  const styles = {
    container: {
      padding: '10px',
    },
    link: {
      display: 'block',
      textDecoration: 'none',
      color: '#333',
      padding: '10px 20px',
      borderBottom: '1px solid #ccc',
      transition: 'background-color 0.3s ease-in-out',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '4px',
      marginBottom: '5px',
    },
    linkHover: {
      backgroundColor: '#f0f0f0',
    },
  };

  return (
    <div style={styles.container}>
      {loading ? <h1>Loading...</h1> : (
        <div>
          {subs.map((s) => (
            <div key={s._id}>
              <Link
                to={`/sub/${s.slug}`}
                style={styles.link}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'}
              >
                {s.name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubList;
