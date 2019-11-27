import React from 'react';
import './App.css';
import tasks from './sample/tasks.json'

// Components
import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm'

console.log(tasks);

class App extends React.Component {
  
  state = {
    tasks: tasks
  }
  render(){
    return(
      <div>
        <TaskForm />
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
