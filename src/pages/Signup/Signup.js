import styles from './Signup.module.scss';
import classNames from 'classnames/bind';
import { useCallback, useState } from 'react';

const cx = classNames.bind(styles);
function Signup() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleRegisterBtn = useCallback(() => {
    console.log(phoneNumber);
  }, [phoneNumber]);
  return (
    <div className={cx('wrapper')}>
      <form method="">
        <input
          type="number"
          placeholder="Phone number"
          className={cx('phone-number-input')}
          value={phoneNumber}
          onChange={handleNumberChange}
        />
        <button type="submit" className={cx('register-button')} onClick={handleRegisterBtn}>
          NEXT
        </button>
      </form>
    </div>
  );
}

export default Signup;
