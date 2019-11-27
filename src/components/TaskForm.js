import React from 'react'

export default class TaskForm extends React.Component {
    
    state = {
        title: '',
        description: ''
    }

    onSubmit = e  => {
        console.log(this.state);
        e.preventDefault();
    }

    onChange = e => {
        console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name] : e.target.value,
        });
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    name="title"
                    onChange={this.onChange} 
                    value={this.state.title} 
                    type="text" 
                    placeholder="Write a task." />
                <br />
                <br />
                <textarea 
                    name="description"
                    onChange={this.onChange} 
                    value={this.state.description}
                    placeholder="Write a description." />
                <input type="submit" />
            </form>
        );
    }
}