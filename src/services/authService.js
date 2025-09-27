import * as httpRequest from '~/utils/privateRequest';

export const login = async ({ param }) => {
  const res = await httpRequest.auth(`/auth/login`, param);
  return res;
};

export default login;
