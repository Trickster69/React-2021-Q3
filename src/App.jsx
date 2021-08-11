import React, { useState } from 'react';
import './App.css';
import Form from './Form/Form';
import Card from './Card/Card';

function App() {
  const [formData, setFormData] = useState([]);
  console.log(formData);
  // formData.forEach((key) => console.log(key));
  return (
    <div className="form-wrapper">
      <Form setFormData={setFormData} />
      <div className="cards-wrapper">
        {formData.map((key, index) => (
          <Card formData={key} id={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
