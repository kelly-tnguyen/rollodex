import React, {Component} from 'react';
import './App.css';
import UserCard from './UserCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      isHidden: true
    }
  }
  componentDidMount() {
    fetch("https://randomuser.me/api?results=25")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      this.setState({
        results: json.results
      })
    })
  }

  onClick = () => {
    let opposite = this.state.isHidden;
    this.setState({
      isHidden: !opposite
    })
  };

    render() {
    return (
      <div className="App">
        {this.state.results.map((user, index) => 
        <UserCard 
          key = {index}
          firstName = {user.name.first}
          lastName = {user.name.last}
          picture = {user.picture.thumbnail}
          phone = {user.cell}
          onClick = {this.onClick} 
          hide ={this.state.isHidden}/>
        )}
        <br></br>
      </div>
    );
  }
}

export default App;