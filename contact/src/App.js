import logo from "./logo.svg";
import "./App.css";

function App() {
  async function addContact() {
    const opts = { multiple: true };

    try {
      const contacts = await navigator.contacts.select(["name"], opts);
      alert(JSON.stringify(contacts));
    } catch (e) {
      alert(e.message);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={addContact}>Add Contact</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
