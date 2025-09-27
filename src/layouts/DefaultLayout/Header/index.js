import config from '~/config';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Language from '~/components/Language';
import Search from '~/components/Search';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line
import { library } from '~/assets/icons';
import { Link } from 'react-router-dom';
import Logo from '~/components/Logo';

const currentUser = true;
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
    code: 'EN',
    title: 'English',
    Children: {
      title: 'test',
      data: [
        {
          title: 'test-1',
          code: 'test-1',
        },
        {
          title: 'test-2',
          code: 'test-2',
        },
      ],
    },
  },
  {
    code: 'VI',
    title: 'Vietnamese',
  },
];

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('search-wrapper')}>
        <div className={cx('logo')}>
          <Logo />
        </div>
        <Search />
        <div className={cx('actions')}>
          {currentUser ? (
            <Menu items={MENU_ITEMS} placeMent="bottom-start" className={cx('user-popper')}>
              <Button href="/" className={cx('user-action')}>
                <FontAwesomeIcon icon="fa-solid fa-user" />
              </Button>
            </Menu>
          ) : (
            <span></span>
          )}

          <Menu className={cx('alert-popper')}>
            <Button href="/" className={cx('user-action')}>
              <FontAwesomeIcon icon="fa-solid fa-bell" />
            </Button>
          </Menu>
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
          <Language Languages={LANGUAGE} />
          {currentUser ? (
            <span></span>
          ) : (
            <>
              <Button underline to="/r" primary>
                Register
              </Button>
              <Button underline to="/r" primary>
                Log in
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
