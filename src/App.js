import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import SelectedList from './components/SelectedList';
import SearchList from './components/SearchList';
import Credit from './components/Credit';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      searchValue:'',
      favourites:[]

    }
  }

  //update the search input value
  onChange(value){
    this.setState({
      searchValue: value
    })
  }

  addFavourite(id){
    const favList = this.state.favourites.concat([id])
    this.setState({
      favourites:favList
    })
  }


  render() {

    
    

    return (

        <div>
          <Search 
          searchValue={this.state.searchValue}
          onChange={this.onChange.bind(this)} />
            <main>
              <SelectedList
              favourites={this.state.favourites}
              data={this.props.data} />
              <SearchList 
              data={this.props.data}
              searchValue={this.state.searchValue}
              addFavourite={this.addFavourite.bind(this)} />
              <Credit />
            </main>
        </div>

      )
  
  }
}

export default App;
