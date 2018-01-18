import React, { Component } from 'react';
import AddNewIdea from './components/new-idea-button';
import SortIdea from './components/idea-sort';
import IdeaTemplate from './components/idea-template';

class App extends Component {
  constructor(props){
    super(props);

    this.addIdea = this.addIdea.bind(this);
    this.state = {
      ideas : [
        {
            title : "Social network",
            description : "Bla Bla bla"
        }
      ],
      numOfIdeas : 1,
    }
  }

  addIdea(evt){
    evt.preventDefault();
    let numOfIdeas = this.state.numOfIdeas;
    numOfIdeas++;
    console.log(numOfIdeas)
    this.setState({numOfIdeas : numOfIdeas});
  }
  render() {
    return(
      <div className = "container">
        <h1>Idea Board</h1>
        <div className = "menu">
          <AddNewIdea action = {this.addIdea} />
          <SortIdea />
        </div>
        <div className = "ideas-container" >
          { this.createIdeas() }
        </div>
      </div>
    )
  }

  createIdeas(){
    let ideas = [];
    for (let index = 0; index < this.state.numOfIdeas; index++) {
      ideas.push(<IdeaTemplate key={index}/>);
    }
    console.log(ideas);
    return ideas;
  }
}

export default App;
