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
          query='16'
          titles1=''/>
          <Character 
          query='901'
          born1=''/>
          <Character 
          query='229'/>
        </ul>

        
      </div>
    )
  }

}


export default App;
