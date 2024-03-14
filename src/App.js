import './App.css';
import Parent01 from './components/01-p2c/Parent01';
import Parent02 from './components/02-c2p/Parent02';
import Parent03 from './components/03-s2s/Parent03';
import Parent04 from './components/04-p2gc/Parent04';
import Parent from './components/Parent';

function App() {
  return (
    <div className="App">
      <Parent />
      <hr />
      <h2>01 - From Parent to Child component:</h2>
      <Parent01 />
      <hr />
      <h2>02 - From Child to Parent component:</h2>
      <Parent02 />
      <hr />
      <h2>03 - From Sibling1 to Sibling2 through the Parent component:</h2>
      <Parent03 />
      <hr />
      <h2>04 - From Parent to GrandChild through the Child component:</h2>
      <Parent04 />
      <hr />
    </div>
  );
}

export default App;
