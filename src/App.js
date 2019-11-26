import React from 'react';
import './App.css';


class HelloWorld extends React.Component {

  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render(){
    if (this.state.show){
      return (
        <div id="hello">
        <h3>{this.props.subtitle}</h3>
        {this.props.myText}
        <button onClick={this.toggleShow   }>Toggle Show</button>
      </div>
      );
    }
    else{
      return ( 
      <h1>There are not elements
      <button onClick={this.toggleShow }> Toggle Show</button>

      </h1>

      );
    }
  }
}

/*
function HelloWorld(props) {
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.myText}
    </div>
  );
}

class App extends React.Component {
  render(){
    return (
      <div>
        This is my component <HelloWorld/>
      </div>
    )
  }
}

const App = () => 
  <div>
    This is my component <HelloWorld/>
  </div>
*/
function App(props) {
  return (
    <div>
      This is my component: 
      <HelloWorld myText="Hello Alan" subtitle="Loremp ipsum"/> 
      <HelloWorld myText="Hola mundo"  subtitle="Qwerty"/>
      <HelloWorld myText="Hola"  subtitle="Asdf"/>
    </div>
  );
}

export default App;
