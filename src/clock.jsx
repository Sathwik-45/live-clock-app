import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      console.log("time updating");
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.heading}>🕒 Live Clock</h1>
        <p style={styles.time}>{time.toLocaleTimeString()}</p>
        <p style={styles.date}>{time.toLocaleDateString()}</p>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to right, #74ebd5, #acb6e5)',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
  card: {
    background: 'white',
    padding: '40px 60px',
    borderRadius: '20px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#34495e',
  },
  time: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '10px',
  },
  date: {
    fontSize: '1.2rem',
    color: '#7f8c8d',
  },
};

export default Clock;
