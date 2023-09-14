import React, { useState } from 'react';
import Terminal from './Terminal';
import ListItem from './ListItem';

function TerminalApp() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const handleAddItem = () => {
    if (input.trim() !== '') {
      setItems([...items, input]);
      setInput('');
    }
  };

  const handleEditItem = (index, newValue) => {
    const updatedItems = [...items];
    updatedItems[index] = newValue;
    setItems(updatedItems);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Terminal App</h1>
      <Terminal
        inputValue={input}
        onInputChange={(e) => setInput(e.target.value)}
        onAddItem={handleAddItem}
      />
      {items.map((item, index) => (
        <ListItem
          key={index}
          index={index}
          value={item}
          onEditItem={handleEditItem}
          onDeleteItem={handleDeleteItem}
        />
      ))}
    </div>
  );
}

export default TerminalApp;
