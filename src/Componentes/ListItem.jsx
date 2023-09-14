import React, { useState } from 'react';

function ListItem({ index, value, onEditItem, onDeleteItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(value);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEditItem(index, newValue);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          {value}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDeleteItem(index)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default ListItem;
