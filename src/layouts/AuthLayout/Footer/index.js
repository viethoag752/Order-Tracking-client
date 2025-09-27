import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx('wrapper')}>
      <div className={cx('content')}>Footer</div>
    </footer>
  );
}

export default Footer;
