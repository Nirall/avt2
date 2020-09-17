import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './NavbarLink.css';

function NavbarLink(props) {
  let classAdd = '';
  if (props.path === props.location.pathname) {
    classAdd += ' navbar__link_active';
  }
  
  return (
    <Link to = { props.path } className = { 'navbar__link navbar__link_uppercase' + classAdd } >
      { props.name }
    </Link>
  )
}

export default withRouter(NavbarLink);