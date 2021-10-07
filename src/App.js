import React  from 'react';
import Output from './components/Output';
import Syntax from './components/Syntax';
import Keypad from './components/Keypad';

import './App.css';



class App extends React.Component {
  constructor(){
    super();

    this.state = {
        syntax:"",
        result: "0",
    }
}

onClick = button => {

    if(button === "="){
        this.calculate()
    }

    else if(button === "C"){
        this.reset()
    }
    else if(button === "CE"){
        this.backspace()
    }

    else {
        this.setState({
            syntax: this.state.syntax + button
        })
    }
};

calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.syntax) || "" ) + ""
    })
    } catch (e) {
        this.setState({
            result: "error"
        })
    }
};

calc = () => {
    if(this.state.result[0] === 0){
        this.setState({
            result: (eval(this.state.result.syntax(1)) || "" ) + ""
        })
  }else{
        this.setState({
        result: (eval(this.state.syntax) || "" ) + ""
    })
      };
};

reset = () => {
    this.setState({
        syntax:"",
        result: "0"
    })
};

backspace = () => {
    this.setState({
        syntax: this.state.syntax.slice(0, -1)
    })
};

handleDecimal = (e)=>{
  const result = e.target.value;
  if (!this.state.syntax.includes(".")) {
    this.setState({
      syntax: this.state.syntax + result,
      result: this.state.result + result
    })
  } else{
    return this.state;
  }
  
} 
render(){ 
   return (
    <div className="App">
       <div>
                <div className="calculator-body">
                    <h1 className="h1" >JavaScript Calculator</h1>
                    <Syntax syntax={this.state.syntax} />
                    <Output id="display" result={this.state.result}/>
                    <Keypad onClick={this.onClick} handleDecimal={this.handleDecimal} />
                </div>
            </div>
    </div>
  );
}
}

export default App;
