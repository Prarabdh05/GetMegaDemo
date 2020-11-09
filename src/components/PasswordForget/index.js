import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
const PasswordForgetPage = () => (
    <div className="card cardPosition">
        < PasswordForgetForm />
    </div>
);

const INITIAL_STATE = {
    email: '',
    error: null,
}
class passwordForgetFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const email = this.state.email;

        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
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
        const { email, error } = this.state;
        const isInvalid = email === '';

        return (
            <div className="card cardBorder">
                <h5 style={{ backgroundColor: 'rgb(184 216 236)' }} className="card-header white-text text-center py-4">
                    <strong>Password Reset</strong>
                </h5>
                <div className="card-body px-lg-5 pb-1">
                    <form className="text-center" style={{ color: '#757575' }} onSubmit={this.onSubmit}>
                        <p className="message">Forgotten your password? Enter your e-mail address below, and we'll send you an e-mail allowing you to reset it.</p>

                        <div className="md-form mt-3">
                            <input
                                className="form-control"
                                name="email"
                                value={email}
                                onChange={this.onChange}
                                type="email"
                                placeholder="Email Address"
                                required="true"
                            />
                        </div>
                        <button class="btn btn-success btn-block z my-4" disabled={isInvalid} type="submit">Reset My Password</button>
                    </form>
                    {error && <p>{error.message}</p>}
                </div>
            </div>
        );
    }

}
const PasswordForgetLink = () => (
    <p className="pwforgetPos">
        <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
    </p>
)

export default PasswordForgetPage;
const PasswordForgetForm = withFirebase(passwordForgetFormBase);
export { PasswordForgetLink, PasswordForgetForm };