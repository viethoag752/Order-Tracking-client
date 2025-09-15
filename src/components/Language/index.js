import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import styles from './Language.module.scss';
import { AppContext } from '~/context/AppContext';

const cx = classNames.bind(styles);

function Language({ Languages }) {
  const { language, setLanguage } = useContext(AppContext);

  console.log(language);

  return (
    <div className={cx('language')}>
      <Image src="/assets/images/global.svg" alt="Language" height="18px" />
      <span style={{ color: 'var(--dark)', fontSize: '15px', marginBottom: '5px', fontWeight: '500' }}>{language}</span>
      <span>
        <Menu
          context={{ language, setLanguage }}
          items={Languages}
          placeMent="bottom"
          className={cx('language-popper')}
        >
          <Image
            src="/assets/images/drop.svg"
            alt="Language"
            height="6px"
            style={{ marginBottom: '3px', paddingRight: '5px' }}
          />
        </Menu>
      </span>
    </div>
  );
}
Language.propTypes = {
  Languages: PropTypes.array.isRequired,
};
export default Language;
