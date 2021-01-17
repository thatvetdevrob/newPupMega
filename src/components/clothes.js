import Categories from './cats'
import acc from '../acc.png'

export default function Clothes() {
  return (
    <div className="App ">
      <header id='panelB'className="App-header  panel radier">
        <img  src={acc} className="App-logo sizer" alt="logo" />
      </header>
      <p></p>
      < Categories category={'Armor'} />
    </div>
  );
}
