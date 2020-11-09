import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null
};

class PasswordChangeForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { passwordOne } = this.state;
        this.props.firebase
            .doPasswordUpdate(passwordOne)
            .then(() => {
                this.setState({ ...this.INITIAL_STATE });
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
        const { passwordOne, passwordTwo, error } = this.state;
        const isInvalid =
            passwordOne !== passwordTwo || passwordOne === '';
        return (
            <form className="text-center" style={{ color: '#757575' }} onSubmit={this.onSubmit}>

                <div className="md-form mt-3">
                    <input
                        className="form-control"
                        name="passwordOne"
                        value={passwordOne}
                        onChange={this.onChange}
                        type="password"
                        placeholder="New Password"
                    />
                </div>
                <div className="md-form mt-3">
                    <input
                        className="form-control"
                        name="passwordTwo"
                        value={passwordTwo}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Confirm New Password"
                    />
                </div>
                <button className="btn btn-outline-info btn-block my-4" disabled={isInvalid} type="submit">Reset Password</button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

export default withFirebase(PasswordChangeForm);