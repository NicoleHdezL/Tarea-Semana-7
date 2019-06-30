import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Contador extends Component{
  constructor(props){
    super(props);
    this.state={
      contador:0
    }
  }
  render(){
    return(
      <div>
      <p>Contador : {this.state.contador}</p>
      <button onClick={()=>{
        this.setState({
          contador: this.state.contador+1 
      })
        }}> Aumentar </button>
      <button onClick={()=>{
      let contador = this.state.contador
      if(contador>0) {
      this.setState({contador:contador-1})
    }
        }}> Disminuir </button>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
      <Contador/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
