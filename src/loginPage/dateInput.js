import React from 'react';
import './dateInput.css';
function DateInput({ year, setYear, month, setMonth, day, setDay, yearError }) {
  // Define an array of month names
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Generate options for years, months, and days
  const years = [];
  for (let i = 2020; i >= 1950; i--) {
    years.push(<option key={i} value={i}>{i}</option>);
  }

  // Generate options for months using month names
  const months = monthNames.map((monthName, index) => (
    <option key={index + 1} value={index + 1}>{monthName}</option>
  ));

  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(<option key={i} value={i}>{i}</option>);
  }

  

  return (
    <div className="mb-3 d-flex align-items-center date-input-container">
      <label htmlFor="dob" className="birthday-label me-2">Birthday</label>
      <i 
        className="bi bi-info-circle info-icon" 
        data-bs-toggle="popover" 
        data-bs-placement="left" 
        data-bs-content="Providing your birthday helps make sure you get the right Facebook experience for your age. If you want to change who sees this, go to the About section of your profile. For more details, please visit our Privacy Policy."
      ></i>

      <select className="form-select me-2" value={year} onChange={(e) => setYear(e.target.value)}>
        <option value="">Year</option>
        {years}
      </select>
      <select className="form-select me-2" value={month} onChange={(e) => setMonth(e.target.value)}>
        <option value="">Month</option>
        {months}
      </select>
      <select className="form-select" value={day} onChange={(e) => setDay(e.target.value)}>
        <option value="">Day</option>
        {days}
      </select>
      {yearError && <div className="text-danger" >{yearError}</div>}
    </div>
  );
}

export default DateInput;
