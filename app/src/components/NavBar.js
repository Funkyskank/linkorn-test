import React, { PureComponent } from 'react';
import { NavLink as Link } from 'react-router-dom';

class NavBar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  navToggle = () => {
    this.setState({
        active: !this.state.active
    });
  }

  render() {
    const menuClass = this.state.active ? "navbar-start navbar-menu is-active" : "navbar-start navbar-menu"
    return (
      <nav className="navbar">
        <div className="navbar-start">
          <a className="navbar-item">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
          </a>
        </div>

        <span className="navbar-toggle" onClick={this.navToggle}>
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div className={menuClass}>
          <Link to="/" exact className="navbar-item" activeClassName="is-active">
            Home
          </Link>
          <Link to="/about" className="navbar-item" activeClassName="is-active">
            About
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
