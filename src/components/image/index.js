import { forwardRef } from 'react';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const Image = forwardRef(({ alt, ...props }, ref) => {
  return <img ref={ref} alt={alt} {...props} />;
});

export default Image;
