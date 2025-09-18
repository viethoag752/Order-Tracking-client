import Headless from '@tippyjs/react/headless';
import { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';
import MenuItems from './MenuItems';
import Arrow from '~/components/Popper/Arrow';

const cx = classNames.bind(styles);
function Menu({ visible, children, items = [], placeMent = 'auto', className, context = {} }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.Children;
      return (
        <MenuItems
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.Children]);
            }
            if (context) {
              context.setLanguage(item.code);
            }
          }}
        />
      );
    });
  };

  const handleBackToParent = () => setHistory((prev) => prev.slice(0, 1));

  return (
    <span>
      <Headless
        visible={visible}
        interactive={true}
        delay={[0, 200]}
        placement={placeMent}
        render={(attrs) => (
          <div className={cx('menu-items', className)} tabIndex="-1" {...attrs}>
            <Arrow>{renderItems()}</Arrow>
          </div>
        )}
        onHide={handleBackToParent}
      >
        {children}
      </Headless>
    </span>
  );
}
Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  placeMent: PropTypes.string,
  className: PropTypes.string,
};

export default Menu;
