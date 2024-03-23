import React from 'react';
import BaseHoc from '../hoc/BaseHoc';

class ClassComponents extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      name: "Devtown",
      age: '25'
    }
  }
    render() {
        return (
            <> 
              <p>
                  This is example of Class Components
                </p>
            </>
            /*{<div className="App">
              <header className="App-header">
                
              </header>
            </div>}*/
          );
    }
}
export default BaseHoc(ClassComponents);