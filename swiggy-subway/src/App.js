import React,{Component} from 'react';
import NavBar from  './components/navbar/navbar.component';
import Place from './components/place/place.component';
import Subway from './components/subway/subway.component';
import MenuCard from './components/menu-card/menucard.component';
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <NavBar />
        <Place />
        <Subway />
        <MenuCard />
        
      </div>
      
    );
  }
}

export default App;
