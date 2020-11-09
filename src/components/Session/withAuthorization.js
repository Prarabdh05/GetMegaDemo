import React from 'react';
import * as ROUTES from '../../constants/routes';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import { AuthUserContext } from './index';
const withAuthorization = (condition) => Component => {
    class withAuthorizationClass extends React.Component {

        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUSer => {
                    if (!condition(authUSer)) {
                        this.props.history.push(ROUTES.SIGN_IN);
                    }
                }
            );
        }

        componentWillUnmount() {
            this.listener();
        }
        render() {
            return (
                <AuthUserContext.Consumer>
                    {
                        authUSer =>
                            condition(authUSer) ? <Component {...this.props} /> : null

                    }
                </AuthUserContext.Consumer>
            );
        }
    }

    return compose(withRouter, withFirebase)(withAuthorizationClass);
};

export default withAuthorization;