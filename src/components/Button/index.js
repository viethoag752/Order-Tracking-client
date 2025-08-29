import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ to, href, notVisible = false, light, disabled, primary, children, onClick, ...passProps }) {
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

export default Button;
