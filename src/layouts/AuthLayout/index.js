import styles from './AuthLayout.module.scss';
import classNames from 'classnames/bind';
import Logo from '~/components/Logo';
import Header from './Header';
import Footer from './Footer';

import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function AuthLayout({ children }) {
  const authLocation = useLocation();
  const title = authLocation.pathname.includes('signup') ? 'Sign Up' : 'Log In';
  const redirectPath = title === 'Log In' ? 'signup' : 'login';

  return (
    <div className={cx('wrapper')}>
      <Header title={title} />
      <div className={cx('container')}>
        <div className={cx('logo-content')}>
          <Logo className={cx('steady-height')} />
          <div className={cx('quote-content')}>
            <h2>Globe Transport</h2>
            Connecting Goods, Connecting People
          </div>
        </div>
        <div className={cx('content')}>
          <div className={cx('form-content')}>
            <div className={cx('form-header')}>
              <span>{title}</span>
            </div>
            <div className={cx('form-body')}>
              {children}
              <div className={cx('forgot-password')}>{title === 'Log In' ? 'Forgot password?' : ''}</div>
              <div className={cx('surplus-method')}>
                <div className={cx('divider')}>OR</div>
                <div className={cx('social')}>
                  <div className={cx('social-btn')}>Facebook</div>
                  <div className={cx('social-btn')}>Google</div>
                </div>
              </div>
            </div>
            <div className={cx('form-footer')}>
              <div className={cx('sign-up')}>
                {title === 'Log In' ? 'New to G-Transport?' : 'Already have an account?'}{' '}
                <a href={`/c/${redirectPath}`}>{title === 'Log In' ? 'Sign Up' : 'Login'}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AuthLayout;
