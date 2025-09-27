import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { login } from '~/services/authService';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Login() {
  const [fields, setFields] = useState({
    username: 'hoang1',
    password: 'hoang1',
  });
  const setFieldsValue = ({ target: { name, value } }) => {
    setFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await login({ param: fields });
      console.log(res);
      if (res?.token) {
        localStorage.setItem('token', res.token);
        alert('Login thành công!');
      }
    } catch (err) {
      console.error(err);
      alert('Login thất bại!');
    }
  };
  return (
    <div className={cx('wrapper')}>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          placeholder="Phone number / Username / Email"
          className={cx('login-input')}
          value={fields.username}
          onChange={setFieldsValue}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className={cx('login-input')}
          value={fields.password}
          onChange={setFieldsValue}
        />
        <button type="submit" className={cx('login-button')}>
          LOG IN
        </button>
      </form>
    </div>
  );
}

export default Login;
