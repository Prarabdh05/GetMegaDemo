import React from 'react';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization, AuthUserContext } from '../Session';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const AccountPage = () => (
    <AuthUserContext.Consumer>
        {
            authUser => (
                <div className="card cardBorder cardPosition">
                    <div className="card-body px-lg-5 pb-1 text-center">
                        <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
                        <PasswordChangeForm />
                    </div>
                </div>
            )
        }

    </AuthUserContext.Consumer>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);