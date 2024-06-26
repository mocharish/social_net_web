import React from 'react';
import './gender.css';

function Gender({ genderError, onChange }) {
  return (
    <div className="mb-3 d-flex align-items-center">
      <label htmlFor="gender" className="gender-label me-2">
        Gender
      </label>
      <i
        className="bi bi-info-circle info-icon"
        data-bs-toggle="popover"
        data-bs-placement="left"
        data-bs-content="You can change who sees your gender on your profile later."
      ></i>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          id="male"
          value="male"
          onChange={() => onChange('male')}
        />
        <label className="form-check-label-male" htmlFor="male">
          Male
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          id="female"
          value="female"
          onChange={() => onChange('female')}
        />
        <label className="form-check-label-female" htmlFor="female">
          Female
        </label>
      </div>
      {/* Display error message */}
      {genderError && <div className="text-danger">{genderError}</div>}
    </div>
  );
}

export default Gender;
