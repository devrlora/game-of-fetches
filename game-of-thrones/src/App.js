import React from 'react'
import  './App.css';
import Character from './components/Character';

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Game Of Thrones:</h1>
        <Character />
      </div>
    )
  }

}


export default App;
