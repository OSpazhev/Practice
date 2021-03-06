import React, { Component } from 'react';
import './Account.css';
import PropTypes from 'prop-types';

// connect component to redux
import { connect } from 'react-redux';

import { Route } from 'react-router-dom';

//Import components
import Register from '../register/Register';
import Login from '../login/Login';
import Langselect from '../langselect/Langselect';
import Profile from '../profile/Profile';
import Forgotpassword from '../forgotpassword/Forgotpassword';

// import assets
import tokensale from '../../assets/tokensale.png';
import logo2 from '../../assets/logo2.png';

class Account extends Component {
  render() {
    return (
      <div className="Account">
        {/* <div className="Loading-container">
          <div className="Loading"></div>
          <b>Load</b>
        </div> */}
        <header className="Account-header">
          <div className="Account-navbar">
            <a href="/" className="Account-brand">
              <img src={logo2} className="Account-logo" alt="logo" />
            </a>
            <div className="Account-button-container">
              <Langselect />
              <div className="Account-button-link">
                <img src={tokensale} />
              </div>
            </div>
          </div>
        </header>
        <main className="Account-main">
          <Route exact={true} path={"/account"} component={Profile} />
          <Route exact={true} path={"/account/register"} component={Register} />
          <Route exact={true} path={"/account/login"} component={Login} />
          <Route exact={true} path={"/account/forgot_password"} component={Forgotpassword} />
        </main>
        <footer className="Account-footer">
          <div className="Account-footer-container">
            <div className="Account-footer-copyright">
              @ 2018 Squeezer
            </div>
            <div className="Account-footer-link-container">
              <a href="https://tokensale.squeezer.io/docs/white-paper-final-ru-RU.pdf" target="_blank" className="Account-footer-link">{this.props.lang.account.whitepaper}</a>
              <a href="https://tokensale.squeezer.io/docs/token-terms.pdf" target="_blank" className="Account-footer-link">{this.props.lang.account.terms}</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

Account.propTypes = {
  lang: PropTypes.object,
}
const mapStateToProps = state => ({
  // some props
  lang: state.langData,
});
const mapDispatchToProps = dispatch => ({
  // some action creators
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);