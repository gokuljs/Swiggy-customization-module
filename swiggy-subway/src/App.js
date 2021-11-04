import React,{componen, Component} from 'react';
import NavBar from './components/navbar/navbar.component';
import Place from './components/place/place.component';
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <NavBar />
        <Place />
      </div>
    )
  }
}

export default App;
