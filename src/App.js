import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import SearchList from './components/SearchList';
import Credit from './components/Credit';

class App extends Component {
  render() {

    return (

        <div>
          <Search />
          <SearchList data={this.props.data} />
          <Credit />
        </div>

      )
  
  }
}

export default App;
