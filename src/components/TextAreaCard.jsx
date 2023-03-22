import React from 'react';

const TextAreaCard = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="text-area-card">
      <label className="text-area-label"><b>{label}</b></label>
      <textarea
        className="text-area-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ width: '665px', height: '450px', border: 'none', padding: '20px 0', fontSize: '12px', outline: 'none' }}
      />
    </div>
  );
};

export default TextAreaCard;