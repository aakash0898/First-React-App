import './App.css';
import ClassComponents from './components/ClassComponents';
import FunctionComponent from './components/FunctionComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Class Components
        </p>
        <ClassComponents />
        <br />
        
        <p>Function Components</p>
        <FunctionComponent />
      </header>
    </div>
  );
}

export default App;
