import * as httpPrivateRequest from '~/utils/privateRequest';
import PropTypes from 'prop-types';

const getSearchedOrder = async ({ param }) => {
  const res = await httpPrivateRequest.get(`/${param}`);
  return res;
};
getSearchedOrder.propTypes = {
  param: PropTypes.string.isRequired,
};
export default getSearchedOrder;
