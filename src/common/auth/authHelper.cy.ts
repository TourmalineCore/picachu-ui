import { removeToken, saveToken } from "./auth.helper";

describe(`auth helper tests`, () => {
  it(`saveToken should push key and token in LocalStorage`, () => {
    saveToken(`accessToken`, `123`);
    expect(localStorage.getItem(`accessToken`)).to.be.equal(`123`);
  });

  it(`removeToken should remove key in LocalStorage`, () => {
    localStorage.setItem(`accessTokenTest`, `123`);
    removeToken(`accessTokenTest`);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(localStorage.getItem(`accessTokenTest`)).to.be.null;
  });
});
