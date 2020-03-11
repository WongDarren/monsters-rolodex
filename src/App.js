import React, {Component}  from 'react';  // Import all the things from React that we need
import './App.css'; // Import the CSS from this directory
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

// changed from function to class
// older versions used class
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };

  }

  // initial state is empty array
  // wait for component to mount with componentDidMount()
  // fetch all users from URL
  // taking response and convert to JSON format that JavaScript can understand
  // take users we got from JSON and set our monsters to that array we fetched and converted
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    // const mosnters = this.state.monsters;
    // const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    
    return (
      <div className = 'App'>
        <h1> Monsters Rolodex </h1>
        
        <SearchBox
          placeholder = 'search monsters'
          handleChange = {this.handleChange}
        />
        <CardList monsters = {filteredMonsters} />
      </div>
    );
  }
}

export default App;
