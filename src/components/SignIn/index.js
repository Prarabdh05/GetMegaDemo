import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { PasswordForgetLink } from '../PasswordForget';
import { AuthUserContext } from '../Session';
import { Redirect } from 'react-router-dom';
import ReactGA from "react-ga";
import { Event } from "../Tracking";

const SignInPage = () => (
    <AuthUserContext.Consumer>
        {authUser =>
            authUser ? <Redirect to={ROUTES.HOME} push="true" /> : <div className="card cardPosition">
                <SignInForm />
                <span className="d-flex justify-content-center">
                    <SignInGoogle />
                    <SignInFacebook />
                </span>
                <PasswordForgetLink />
                <SignUpLink />
            </div>
        }
    </AuthUserContext.Consumer>
);

const INITIAL_STATE = {
    email: '',
    password: ''
};

class SignInGoogleBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        Event("Sign In", "User Signed In through Google", "Google Sign In");
        this.props.firebase
            .doSignInWithGoogle()
            .then(socialAuthUser => {
                this.setState({ error: null });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    render() {

        return (
            <span >
                <button className="socialLogin" onClick={this.onSubmit}>
                    <ReactGA.OutboundLink eventLabel="Logo" to="/" target="_self">
                        <i className="fab fa-google"></i>
                    </ReactGA.OutboundLink>
                </button>
            </span>
        );
    }
}
class SignInFacebookBase extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    onSubmit = event => {
        Event("Sign In", "User Signed In through Facebook", "Facebook Sign In");
        this.props.firebase
            .doSignInWithFacebook()
            .then(socialAuthUser => {
                this.setState({ error: null });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    render() {

        return (
            <span >
                <button className="socialLogin" onClick={this.onSubmit}>
                    <ReactGA.OutboundLink eventLabel="Logo" to="/" target="_self">
                        <i className="fab fa-facebook-f ficon"></i>
                    </ReactGA.OutboundLink>
                </button>
            </span>
        );
    }
}

class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        Event("Sign In", "User Signed In through Email", "Email Sign In");
        const { email, password } = this.state;
        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {

        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';

        return (
            <div className="card cardBorder">
                <h5 style={{ backgroundColor: 'rgb(184 216 236)' }} className="card-header white-text text-center py-4">
                    <strong>Login</strong>
                </h5>
                <div className="card-body px-lg-5 pb-1">
                    <form className="text-center" style={{ color: '#757575' }} onSubmit={this.onSubmit}>
                        <div className="md-form mt-3">
                            <input
                                className="form-control"
                                name="email"
                                value={email}
                                onChange={this.onChange}
                                type="email"
                                placeholder="Email Address"
                            />
                        </div>
                        <div className="md-form mt-3">
                            <input
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={this.onChange}
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                        <button className="btn btn-outline-info btn-block my-4" disabled={isInvalid} type="submit">Sign In</button>
                    </form>
                    {error && <p>{error.message}</p>}
                </div>
            </div>
        )
    }
}

const SignInLink = () => (
    <p className="signUpPos ">
        <span>Have an account?</span> <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </p>
);
const SignInForm = withRouter(withFirebase(SignInFormBase));
const SignInGoogle = withRouter(withFirebase(SignInGoogleBase));
const SignInFacebook = withRouter(withFirebase(SignInFacebookBase));

export { SignInForm, SignInLink };
export default SignInPage;