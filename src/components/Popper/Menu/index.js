import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItems from './MenuItems';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => {
      <MenuItems key={index} data={item} />;
    });
  };
  return (
    <span>
      <Tippy
        interactive
        placement="bottom-start"
        render={(attrs) => (
          <div className={cx('content')} tabIndex="-1" {...attrs}>
            <PopperWrapper>{renderItems()}</PopperWrapper>
          </div>
        )}
      >
        {children}
      </Tippy>
    </span>
  );
}

export default Menu;
