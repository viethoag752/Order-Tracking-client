import { createContext, useState, useEffect } from 'react';
import * as authService from '~/services/authService';

export const authContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessTokent' || null));

  useEffect(() => {
    if (accessToken) {
      authService
        .getProfile(accessToken)
        .then(setUser)
        .catch(() => {
          setUser(null);
          setAccessToken(null);
          localStorage.removeItem('accessToken');
        });
    }
  });
};
