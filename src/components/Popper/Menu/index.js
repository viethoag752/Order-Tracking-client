import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItems from './MenuItems';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);
function Menu({ children, items = [], placeMent = 'auto', className }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItems key={index} data={item} />);
  };
  return (
    <span>
      <Tippy
        arrow={true}
        interactive={true}
        delay={[0, 200]}
        placement={placeMent}
        render={(attrs) => (
          <div className={cx('menu-items', className)} tabIndex="-1" {...attrs}>
            <PopperWrapper data-popper-arrow="true">{renderItems()}</PopperWrapper>
          </div>
        )}
      >
        {children}
      </Tippy>
    </span>
  );
}

export default Menu;
