import { getContentType } from "./api.helper";

describe(`api helper tests`, () => {
  it(`getContentType SHOULD return object with state string`, () => {
    const result = getContentType();
    expect(result).to.deep.equal({
      'Content-Type': `application/json`,
    });
  });
});
