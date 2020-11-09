import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import { Container, Nav } from '../../styled-components';


const Navigation = () => (

    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer>
    </div>
)
const NavigationAuth = () => (
    <Nav className="navbar navbar-expand fixed-top bgcolor">
        <Container className="navbar-brand h1 mb-0 text-large font-medium">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link navText1" to={ROUTES.HOME}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link navText1" to={ROUTES.ACCOUNT}>Account</Link>
                </li>
            </ul>
        </Container>
        <Container className="navbar-nav ml-auto">
            <span>
                <SignOutButton />
            </span>
        </Container>
    </Nav>


);
const NavigationNonAuth = () => (
    <Nav className="navbar navbar-expand  fixed-top bgcolor">

        <Container className="navbar-brand h1 mb-0 text-large font-medium">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link navText" to={ROUTES.LANDING}>Explore</Link>
                </li>

            </ul>
        </Container>
        <Container className="navbar-nav ml-auto">
            <span className="nav-item">
                <Link className="nav-link navText btn btn-success btn-sm px-2 py-1" to={ROUTES.SIGN_IN}>Sign In</Link>
            </span>
        </Container>
    </Nav>
);

export default Navigation;