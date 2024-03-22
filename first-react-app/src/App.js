import './App.css';
import ClassComponents from './components/ClassComponents';
import FunctionComponent from './components/FunctionComponent';
import {useState} from 'react';


function App() {
  const author= "AS";

  const [name, setName] = useState("AK")
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Class Components
        </p>
        <ClassComponents />
        <br />

        <p>Function Components</p>
        {/*<FunctionComponent name={"Aakash"} age={26} author={author}/>*/}

        <FunctionComponent name={name} age={26} author={author} setName = {setName}/>
      </header>
    </div>
  );
}

export default App;
