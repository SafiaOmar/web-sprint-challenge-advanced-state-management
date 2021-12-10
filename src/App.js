import React, { Component } from "react";
import {connect} from 'react-redux'
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import {fetchSmurfs} from './actions'

class App extends Component {
  componentDidMount(){
    console.log("didMount")
    this.props.dispatch(fetchSmurfs());
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}


export default connect(null) (App);
