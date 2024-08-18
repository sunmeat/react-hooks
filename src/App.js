import React from 'react';
import Card from './components/card';
import './App.css';

const App = () => {
  const cardsData = [
    {
      title: 'Basic',
      price: 0.99,
      features: [
        { text: 'Sample Text Here', available: true },
        { text: 'Other Text Title', available: false },
        { text: 'Text Space Goes Here', available: false },
        { text: 'Description Space', available: true }
      ],
      backgroundColor: '#018057',
      size: 'small'
    },
    {
      title: 'Standard',
      price: 2.99,
      features: [
        { text: 'Sample Text Here', available: true },
        { text: 'Other Text Title', available: true },
        { text: 'Text Space Goes Here', available: true },
        { text: 'Description Space', available: false }
      ],
      backgroundColor: '#0068DB',
      size: 'large'
    },
    {
      title: 'Premium',
      price: 5.99,
      features: [
        { text: 'Sample Text Here', available: true },
        { text: 'Other Text Title', available: true },
        { text: 'Text Space Goes Here', available: true },
        { text: 'Description Space', available: true }
      ],
      backgroundColor: '#003567',
      size: 'medium'
    }
  ];

  return (
    <div className="card-container">
      {cardsData.map((card, index) => (
        <Card 
          key={index}
          title={card.title}
          price={card.price}
          features={card.features}
          backgroundColor={card.backgroundColor}
          size={card.size}
        />
      ))}
    </div>
  );
};

export default App;