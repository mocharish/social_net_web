
import React from 'react';
import './takePhoto.css'; // Import the CSS file

function TakePhoto({ onPhotoSelect }) {

  const handlePhotoUpload = (event) => {
    const uploadedPhoto = event.target.files[0];
    onPhotoSelect(uploadedPhoto); // Pass the uploaded photo to the parent component
  };

  return (
    <div className="mb-3">
      <div className="flex-container">
        <div className="title">Add photo</div>
        <input type="file" className="form-control small-input" id="photo" accept="image/*" onChange={handlePhotoUpload} />
      </div>
    </div>
  );
}

export default TakePhoto;
