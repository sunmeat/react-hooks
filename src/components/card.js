import React, { useState, useEffect } from 'react'; // ещё пытался сделать useContext, но он полез в App.js с каким-то провайдером :) а я хотел сделать хуки именно для карточек
import '../styles/card.css';

const Card = ({ title, price, features, backgroundColor, size }) => {
  const [selected, setSelected] = useState(false); // добавляем состояние функциональному компоненту

  useEffect(() => { // применение хука UseEffect
    document.title = selected ? `Выбрано: ${title}` : 'Проект Карточки';
  }, [selected, title]);

  return (
    <div className={`card ${size}`}>
      <div className="card-header" style={{ backgroundColor }}>
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-body">
        <div className="card-price">${price}</div>
        <ul className="card-features">
          {features.map((feature, index) => (
            <li key={index} className={feature.available ? 'available' : 'unavailable'}>
              {feature.available ? '✔️ ' : '❌ '}
              {feature.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="card-footer" style={{ backgroundColor }}>
        <button 
          className="card-button" 
          onClick={() => setSelected(!selected)} // смена состояния для selected
        >
          {selected ? 'Смена состояния' : 'Select Package'}
        </button>
      </div>
    </div>
  );
};

export default Card;