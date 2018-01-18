import React from 'react';

class IdeaTemplate extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title : '',
            description : ''
        }
    }
    render(){
        return(
            <div className = 'idea-feed'>
                <input value = {this.state.title}
                    onChange = {event => this.setState({ title : event.target.value})}
                    type="text"/>
                <div>
                    <textarea 
                        value = {this.state.description}
                        onChange = {event => this.setState({description : event.target.value})}
                        name="" id="" cols="22" rows="7"></textarea>
                </div>
            </div>
        )
    }
}

export default IdeaTemplate;