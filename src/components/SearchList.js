import React from 'react'

export default({data, searchValue, addFavourite}) => {

			const techsList = data
			.filter(text => {
				//remove text that do not match the current text from data
				return text.text.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
			})
			.map(text => {
      		return (
				  <li 
				  	key={text.id} 
					className={text.tech}
					onClick={() => addFavourite(text.id)}  
				  >
				 	{text.text}
				  </li>
        	  )
    		})

    		return (
				<div>
					<ul>
            			{techsList}
          			</ul>
				</div>
	

    		);
	
}


