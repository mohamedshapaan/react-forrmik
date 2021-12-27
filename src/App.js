import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import { Field, Formik } from 'formik';
class App extends Component{
  valo=(props)=>{
    console.log(props);
  }
  fomy=(props)=>{
    return<form onSubmit={props.handleSubmit} >
      <Field  type="email" name="email" required></Field>
      <Field  type="password" name="pass" required></Field>
      <button type='submit'>submit</button>
    </form>
  }
  render(){
    return <div>

      <Formik
        initialValues={{email:"fdbfdbdf",
                        pass:"ngnbtg",
                      }}
        onSubmit={this.valo}
        render={this.fomy}
      />
    </div>
  }
}

export default App;
