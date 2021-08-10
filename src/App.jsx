import React, { useState } from 'react';
import './App.css';
import Form from './Form/Form';
import Card from './Card/Card';

function App() {
  return (
    <div className="form-wrapper">
      <Form />
      <div className="cards">
        <Card />
      </div>
    </div>
  );
}

export default App;
