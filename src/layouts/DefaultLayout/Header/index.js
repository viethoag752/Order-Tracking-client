import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Icons from '~/assets/icons';

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('navbar')}></div>
      <div className={cx('search-wrapper')}>
        <div className={cx('logo')}>
          <img
            class="my_logo_img max-width-100"
            src="https://www.logomaker.com/api/main/images/1j+ojVBCOMkX9Wytehe43D6kh...+BrBZOnRbEwXs1M3EMoAJtlyUrhPNi9PQ8"
          ></img>
        </div>
        <div className={cx('search')}>
          <input placeholder="Search..." spellCheck="false" />
          <button className={cx('clear')}>
            <Icons icon="fa-solid fa-circle-xmark" />
          </button>
          <button className={cx('search-btn')}>{/* search */}</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
