import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '~/assets/icons';
import Logo from '~/components/Logo';
const currentUser = true;
const cx = classNames.bind(styles);
function Header({ title }) {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('content')}>
        <Logo />
        <div className={cx('logo-text')}>{title}</div>
      </div>
    </header>
  );
}
Header.prototype = {
  title: PropTypes.string.isRequired,
};
export default Header;
