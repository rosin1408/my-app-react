import { TOKEN_KEY, isAuthenticated, getToken, login, logout } from './auth';

import '../mock/MockConfigure';

beforeEach(() => {
  logout();  
});

describe('testing auth service', () => {
  it('token in local storage should be null', () => {
    const nullToken = localStorage.getItem("@my-appp-Token");
    
    expect(nullToken).toBeNull();
  });

  it('should set token in local storage', () => {
    const token = "MyToken";
    const authorization = {accessToken: token}

    login(authorization);
    
    expect(localStorage.getItem(TOKEN_KEY)).toBe("MyToken");
  });

  it('should remove token from local storage on logout', () => {
    const token = "MyToken";
    const authorization = {accessToken: token};

    login(authorization);

    logout();

    expect(localStorage.getItem(TOKEN_KEY)).toBeNull();
  });

  it('should return true when is authenticated', ()  => {
    const token = "MyToken";
    const authorization = {accessToken: token}

    login(authorization);

    expect(isAuthenticated()).toBeTruthy();
  });

  it('should return false when is not authenticated', ()  => {
    logout();

    expect(isAuthenticated()).toBeFalsy();
  });

  it('should return token', ()  => {
    const token = "MyToken";
    const authorization = {accessToken: token}

    login(authorization);

    expect(getToken()).toBe('MyToken');
  });
});
