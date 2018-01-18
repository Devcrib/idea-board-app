import React from 'react';

class AddNewIdea extends React.Component{
    // constructor(props){
    //     super(props);

    //     // this.state = {
    //     //     numOfIdeas : 0,
    //     // }
    // }

    // onButtonClick(evt) {
    //     evt.preventDefault();
    //     let numOfIdeas = this.state.numOfIdeas;

    //     if (numOfIdeas < 5) {
    //         numOfIdeas++;
    //         console.log(numOfIdeas)
    //         this.setState({numOfIdeas : numOfIdeas}); 
    //     }
    // }
    render(){
        return(
            <button onClick = {this.props.action} >New Idea</button>
        )
    }
}

export default AddNewIdea;