import React from 'react';
import './App.css';
import Card from './Components/Card/Card';
import SearchBar from './Components/SearchBar/SearchBar';

export default function App(props) {
  const cards = props.state.card.map((card) => <Card card={card} />);
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <SearchBar />
        <div className="cards">{cards}</div>
      </div>
    </div>
  );
}
