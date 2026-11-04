import React, { useState } from 'react';
import './Image.css'; 

function Image() {
  const [scale, setScale] = useState(100);
  const [isVisible, setIsVisible] = useState(true);

  const handleAdd = () => setIsVisible(true);
  const handleRemove = () => setIsVisible(false);
  const handleZoomIn = () => setScale((prev) => prev + 10);
  const handleZoomOut = () => setScale((prev) => (prev > 10 ? prev - 10 : prev));

  return (
    <div>
      {isVisible && (
        <img
          src="https://digital.ihg.com/is/image/ihg/intercontinental-kyiv-5927192439-1x1"
          alt="Київ"
          style={{ width: `${scale}%`, transition: 'width 0.3s ease', display: 'block', margin: '0 auto 15px' }}
        />
      )}
      <div className="buttons-container">
        <button onClick={handleAdd}>Додати</button>
        <button onClick={handleZoomIn}>Збільшити</button>
        <button onClick={handleZoomOut}>Зменшити</button>
        <button onClick={handleRemove}>Видалити</button>
      </div>
    </div>
  );
}

export default Image;