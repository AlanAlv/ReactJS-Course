import React from 'react'

export default class TaskForm extends React.Component {
    
    state = {
        title: '',
        description: ''
    }

    onSubmit = e  => {
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();
    }

    onChange = e => {
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