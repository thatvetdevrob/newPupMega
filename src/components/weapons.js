import weapon from '../weapon.gif';
import Categories from './cats';

export default function Weapons(props) {
  return (
    <div className="App">
      <header id='panelB' className="App-header panel radier">
        <img src="https://www.mariowiki.com/images/3/33/Legendary_Hammer_PMTOK_icon.png" className="App-logo sizer" alt="logo" />
      </header>
  <p></p>
      < Categories category={'Weapons'} />
    </div>
  );
}