import React from 'react';
import './App.css';
import tasks from './sample/tasks.json'
import Tasks from './components/Tasks'

console.log(tasks);

class App extends React.Component {
  
  state = {
    tasks: tasks
  }
  render(){
    return(
      <div>
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
