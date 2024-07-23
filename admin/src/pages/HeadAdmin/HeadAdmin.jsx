import React, { useState } from 'react';
import { assets } from '../../assets/assets'; // Adjust the import path according to your project structure

const HeadAdmin = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className='head'>
      <div className='head-img-upload flex-col'>
        <p>Upload image</p>
        <input 
          type="file" 
          accept="image/*" 
          id="image" 
          hidden 
          onChange={handleImageChange} 
        />
        <label htmlFor="image">
          <img 
            src={image ? URL.createObjectURL(image) : assets.upload_area} 
            alt="Upload area" 
          />
        </label>
      </div>
    </div>
  );
};

export default HeadAdmin;
