import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '~/assets/icons';
const MENU_ITEMS = [
  {
    title: 'Profile',
    icon: <FontAwesomeIcon icon="fa-solid fa-user" />,
    to: '/',
  },
  {
    title: 'My Purchase',
    icon: <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />,
    to: '/',
  },
  {
    title: 'Log out',
    icon: <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />,
    to: '/',
  },
];
const LANGUAGE = [
  {
    code: 'en',
    title: 'English',
  },
  {
    code: 'vi',
    title: 'Vietnamese',
  },
];

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
          <Menu items={MENU_ITEMS} placeMent="bottom-start" className={cx('user-poper')}>
            <Button href="/" className={cx('user-action')}>
              <FontAwesomeIcon icon="fa-solid fa-user" />
            </Button>
          </Menu>
          <Button href="/" className={cx('user-action')}>
            <FontAwesomeIcon icon="fa-solid fa-bell" />
          </Button>
        </div>
      </div>
      <div className={cx('navbar')}>
        <div className={cx('left-nav')}>
          <ul className={cx('nav-list')}>
            <li className={cx('nav-item')}>
              <Button href="/">Home</Button>
            </li>
            <li className={cx('nav-item')}>
              <Button href="/">Products</Button>
            </li>
            <li className={cx('nav-item')}>
              <Button href="/">About</Button>
            </li>
            <li className={cx('nav-item')}>
              <Button href="/">Contact</Button>
            </li>
          </ul>
        </div>
        <div className={cx('right-nav')}>
          <div className={cx('language')}>
            <img src="/assets/images/global.svg" alt="Language" height="20px" />
            <span style={{ fontSize: '15px', marginBottom: '5px', fontWeight: 'bold' }}>VI</span>
            <span>
              <Menu items={LANGUAGE} placeMent="bottom" className={cx('language-poper')}>
                <img
                  src="/assets/images/drop.svg"
                  alt="Language"
                  height="6px"
                  style={{ marginBottom: '5px', paddingRight: '5px' }}
                />
              </Menu>
            </span>
          </div>
          <Button underline to="/r" primary>
            Register
          </Button>
          <Button underline to="/r" primary>
            Log in
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
