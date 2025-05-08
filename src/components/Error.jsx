import React from 'react';

function Error({ message }) {
  return (
    <div style={{ color: 'red' }}>
      <p>خطأ: {message}</p>
    </div>
  );
}

export default Error;