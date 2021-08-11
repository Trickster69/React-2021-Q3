import React, { useState } from 'react';
import './App.css';
import Form from './Form/Form';
import Card from './Card/Card';

function App() {
  const [formData, setFormData] = useState([]);
  return (
    <div className="form-wrapper">
      <Form setFormData={setFormData} />
      <div className="cards-wrapper">
        {formData.map((key) => (
          <Card formData={key} id={key.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
