import { TOKEN_KEY, isAuthenticated, getToken, login, logout } from './auth';

import localForage from 'localforage';

import '../mock/MockConfigure';

beforeEach(() => {
  logout();  
});

describe('testing auth service', () => {
  it('token in local storage should be null', () => {
    localForage.getItem("@my-appp-Token").then(token => expect(token).toBeNull());
  });

  it('should set token in local storage', () => {
    const token = "MyToken";
    const authorization = {accessToken: token}

    login(authorization);
    
    localForage.getItem(TOKEN_KEY).then(token => expect(token).toBe("MyToken"));
 });

  it('should remove token from local storage on logout', () => {
    const token = "MyToken";
    const authorization = {accessToken: token};

    login(authorization);

    logout();

    localForage.getItem(TOKEN_KEY).then(token => expect(token).toBeNull());
  });

  it('should return true when is authenticated', async()  => {
    const token = "MyToken";
    const authorization = {accessToken: token}

    await login(authorization);

    localForage.getItem(TOKEN_KEY).then(token => expect(token).toBe("MyToken"));
    expect(await isAuthenticated()).toBe(true);
  });

  it('should return false when is not authenticated', async ()  => {
    await logout();

    isAuthenticated().then(isAuthenticated => expect(isAuthenticated).toBeFalsy());
  });

  it('should return token', async ()  => {
    const token = "MyToken";
    const authorization = {accessToken: token}

    login(authorization);

    expect(await getToken()).toBe('MyToken');
  });
});
