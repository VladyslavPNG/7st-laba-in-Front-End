import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleClickCount: 0, // Для h2 (getElementById)
      hobbyClickCount: 0, // Для хобі (querySelector)
    };
  }

  // Логіка для заголовка 
  handleTitleClick = () => {
    this.setState((prevState) => ({
      titleClickCount: prevState.titleClickCount + 1,
    }));
  };

  // Логіка для блоку хобі
  handleHobbyClick = () => {
    this.setState((prevState) => ({
      hobbyClickCount: prevState.hobbyClickCount + 1,
    }));
  };

  getTitleStyle = () => {
    const step = this.state.titleClickCount % 3;
    if (step === 1) return { backgroundColor: 'blue', color: 'white', padding: '10px' };
    if (step === 2) return { backgroundColor: 'red', color: 'yellow', padding: '10px' };
    return { backgroundColor: 'transparent', color: 'black', padding: '0' };
  };

  getHobbyStyle = () => {
    const step = this.state.hobbyClickCount % 3;
    if (step === 1) return { backgroundColor: 'green', color: 'white', padding: '10px' };
    if (step === 2) return { backgroundColor: 'yellow', color: 'black', padding: '10px' };
    return { backgroundColor: 'transparent', color: 'black', padding: '0' };
  };

  render() {
    return (
      <div>
        <h3 onClick={this.handleTitleClick} style={this.getTitleStyle()}>
          Колчін Владислав Сергійович
        </h3>

        <div onClick={this.handleHobbyClick} style={this.getHobbyStyle()}>
          <h4>Хобі:</h4>
          <ul>
            <li>Настільний теніс</li>
            <li>Музика</li>
            <li>Front-end розробка</li>
            <li>Фотошоп</li>
            <li>Складання головоломок</li>
          </ul>
        </div>

        <h4>Улюблені фільми:</h4>
        <ol>
          <li>Гаррі Поттер</li>
          <li>Зоряні війни</li>
          <li>Володар перснів</li>
          <li>Матриця</li>
          <li>Містер і Місіс Сміт</li>
          <li>Таксі</li>
        </ol>

        <div className="kyiv-text">
          <p>Київ — це місто, яке неможливо зрозуміти з першого погляду...</p>
        </div>
      </div>
    );
  }
}

export default Content;