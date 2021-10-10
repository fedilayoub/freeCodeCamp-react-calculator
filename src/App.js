import React  from 'react';
import Output from './components/Output';
import Syntax from './components/Syntax';
import Keypad from './components/Keypad';
import './App.css';

const isOperator = /[x/+‑]/,
  endsWithOperator = /[x+‑/]$/,
  endsWithNegativeSign = /\d[x/+‑]{1}‑$/;
 

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          initialValue: '0',
          previousValue: '0',
          expression: '',
          valueSign: 'pos',
          lastClicked: ''
        };
        this.MaxDig = this.MaxDig.bind(this);
        this.handleOperators = this.handleOperators.bind(this);
        this.handleEvaluate = this.handleEvaluate.bind(this);
        this.reset = this.reset.bind(this);
        this.handleDecimal = this.handleDecimal.bind(this);
        this.handleNumbers = this.handleNumbers.bind(this);
      }
    
      MaxDig() {
        this.setState({
          initialValue: 'Digit Limit Met',
          previousValue: this.state.initialValue
        });
        setTimeout(() => this.setState({ initialValue: this.state.previousValue }), 1000);
      }
    
      handleEvaluate() {
        if (!this.state.initialValue.includes('Limit')) {
          let expression = this.state.expression;
          while (endsWithOperator.test(expression)) {
            expression = expression.slice(0, -1);
          }
          expression = expression
            .replace(/x/g, '*')
            .replace(/‑/g, '-')
            .replace('--', '+0+0+0+0+0+0+');
          let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;
          this.setState({
            initialValue: answer.toString(),
            expression:
              expression
                .replace(/\*/g, '⋅')
                .replace(/-/g, '‑')
                .replace('+0+0+0+0+0+0+', '‑-')
                .replace(/(x | \/ | \+)‑/, '$1-')
                .replace(/^‑/, '-') +
              '=' +
              answer,
            previousValue: answer,
            evaluated: true
          });
        }
      }
    
      handleOperators(e) {
        if (!this.state.initialValue.includes('Limit')) {
          const value = e.target.value;
          const { expression, previousValue, evaluated } = this.state;
          this.setState({ initialValue: value, evaluated: false });
          if (evaluated ) {
            this.setState({ expression: previousValue + value });
          } else if (!endsWithOperator.test(expression)) {
            this.setState({
              previousValue: expression,
              expression: expression + value
            });
          } else if (!endsWithNegativeSign.test(expression)) {
            this.setState({
              expression:
                (endsWithNegativeSign.test(expression + value) ? expression : previousValue) +
                value
            });
          } else if (value !== '‑')
           {
            this.setState({
              expression: previousValue + value
            });
          }
        }
      }
    
      handleNumbers(e) {
        if (!this.state.initialValue.includes('Limit')) {
          const { initialValue, expression, evaluated } = this.state;
          const value = e.target.value;
          this.setState({ evaluated: false });
          if (initialValue.length > 21) {
            this.MaxDig();
          } else if (evaluated) {
            this.setState({
              initialValue: value,
              expression: value !== '0' ? value : ''
            });
          } else {
            this.setState({
              initialValue:
                initialValue === '0' || isOperator.test(initialValue)
                  ? value
                  : initialValue + value,
              expression:
                initialValue === '0' && value === '0'
                  ? expression === ''
                    ? value
                    : expression
                  : /( [^.0-9]0|^0 )$/.test(expression)
                  ? expression.slice(0, -1) + value
                  : expression + value
            });
          }
        }
      }
    
      handleDecimal() {
        if (this.state.evaluated === true) {
          this.setState({
            initialValue: '0.',
            expression: '0.',
            evaluated: false
          });
        } else if (
          !this.state.initialValue.includes('.') &&
          !this.state.initialValue.includes('Limit')
        ) {
          this.setState({ evaluated: false });
          if (this.state.initialValue.length > 21) {
            this.MaxDig();
          } else if (
            endsWithOperator.test(this.state.expression) ||
            (this.state.initialValue === '0' && this.state.expression === '')
          ) {
            this.setState({
              initialValue: '0.',
              expression: this.state.expression + '0.'
            });
          } else {
            this.setState({
              initialValue: this.state.expression.match(/(-?\d+\.?\d*)$/)[0] + '.',
              expression: this.state.expression + '.'
            });
          }
        }
      }
    
      reset() {
        this.setState({
          initialValue: '0',
          previousValue: '0',
          expression: '',
          valueSign: 'pos',
          lastClicked: '',
          evaluated: false
        });
      }
render(){ 
   return (

    <div className="container">
      <h1>freeCodeCamp calculator</h1>
        <div className="calculator">
       
          <Syntax expression={this.state.expression.replace(/x/g, '⋅')} />
          <Output currentValue={this.state.initialValue} />
          <Keypad
            decimal={this.handleDecimal}
            evaluate={this.handleEvaluate}
            reset={this.reset}
            numbers={this.handleNumbers}
            operators={this.handleOperators}
          />
          </div>
          </div>
        
       
     
  );
}
}

export default App;
