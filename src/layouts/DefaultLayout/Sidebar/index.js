import { useState } from 'react';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
const SIDEBAR_MENU = [
  {
    title: 'Notification',
    code: 'noti',
    icon: '',
    children: {
      title: 'NotiSubMenu',
      data: [
        {
          title: 'Order Updates',
          to: '/c',
        },
        {
          title: 'Promotion',
          to: '/',
        },
        {
          title: 'Wallet Updates',
          to: '/',
        },
        {
          title: 'Website updates',
          to: '/',
        },
      ],
    },
  },
  {
    title: 'My Account',
    code: 'account',
    icon: '',
    children: {
      title: 'AccountSubMenu',
      data: [
        {
          title: 'Profile',
          to: '/c/profile',
        },
        {
          title: 'Payment',
          to: '/c/',
        },
        {
          title: 'Address',
          to: '/c/address',
        },
        {
          title: 'Change Password',
          to: '/',
        },
        {
          title: 'Notification Settings',
          to: '/setting/notification',
        },
        {
          title: 'Private Settings',
          to: '/setting/private',
        },
        {
          title: 'Personal Information',
          to: '/setting/personal',
        },
      ],
    },
  },
  {
    title: 'My Purchase',
    code: 'purchase',
    icon: '',
    to: '/purchase',
  },
];

function Sidebar() {
  const [sidebar] = useState(SIDEBAR_MENU);
  const [activeMenuCode, setActiveMenuCode] = useState('account');
  const [activatedSubSidebar, setActivatedSubSidebar] = useState('Profile');

  const handleOpenSubSidebar = (item) => {
    if (activeMenuCode === item.code) {
      setActiveMenuCode(item.code);
    } else {
      setActiveMenuCode(item.code);
    }
  };
  const renderSidebar = () => {
    return sidebar.map((item, index) => {
      const isActive = activeMenuCode === item.code;
      const isParent = !!item.children;
      return (
        <span key={index}>
          <Button
            className={cx('sidebar-item', { active: isActive })}
            onClick={() => {
              handleOpenSubSidebar(item);
            }}
          >
            {item.title}
          </Button>
          {isParent && isActive && (
            <div className={cx('subsidebar', { active: isActive })}>
              {item.children.data.map((item, indx) => {
                const isSubSidebarActive = activatedSubSidebar === item.title;
                return (
                  <Button
                    key={indx}
                    to={item.to}
                    className={cx('subsidebar-item', { active: isSubSidebarActive })}
                    onClick={() => {
                      setActivatedSubSidebar(item.title);
                    }}
                  >
                    {item.title}
                  </Button>
                );
              })}
            </div>
          )}
        </span>
      );
    });
  };

  return (
    <aside className={cx('wrapper')}>
      <div className={cx('content')}>
        <div className={cx('profile')}>
          <div className={cx('avatar')}>H</div>
          <div>
            <p className={cx('username')}>hoangznzn</p>
            <p className={cx('edit-profile')}>Edit Profile</p>
          </div>
        </div>

        <div className={cx('sidebar')}>{renderSidebar()}</div>
      </div>
    </aside>
  );
}

export default Sidebar;
