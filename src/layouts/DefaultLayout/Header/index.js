import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '~/assets/icons';

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx('wrapper')}>
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
        <div className={cx('actions')}></div>
      </div>
      <div className={cx('navbar')}>
        <ul className={cx('nav-list')}>
          <li className={cx('nav-item')}>Home</li>
          <li className={cx('nav-item')}>Products</li>
          <li className={cx('nav-item')}>About</li>
          <li className={cx('nav-item')}>Contact</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
