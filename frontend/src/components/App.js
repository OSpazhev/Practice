import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

// import Routing tools
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// connect component to redux
import { connect } from 'react-redux';
import { runTestAction } from '../actions/testaction';

//imports component
import Home from './home/Home';
import Account from './account/Account';
import Video from './video/Video';
import Notfound from './notfound/Notfound';

import { addHistory } from '../actions/historyaction';
import { userStatus } from '../actions/loginaction';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: createBrowserHistory()
    }
  }
  componentDidMount() {
    this.props.runTest("TestPassed");
    this.props.userStatus();
  }
  render() {
    this.props.addHistory(this.state.history);
    return (
      <Router history={this.state.history}>
        <div className="App">
          <Video />
          <Route exact={true} path={'/'} component={Home} />
          <Route path={'/account'} component={Account} />
          <Route path={'*'} component={Notfound} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  test: state.isTestPass,
  history: state.historyData,
  //video: state.videoStatus,
});
const mapDispatchToProps = dispatch => ({
  runTest: (mess) => { dispatch(runTestAction(mess)) },
  addHistory: (history) => { dispatch(addHistory(history)) },
  userStatus: () => { dispatch(userStatus()) },
});

App.propTypes = {
  runTest: PropTypes.func,
  addHistory: PropTypes.func,
  history: PropTypes.object,
  userStatus: PropTypes.func,
  //video: PropTypes.object,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
