import { Link } from 'react-router-dom';

import Image from '~/components/Image';
import config from '~/config';
import styles from './Logo.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Logo({ className }) {
  return (
    <div className={cx('logo-wrapper', className)}>
      <div className={cx('logo')}>
        <Link to={config.routes.home}>
          <Image alt="logo" src="/assets/images/logo.png"></Image>
        </Link>
      </div>
    </div>
  );
}

export default Logo;
