import React from 'react';

class IdeaTemplate extends React.Component{
    constructor(props){
        super(props);
        this.isSshow = this.isSshow.bind(this);
        this.state = {
            title : '',
            description : '',
            show : true
        }
    }
    isSshow(evt){
        evt.preventDefault();
        let show = this.state.show;
        if(show === true){
            this.setState({show : false})
        }else{
            this.setState({show : true})
        }
    }
    render(){
        let sho = this.state.show;
        if(sho === true){
            return(
                <div className = 'idea-feed'>
                    <div className = "cancel" >
                        <span onClick = {this.isSshow} >x</span>
                    </div>
                    <input value = {this.state.title}
                        onChange = {event => this.setState({ title : event.target.value})}
                        placeholder = "Enter New Idea"
                        type="text"/>
                    <div>
                        <textarea 
                            value = {this.state.description}
                            onChange = {event => this.setState({description : event.target.value})}
                            placeholder = "Describe your idea"
                            name="" id="" cols="22" rows="7"></textarea>
                    </div>
                </div>
            )
        }else{
            return('')
        }
    }
}

export default IdeaTemplate;