import React from 'react';

function Terminal({ inputValue, onInputChange, onAddItem }) {
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Enter a new item..."
      />
      <button onClick={onAddItem}>Add</button>
    </div>
  );
}

export default Terminal;
