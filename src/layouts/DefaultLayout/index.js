import styles from './DefaultLayout.module.scss';
import classnames from 'classnames/bind';

import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const cx = classnames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
