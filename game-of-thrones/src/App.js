import React from 'react'
import  './App.css';
import Character from './components/Character';

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Game Of Thrones: Answers</h1>
        <ul> 
          <Character 
          query='16'/>
          <Character 
          query='901'/>
          <Character 
          query='232'/>
        </ul>

        
      </div>
    )
  }

}


export default App;
