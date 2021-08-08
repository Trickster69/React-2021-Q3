import React from 'react';
import './App.css';
import Card from './Components/Card/Card';
import SearchBar from './Components/SearchBar/SearchBar';

export default function App({ state }) {
  const cards = state.card.map((key) => <Card card={key} />);
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <SearchBar />
        <div className="cards">{cards}</div>
      </div>
    </div>
  );
}
