import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItems({ data, className, onClick }) {
  return (
    <Button onClick={onClick} className={cx('menu-item')} to={data.to}>
      {data.title}
    </Button>
  );
}
export default MenuItems;
