import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '~/assets/icons';

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('')}></div>
      <div className={cx('search-wrapper')}>
        <div className={cx('logo')}>
          <img
            className={cx('my_logo_img max-width-100')}
            alt="logo"
            src="https://www.logomaker.com/api/main/images/1j+ojVBCOMkX9Wytehe43D6kh...+BrBZOnRbEwXs1M3EMoAJtlyUrhPNi9PQ8"
          ></img>
        </div>
        <div className={cx('search')}>
          <input placeholder="Search..." spellCheck="false" />
          <button className={cx('clear-btn')}>
            <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />
          </button>
          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </button>
        </div>
        <div className={cx('actions')}>
          <Button href="/" className={cx('status-action')}>
            <FontAwesomeIcon icon="fa-solid fa-bell" />
          </Button>
          <a href="/" className={cx('status-action')}>
            <FontAwesomeIcon icon="fa-solid fa-user" />
          </a>
        </div>
      </div>
      <div className={cx('navbar')}>
        <div className={cx('left-nav')}>
          <ul className={cx('nav-list')}>
            <li className={cx('nav-item')}>
              <a href="/">Home</a>
            </li>
            <li className={cx('nav-item')}>
              <a href="/">Products</a>
            </li>
            <li className={cx('nav-item')}>
              <a href="/">About</a>
            </li>
            <li className={cx('nav-item')}>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className={cx('right-nav')}>
          <div className={cx('language')}>
            <img src="/assets/images/global.svg" alt="Language" height="20px" />
            <span style={{ fontSize: '20px', marginBottom: '5px', fontWeight: 'bold' }}>VI</span>
            <img src="/assets/images/drop.svg" alt="Language" height="8px" style={{ marginBottom: '5px' }} />
          </div>
          <Button notVisible to="/r" primary>
            Register
          </Button>
          <Button notVisible to="/r" primary>
            Log in
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
