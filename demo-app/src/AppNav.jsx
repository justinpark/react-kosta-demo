import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AppNav extends PureComponent {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link className="brand-logo" to="/">글로벌 소프트웨어 3강</Link>
          <ul class="right">
            <li>
              <Link to="/user">유저 설정</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

AppNav.propTypes = {

};

export default AppNav;
