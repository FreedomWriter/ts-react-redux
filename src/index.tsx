import React from 'react';
import ReactDOM from 'react-dom';
import "./app.css"

interface AppProps {
    color: string;
}

class App extends React.Component<AppProps> {

    state = { counter: 0}

    onIncrement = ():void => {this.setState({
        counter: this.state.counter + 1
    })}
    onDecrement = ():void => {this.setState({
        counter: this.state.counter - 1
    })}

    render() {
        return (
            <div className="container">
                <div className="button-container">
                    <button onClick={this.onIncrement}>Increment</button>
                    <button onClick={this.onDecrement}>Decrement</button>
                </div>
                <div className="counter">
                    {this.state.counter}
                </div>
            </div>
  );}
}

export default App;
ReactDOM.render(
  <React.StrictMode>
    <App color="red"/>
  </React.StrictMode>,
  document.getElementById('root')
);


