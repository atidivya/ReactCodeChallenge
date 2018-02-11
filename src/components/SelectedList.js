import React from 'react'

export default ({data, favourites}) => {
    
    const textList = favourites.map(id => {
        const {text, tech} = data[id]
        return (
            <li key={id} className={tech}>{text}</li>
        )
    })

    return (
        <div className="favourites">
            <h4> Click on the selected keyword</h4>
            <ul>
                {textList}
            </ul>
        </div>
        
    )
}