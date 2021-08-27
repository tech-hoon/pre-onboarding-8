const size = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1440px',
};

const BLACK = '#37352f';
const LIGHT_BLACK = '#333333';
const GRAY = '#999999';
const SKYBLUE = '#65abda';

const ICON_COLOR = LIGHT_BLACK;

const theme = {
  mobile: `(max-width:${size.mobile})`,
  tablet: `(max-width:${size.tablet})`,
  desktop: `(max-width:${size.desktop})`,

  BLACK: BLACK,
  LIGHT_BLACK: LIGHT_BLACK,
  GRAY: GRAY,
  SKYBLUE: SKYBLUE,
  ICON_COLOR: ICON_COLOR,
};

export default theme;
