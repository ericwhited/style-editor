import React, {useState} from 'react';
import './App.css';

import Button from './Components/Button'
import Editor from './Components/Editor'

function App() {
  const buttons = ['submit', 'next', 'previous', 'contact', 'home'];
  const [selectedElement, setSelectedElement] = useState('Nothing')
  const [selectedColor, setSelectedColor] = useState('white')

  return (
    <div className="App">
      <h1>{selectedElement} is selected</h1>
      {
        buttons.map(button => {
          return (
            <Button 
              id={button} 
              setSelectedElement={(button) =>setSelectedElement(button)}
              color={selectedColor}
              />
          )
        })
      }
      <Editor />
    </div>
  );
}

export default App;
