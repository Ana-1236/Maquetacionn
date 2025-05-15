import React from 'react';
import { Link } from 'react-router-dom';

function FrameButton({ children, onClick, to, style }) {
  const buttonStyles = {
    padding: '8px 25px',
    fontSize: '1em',
    backgroundColor: '#efefef',
    border: '1px solid black',
    color: 'black',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0,
    ...style,
  };

  if (to) {
    return (
      <Link to={to} style={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} style={buttonStyles}>
      {children}
    </button>
  );
}
export default FrameButton;