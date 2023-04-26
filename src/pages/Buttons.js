import React from 'react';
import '../styles/buttons.css';
import '../styles/main.css'

class ButtonsComponent extends React.Component {
  componentDidMount() {
    const simpleClickBtn = document.getElementById('simple-click-btn');
    const doubleClickBtn = document.getElementById('double-click-btn');
    const rightClickBtn = document.getElementById('right-click-btn');

    const simpleClickMsg = document.getElementById('simple-click-msg');
    const doubleClickMsg = document.getElementById('double-click-msg');
    const rightClickMsg = document.getElementById('right-click-msg');

    simpleClickBtn.addEventListener('click', () => {
        simpleClickMsg.innerText = 'Le bouton simple click simple a été cliqué.';
    });

    doubleClickBtn.addEventListener('dblclick', () => {
        doubleClickMsg.innerText = 'Le bouton double click a été cliqué.';
    });

    rightClickBtn.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        rightClickMsg.innerText = 'Le bouton click droit a été cliqué.';
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <button id="simple-click-btn" className="btn btn-primary">Simple click</button>
            <p id="simple-click-msg"></p>
          </div>
          <div className="col">
            <button id="double-click-btn" className="btn btn-secondary">Double click</button>
            <p id="double-click-msg"></p>
          </div>
          <div className="col">
            <button id="right-click-btn" className="btn btn-danger">Right click</button>
            <p id="right-click-msg"></p>
          </div>
        </div>
        <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
      </div>
    );
  }
}

export default ButtonsComponent;