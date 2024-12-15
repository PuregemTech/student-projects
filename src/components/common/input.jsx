import React from 'react';

const Input = ({type, name, value, label, error, onChange}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        // placeholder={label}
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type={type}
        className="form-control mb-3"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
