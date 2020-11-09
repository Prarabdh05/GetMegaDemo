import React, { Component } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import {SignInLink} from '../SignIn';
import { AuthUserContext } from '../Session';

const SignUpPage = () => (   
    <AuthUserContext.Consumer>
        { authUser =>
        authUser ?<Redirect to={ROUTES.HOME} push /> :<div className="card cardPosition">  
        <SignUpForm/>
        <SignInLink />
    </div>

        }
    </AuthUserContext.Consumer>


);

const INITIAL_STATE = {
username: '',
email: '',
passwordOne: '',
passwordTwo: '',
error: null,
};

class SignUpFormBase extends Component {
constructor(props) {
super(props);
this.state = {...INITIAL_STATE};
};

onSubmit = event => {
    
    const {email, passwordOne} = this.state;
//     const dbs = this.props.firebase.db;
//    dbs.collection("cities").doc("LA").set({
//        name: "Los Angeles",
//        state: "CA",
//        country: "USA"
//    });
    this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
            this.setState({...INITIAL_STATE});
            this.props.history.push(ROUTES.HOME);
        })  
        .catch(error => {
            this.setState({error });
        });
        event.preventDefault();



};

onChange = event => {

    this.setState({ [event.target.name]: event.target.value });
};

render() {
const{
    username,
    email,
    passwordOne,
    passwordTwo,
    error
} = this.state;


const isInvalid = 
    passwordOne!== passwordTwo || passwordOne=== '' || email === '' || username === '';

return  (
    <div className="card cardBorder">
            <h5 style={{ backgroundColor: 'rgb(184 216 236)' }} className="card-header white-text text-center py-4">
                <strong>Sign Up</strong>
            </h5>
        <div className="card-body px-lg-5 pb-1">
            <form className="text-center" style={{ color: '#757575' }} onSubmit={this.onSubmit}>
                <div className="md-form mt-3">
                    <input 
                    className="form-control"
                        name="username"
                        value={username}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Full Name"
                        required = {true}
                    />
                 </div>
                <div className="md-form mt-3">
                        <input
                            className="form-control"
                            name="email"
                            value={email}
                            onChange={this.onChange}
                            type="email"
                            placeholder="Email Address"
                            required = {true}
                        />
                    </div>

                <div className="md-form mt-3">
                    <input 
                        className="form-control"
                        id = "password"
                        name = "passwordOne"
                        value = {passwordOne}
                        onChange = {this.onChange}
                        type = "password"
                        placeholder = "Password"
                        required = {true}
                    />
                    </div>
                <div className="md-form mt-3">
                    <input 
                        className="form-control"
                        id="confirm_password"
                        name = "passwordTwo"
                        value = {passwordTwo}
                        onChange = {this.onChange}
                        type = "password"
                        placeholder = "Confirm Password"
                        required = {true}
                        />
                    
                    </div>
                <button className="btn btn-outline-info btn-block  my-4" disabled={isInvalid} type="submit">Sign Up</button>
            </form>
            {error && <p>{error.message}</p>}
        </div>
    </div>
    
);
}
}

const SignUpLink = () =>(
<p className="signUpPos">
Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
</p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;
export {SignUpForm, SignUpLink};