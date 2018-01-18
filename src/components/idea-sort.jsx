import React from 'react';

class SortIdea extends React.Component{
    render(){
        return(
            <span>
                Sort Ideas By:
                <select name="sort-options" size="1" multiple> 
                    <option value="date">Date Created</option>
                    <option value="alphabets">Alphabetical Order</option>
                </select>
            </span>
        )
    }
}

export default SortIdea;