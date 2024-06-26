import React from 'react';

function PasswordInput({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  handlePasswordChange,
  handleConfirmPasswordChange,
  handlePasswordFocus,
  showPasswordError,
  passwordError
}) {
  return (
    <>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          onFocus={handlePasswordFocus}
          required
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="The password must consists of 8-14 combination of letters and numbers"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          onBlur={handleConfirmPasswordChange}
          required
        />
        {showPasswordError && <div className="text-danger">{passwordError}</div>}
      </div>
    </>
  );
}

export default PasswordInput;