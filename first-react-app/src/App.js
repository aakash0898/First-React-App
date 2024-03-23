import './App.css';
import ClassComponents from './pages/ClassComponents';
import FunctionComponent from './pages/FunctionComponent';
import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import BaseHoc  from './hoc/BaseHoc';


function App() {
  const author= "AS";

  const [name, setName] = useState("AK");
  return (
    <Routes>
      <Route path='/' element={<BaseHoc><ClassComponents /> </BaseHoc>} />
      <Route path='/functional' element={<BaseHoc><FunctionComponent 
      name={name}
      age={25}
      author={author}
      setName={setName}
      /></BaseHoc> } />
    </Routes>

    /*{<div className="App">
      <header className="App-header">
        <p>
          Class Components
        </p>
        <ClassComponents />
        <br />

        <p>Function Components</p>
        {<FunctionComponent name={"Aakash"} age={26} author={author}/>}

        <FunctionComponent name={name} age={26} author={author} setName = {setName}/>
      </header>
  </div>}*/
  );
}

export default App;
