import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import AccountPage from '../Account';
import HomePage from '../Home';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import * as Routes from '../../constants/routes';
import { withAuthentication } from '../Session';
import { PageView, initGA } from '../Tracking';

class App extends Component {

    componentDidMount() {
        initGA('UA-182436316-1');
        PageView();
    }

    render() {
        return (
            <Router>
                <div>
                    <Navigation />
                    <Route exact path={Routes.LANDING} component={LandingPage} />
                    <Route path={Routes.SIGN_IN} component={SignInPage} />
                    <Route path={Routes.SIGN_UP} component={SignUpPage} />
                    <Route path={Routes.ACCOUNT} component={AccountPage} />
                    <Route path={Routes.HOME} component={HomePage} />
                    <Route path={Routes.PASSWORD_FORGET} component={PasswordForgetPage} />
                </div>
            </Router>
        );
    }
}
export default withAuthentication(App);