import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
  underline,
  to,
  href,
  className,
  notVisible = false,
  light,
  disabled,
  primary,
  children,
  onClick,
  ...passProps
}) {
  let Btn = 'button';
  const _props = {
    onClick,
    ...passProps,
  };
  if (to) {
    _props.to = to;
    Btn = Link;
  } else if (href) {
    _props.href = href;
    Btn = 'a';
  }
  const classes = cx('wrapper', {
    [className]: className,
    underline,
    notVisible,
    primary,
    light,
    disabled,
  });
  return (
    <Btn className={classes} {..._props}>
      <span>{children} </span>
    </Btn>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  underline: PropTypes.bool,
  to: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  notVisible: PropTypes.bool,
  light: PropTypes.bool,
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  onClick: PropTypes.func,
};
export default Button;
