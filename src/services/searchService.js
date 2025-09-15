import * as httpRequest from '~/utils/httpRequest';
import PropTypes from 'prop-types';

const getSearchedOrder = async ({ param }) => {
  const res = await httpRequest.get(`/${param}`);
  return res;
};
getSearchedOrder.propTypes = {
  param: PropTypes.string.isRequired,
};
export default getSearchedOrder;
