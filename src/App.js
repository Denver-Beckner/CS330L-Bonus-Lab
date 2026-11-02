import './App.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from './Navbar';
import Card from './Card';
import Modal from './Modal';

function App() {
  return (
    <div className="App">

      <Navbar />

      <div className="mainInfo">
        <h1>CS 330L</h1>
        <h2>Section - 11</h2>
        <p>WVU ID: 800462662</p>
        <p>Hi I am Denver Beckner</p>
      </div>

      <Card />

      <Modal />
    </div>
  );
}
export default App;