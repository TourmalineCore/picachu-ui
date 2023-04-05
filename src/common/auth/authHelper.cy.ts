import { AuthService } from "./auth.helper";

const authService = AuthService();

describe(`auth helper tests`, () => {
  it(`saveToken should push key and token in LocalStorage`, () => {
    authService.setToken({ value: `123` });
    expect(authService.getToken()).to.be.equal(`123`);
  });

  it(`removeToken should remove key in LocalStorage`, () => {
    localStorage.setItem(`accessToken`, `123`);
    authService.removeToken();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(localStorage.getItem(`accessToken`)).to.be.null;
  });
});
