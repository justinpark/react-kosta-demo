import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class AppNav extends PureComponent {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">글로벌 소프트웨어 3강 (AppNav)</a>
        </div>
      </nav>
    );
  }
}

AppNav.propTypes = {

};

export default AppNav;
