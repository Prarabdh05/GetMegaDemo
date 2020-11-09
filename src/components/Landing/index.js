import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { Container } from '../../styled-components';
import { AuthUserContext } from '../Session';

const LandingPage = () => (

    <AuthUserContext.Consumer>

        { authUser =>
            authUser ? <Redirect to={ROUTES.HOME} push /> :
                <Container className="is-dark-text text-x-large mt-5 text-center ">
                    <Link to={ROUTES.SIGN_IN}>Login</Link>  <span style={{ color: 'white' }}>to get the Revenue Insights</span>
                </Container>
        }
    </AuthUserContext.Consumer>

);


export default LandingPage;