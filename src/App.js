import React, {Component} from 'react';
import {Switch, Route, withRouter} from "react-router-dom";
import * as userAction from './store/action/user';
import {connect} from 'react-redux';
import Header from './Components/Header';
import Home from "./Screens/Home";
import MovieDetail from "./Screens/MovieDetail";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    let pathArray = this.props.location.pathname.split('/');
    return (
      <>
        {pathArray && pathArray.length && pathArray[1] !== 'movies' && <Header />}
        <Switch>
          <Route path="/movies/:id">
            <MovieDetail />
          </Route>
          <Route path="/favourite">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(userAction.getUser())
});

export default withRouter(connect(null, mapDispatchToProps)(App));
