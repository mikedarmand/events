import React from 'react';

const ButtonWithImage = () => {
  const handleClick = (event) => {
    event.preventDefault();

    
    const imageSrc = event.currentTarget.querySelector('img').src;
    console.log('Image source:', imageSrc);
  };

  return (
    <button onClick={handleClick}>
      <img src="./image.png" alt="Button image" />
    </button>
  );
};

export default ButtonWithImage;
