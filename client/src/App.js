import React from 'react';
import axios from 'axios'
import './App.css';
import Nav from './components/Nav'

class App extends React.Component {
  _isMounted = false;
  state = {
    players: []
  };
componentDidMount(){
  this._isMounted = true;
  axios.get('http://localhost:5000/api/players').then(response => {
    if (this._isMounted) {
    this.setState({players: response.data})
    }
  })
}
componentWillUnmount() {
  this._isMounted = false;
}
render(){
  return(
    <div className="App">
        <Nav/>
        {this.state.players.map(player=>(
          <div key={Math.random()}>
          <h1>{player.name}</h1>
          <h3>{player.country}</h3>
          </div>
        ))}
    </div>
  )
}
}
export default App;