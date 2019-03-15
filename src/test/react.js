import React,{Component} from 'react';
import ReactDOM from "react-dom";

class App extends Component{
    render(){
        return <div>{this.props.name}</div>;
    }

}
ReactDOM.render(<App name="sunine"/>,document.querySelector('.con'));
