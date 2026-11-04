import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import GoodsCard from './components/GoodsCard';

function App() {
  // Дані для галереї (Завдання 2)
  const goods = [
    { id: 1, name: 'Яблуко', price: 15, image: 'https://cdn-icons-png.flaticon.com/512/415/415733.png' },
    { id: 2, name: 'Груша', price: 20, image: 'https://cdn-icons-png.flaticon.com/512/2909/2909808.png' },
    { id: 3, name: 'Виноград', price: 25, image: 'https://cdn-icons-png.flaticon.com/512/3194/3194591.png' },
    { id: 4, name: 'Персик', price: 18, image: 'https://cdn-icons-png.flaticon.com/512/2909/2909862.png' },
    { id: 5, name: 'Полуниця', price: 30, image: 'https://cdn-icons-png.flaticon.com/512/590/590772.png' },
    { id: 6, name: 'Апельсин', price: 22, image: 'https://cdn-icons-png.flaticon.com/512/135/135620.png' },
  ];

  return (
    <div className="App">
      <div className="lab-section">
        <h1>Завдання 1: Портфоліо (React)</h1>
        <Header />
        <Content />
        <Image />
      </div>

      <hr style={{ margin: '40px 0' }} />

      <div className="lab-section">
        <h1>Завдання 2: Галерея товарів</h1>
        <div className="goods-gallery">
          {goods.map((item) => (
            <GoodsCard 
              key={item.id} 
              name={item.name} 
              price={item.price} 
              image={item.image} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;