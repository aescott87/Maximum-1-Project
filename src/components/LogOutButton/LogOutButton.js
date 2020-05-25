import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//Import components to be used on this component
import Nav from 'react-bootstrap/Nav';

const LogOutButton = props => (
  <Nav.Link
    // This button shows up in multiple locations and is styled differently
    // because it's styled differently depending on where it is used, the className
    // is passed to it from it's parents through React props
    onClick={() => props.dispatch({ type: 'LOGOUT' })}
  ><Link>Log Out</Link>
  </Nav.Link>
);

// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action
export default connect()(LogOutButton);