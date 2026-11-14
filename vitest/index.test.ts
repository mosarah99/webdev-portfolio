import { describe, expect, test } from 'vitest';

describe('Default tests to check sanity', () => {
  test('Check node works', () => {
    expect(Math.sqrt(4)).toBe(2);
    expect(Math.sqrt(144)).toBe(12);
    expect(Math.sqrt(0)).toBe(0);
  });

  test('network connectivity', async () => {
    const URL = `https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/css/bootstrap.min.css`; // bootstrap cdn
    const response = await fetch(URL, {
      cache: 'no-cache',
      referrerPolicy: 'no-referrer',
    });
    expect(response.ok, 'internet fetch response').to.be
      .true;
  });
});
