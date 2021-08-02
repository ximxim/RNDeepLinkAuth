import React, { createContext, useState, FunctionComponent } from 'react';

export interface IAuthenticationContext {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export const AuthenticationContext = createContext<IAuthenticationContext>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

export const AuthenticationProvider: FunctionComponent<unknown> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
