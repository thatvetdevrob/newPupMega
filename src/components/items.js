import Categories from './cats'
import item from '../item.gif';

export default function Items() {
  return (
    <div className="App">
      <header id="panelB" className="App-header  panel radier">
        <img src="https://www.mariowiki.com/images/f/fd/Gold_Boots_PMTOK_icon.png" className="App-logo sizer" alt="logo" />
      </header>
      <p></p>
      < Categories category={'Items'} />
    </div>
  );
}
