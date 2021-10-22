import './App.css';

const throwNewError = () => {
  throw new Error('Throw New Error');
}

function App() {
  return (
    <div className="App">
      <button onClick={throwNewError} aria-label="button">Break the world</button>;
    </div>
  );
}

export default App;
