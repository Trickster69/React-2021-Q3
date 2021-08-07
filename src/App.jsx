import React from 'react';
import './App.css';
import Card from './Components/Card/Card';
import SearchBar from './Components/SearchBar/SearchBar';

export default function App() {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <SearchBar />
        <Card />
      </div>
    </div>
  );
}
