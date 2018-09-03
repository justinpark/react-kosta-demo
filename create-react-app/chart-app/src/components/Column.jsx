import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, responsive } from '../withStyles';

const MAX_COLUMNS = 12;
const COLUMNS_RANGE = Array(MAX_COLUMNS).fill('').map((_, i) => i + 1);
const OFFSET_RANGE = Array(MAX_COLUMNS + 1).fill('').map((_, i) => i);
const PULL_OPTIONS = ['left', 'right'];

function getColumnStyleName(breakpoint, size) {
  return `column-${breakpoint}-${size}`;
}

function getOffsetStyleName(breakpoint, size, pull) {
  return `offset-${breakpoint}-${size}-${pull}`;
}

class Column extends PureComponent {
  render() {
    const { css, styles, children, pull, sm, md, lg, smOffset, mdOffset, lgOffset } = this.props;

    return (
      <div
        {...css(
          styles.column,
          sm && styles[getColumnStyleName('sm', sm)],
          md && styles[getColumnStyleName('md', md)],
          lg && styles[getColumnStyleName('lg', lg)],
          smOffset && styles[getOffsetStyleName('sm', smOffset, pull)],
          mdOffset && styles[getOffsetStyleName('md', mdOffset, pull)],
          lgOffset && styles[getOffsetStyleName('lg', lgOffset, pull)],
          pull === 'right' && styles.pullRight,
        )}
      >
        {children}
      </div>
    );
  }
}

Column.propTypes = {
  pull: PropTypes.bool,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
};
Column.defaultProps = {
  pull: 'left',
};

const columnStyles = (() => {
  const style = {};

  COLUMNS_RANGE.forEach((i) => {
    const widthPercent = `${(i / MAX_COLUMNS) * 100}%`;

    style[getColumnStyleName('sm', i)] = {
      width: widthPercent,
      float: 'left',
    };

    style[getColumnStyleName('md', i)] = {
      [responsive.mediumAndAbove]: {
        width: widthPercent,
        float: 'left',
      },
    };

    style[getColumnStyleName('lg', i)] = {
      [responsive.largeAndAbove]: {
        width: widthPercent,
        float: 'left',
      },
    };
  });

  OFFSET_RANGE.forEach((i) => {
    PULL_OPTIONS.forEach((j) => {
      const property = j === 'right' ? 'marginRight' : 'marginLeft';
      const widthPercent = `${(i / MAX_COLUMNS) * 100}%`;

      style[getOffsetStyleName('sm', i, j)] = {
        [property]: widthPercent,
      };

      style[getOffsetStyleName('md', i, j)] = {
        [responsive.mediumAndAbove]: {
          [property]: widthPercent,
        },
      };

      style[getOffsetStyleName('lg', i, j)] = {
        [responsive.largeAndAbove]: {
          [property]: widthPercent,
        },
      };
    });
  });

  return style;
})();
export default withStyles(({ responsive, unit }) => ({
  ...columnStyles,
  column: {
    paddingLeft: unit,
    paddingRight: unit,
    minHeight: 1,
    position: 'relative',
  },
  pullRight: {
    float: 'right',
    // need to add the breakpoints to overwrite the column styles
    [responsive.mediumAndAbove]: {
      float: 'right',
    },
    [responsive.largeAndAbove]: {
      float: 'right',
    },
  },
}))(Column);
