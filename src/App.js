import logo from './bone.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          New Pup Mega will be up soon...
        </p>
        <a
          className="App-link"
          href="https://thatvetdevrob.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          My dev portfolio
        </a>
      </header>
    </div>
  );
}

export default App;
