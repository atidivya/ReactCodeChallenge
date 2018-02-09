import React, { Component} from 'react'

class SearchList extends Component {
	render(){

		  	const { data } = this.props;
			const techsList = data.map(text => {
      		return (
          		<li key={text.id} className={text.tech}>{text.text}</li>
        	  )
    		})

    		return (
     			<ul>
            		{techsList}
          		</ul>

    		);
	}
}

export default SearchList;