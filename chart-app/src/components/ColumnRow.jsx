import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Column from './Column';
import { withStyles } from '../withStyles';

class ColumnRow extends PureComponent {
  render() {
    const { children, css, styles } = this.props;
    return (
      <div {...css(styles.row)}>
        {children}
      </div>
    );
  }
}

ColumnRow.propTypes = {
  children: PropTypes.arrayOf(Column),
};

export default withStyles(({ unit, clearfix }) => ({
  row: {
    ...clearfix,
    marginLeft: -unit,
    marginRight: -unit,
  },
}))(ColumnRow);
