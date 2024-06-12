import React from 'react';
import Color from './Color';

function App() {
  const colors = [
    { id: 1, name: 'Rosso' },
    { id: 2, name: 'Verde' },
    { id: 3, name: 'Blu' },
  ];

  return (
    <div>
      <h2>Lista dei colori</h2>
      <ul>
        {colors.map((color) => (
          <Color key={color.id} color={color} />
        ))}
      </ul>
    </div>
  );
}

export default App;
