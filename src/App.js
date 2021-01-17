import logo from './logo.png';
import './App.css';
import './custom.scss';
import star from './Star.png'
import SimpleModal from '../src/components/simple'

function App() {

let checker = false;

  const queryString = window.location.search;
console.log('query: ', queryString);
const urlParams = new URLSearchParams(queryString);
const sold = urlParams.get('sold')
console.log("is it sold? ", sold);

if(sold === true){
  checker = true;
}


// shirt
console.log('checker', sold);
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
          Back to world map</h2>
        </a>
      </header>
    </div>
  );
}

export default App;
