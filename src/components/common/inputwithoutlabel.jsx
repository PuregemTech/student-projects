import React from 'react';

const InputWithoutLabel = ({type, name, value, label, error, onChange}) => {
  return (
    <div className="form-group">
      <input
        placeholder={label}
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

export default InputWithoutLabel;
