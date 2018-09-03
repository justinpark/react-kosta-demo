const tableContent = {
  content: '" "',
  display: 'table',
};

const clearfix = {
  ':before': tableContent,
  ':after': {
    ...tableContent,
    clear: 'both',
  },
};

export const MEDIUM_AND_ABOVE = 'mediumAndAbove';
export const LARGE_AND_ABOVE = 'largeAndAbove';
export const XLARGE_AND_ABOVE = 'xlargeAndAbove';
export const BREAKPOINT_NAMES = {
  XLARGE: 'xlarge',
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
};

export const PROGRESSIVE_BREAKPOINT_NAMES = {
  MEDIUM_AND_ABOVE,
  LARGE_AND_ABOVE,
  XLARGE_AND_ABOVE,
};

export const breakpoints = {
  [BREAKPOINT_NAMES.XLARGE]: 1440,
  [BREAKPOINT_NAMES.LARGE]: 1128,
  [BREAKPOINT_NAMES.MEDIUM]: 744,
  [BREAKPOINT_NAMES.SMALL]: 327,
};

const responsive = {
  // DEPRECATED: please use largeAndAbove
  [BREAKPOINT_NAMES.LARGE]: `@media (min-width: ${breakpoints[BREAKPOINT_NAMES.LARGE]}px)`,

  // DEPRECATED: please treat small+medium as default, and progressively enhance with largeAndAbove
  [BREAKPOINT_NAMES.MEDIUM]: `@media (max-width: ${breakpoints[BREAKPOINT_NAMES.LARGE] - 1}px)`,

  [BREAKPOINT_NAMES.SMALL]: `@media (max-width: ${breakpoints[BREAKPOINT_NAMES.MEDIUM] - 1}px)`,

  [MEDIUM_AND_ABOVE]: `@media (min-width: ${breakpoints[BREAKPOINT_NAMES.MEDIUM]}px)`,

  [LARGE_AND_ABOVE]: `@media (min-width: ${breakpoints[BREAKPOINT_NAMES.LARGE]}px)`,

  [XLARGE_AND_ABOVE]: `@media (min-width: ${breakpoints[BREAKPOINT_NAMES.XLARGE]}px)`,

  print: '@media print',
};

export default {
  responsive,
  clearfix,
  size: {
    xg: 24,
    lg: 18,
    md: 14,
    sm: 12,
    xs: 10,
  },
  lineHeight: {
    xg: '60px',
    lg: '54px',
    md: '36px',
    sm: '24px',
    xs: '18px',
  },
  color: {
    primary: '#03a9f4',
    secondary: '#795548',
    white: '#FFFFFF',
    gray: '#CCCCCC',
  },
  unit: 8,
};
