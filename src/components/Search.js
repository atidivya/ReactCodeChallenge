import React, { Component } from 'react'

class Search extends Component {

	filterUpdate(){
		const val = this.myValue.value
		this.props.onChange(val)
	}
		
	

	render(){
	
		
		return(
			<header>
				<form>
					 <input type="text" 
						 ref={ (value) => {this.myValue = value}}
						 placeholder="Search technology name here.."
						 onChange={this.filterUpdate.bind(this)} />
			 	</form>
			</header>
			)
	}
}

export default Search;