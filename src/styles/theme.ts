const size = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1440px',
};

const theme = {
  size: {
    mobile: `(max-width:${size.mobile})`,
    tablet: `(max-width:${size.tablet})`,
    desktop: `(max-width:${size.desktop})`,
  },
  color: {
    BLACK: '#37352f',
    LIGHT_BLACK: '#333333',
    GRAY: '#999999',
    SKYBLUE: '#65abda',
    ICON_COLOR: '#333333',
    TRANSPARENT: '#00FFFFFF',
  },
};
export default theme;
