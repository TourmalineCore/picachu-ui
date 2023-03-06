import test from 'ava';

const fn = () => `foo`;

async function fn2() {
  return Promise.resolve(`foo`);
}

test(`async test`, async (t) => {
  t.is(await fn2(), `foo`);
});

test(`normal test`, (t) => {
  t.is(fn(), `foo`);
});

const macro = test.macro((t, input: string, expected: number) => {
  // eslint-disable-next-line no-eval
  t.is(eval(input), expected);
});

test(`macro test`, macro, `3 * 3`, 9);
