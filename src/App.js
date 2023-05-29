import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello ReactJS!
        </h1>
        <p>Testing CircleCI - Docker CI/CD</p>
        <form>
          <label for="fname">First name:</label>
          <input type="text" id="fname" name="fname"/><br/><br/>
          <label for="lname">Last name:</label>
          <input type="text" id="lname" name="lname"/><br/><br/>
          <input type="submit" value="Submit"/>
        </form>
      </header>
    </div>
  );
}

export default App;
