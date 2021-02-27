import React ,{Component} from 'react';
import './App.css';
import Header from './Components/Header';
import StateData from './Components/StateData'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router ,
  Link,
  Route,
  Switch
} from 'react-router-dom';
class App extends Component{
  constructor(){
    super();
    this.state={
      serchKey:''
    }
  }

 
  onSerchKeyUpdate=(serchKey)=>{
    this.setState({serchKey})
}

  render(){
    return(
      <div className="container-fluid" style={{paddingRight:'0px',paddingLeft:'0px'}}>
          <Router>
            <Header onSerchKeyUpdate={this.onSerchKeyUpdate}/>
            <Switch>
              <Route exact path="/">
                <StateData serchKey={this.state.serchKey}/>
              </Route>
              <Route exact path="/india">
                <StateData serchKey={this.state.serchKey}/>
              </Route>
            </Switch>
          </Router>
      </div>
    )
    
  }
}


export default App;
