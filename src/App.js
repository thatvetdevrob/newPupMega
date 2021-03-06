import logo from './logo.png';
import './App.css';
import './custom.scss';
import SimpleModal from '../src/components/simple'

function App() {

let checker = false;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const sold = urlParams.get('sold')

if(sold === true){
  checker = true;
}


// shirt
  return (
    <div className="App">
      <header id='panelD' className="App-header panel radier">
      <h1 className="head_font" data-testid="line-1">
          Welcome to my shop!
        </h1>
        <img  src={logo} className="sizer5" alt="logo" />
        
     
       {sold && <SimpleModal />}
        
        <a data-testid="line-2"
          className="App-link head_font linker"
          href="https://thatvetdevrob.com"
          target="_blank"
          rel="noopener noreferrer"
        ><h2>
          Back to earth</h2>
        </a>
      </header>
    </div>
  );
}

export default App;
