import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Arrow.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
const cx = classNames.bind(styles);
function Arrow({ children }) {
  return (
    <PopperWrapper className={cx('tooltip')}>
      {children}
      <div data-popper-arrow className={cx('arrow-popper')} />
    </PopperWrapper>
  );
}
Arrow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Arrow;
