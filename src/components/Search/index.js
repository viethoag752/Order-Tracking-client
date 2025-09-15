import styles from './Search.module.scss';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useContext, useCallback, useState } from 'react';
import { getSearchedOrder } from '~/services';
import { searchContext } from '~/context/SearchContext';
const cx = classNames.bind(styles);

function Search() {
  const { searchValue, setSearchValue } = useContext(searchContext);
  const [product, setProduct] = useState({});
  const inputRef = useRef();

  const handleSearch = async () => {
    if (!searchValue.trim()) {
      return;
    }
    const res = await getSearchedOrder({ param: searchValue });
    console.log(product);
    setProduct(res);
  };

  const handleClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  console.log('render');

  const handleChange = useCallback(
    (e) => {
      console.log('change');
      const searchValue = e.target.value;
      if (!searchValue.startsWith(' ')) setSearchValue(searchValue);
    },
    [setSearchValue],
  );

  return (
    <div className={cx('search')}>
      <input placeholder="Search..." spellCheck="false" value={searchValue} onChange={handleChange} ref={inputRef} />
      {!!searchValue && (
        <button className={cx('clear-btn')} onClick={handleClear}>
          <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />
        </button>
      )}
      <button className={cx('search-btn')} onClick={handleSearch}>
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
      </button>
    </div>
  );
}

export default Search;
