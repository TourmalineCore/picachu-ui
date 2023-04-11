import { auth } from "./auth.helper";

describe(`auth helper tests`, () => {
  it(`saveToken should push key and token in LocalStorage`, () => {
    auth.setToken({ value: `123` });

    expect(auth.getToken()).to.be.equal(`123`);
  });

  it(`removeToken should remove key in LocalStorage`, () => {
    localStorage.setItem(`accessToken`, `123`);

    auth.removeToken();

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(localStorage.getItem(`accessToken`)).to.be.null;
  });
});
