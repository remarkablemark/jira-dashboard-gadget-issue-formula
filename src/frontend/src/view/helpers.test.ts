import { Parser } from 'expr-eval';

import { log } from '../helpers';
import { transform } from './helpers';

jest.mock('../helpers', () => ({
  log: { error: jest.fn() },
}));

describe('transform', () => {
  it('catches error', () => {
    const error = new Error();
    const spy = jest.spyOn(Parser, 'evaluate').mockImplementation(() => {
      throw error;
    });

    expect(
      transform(
        {
          decimal: [''],
          formula: [''],
          function: [{ label: 'test', value: 'test' }],
          jql: [''],
          label: [''],
          prefix: [''],
          suffix: [''],
          variable: [''],
        },
        [],
      ),
    ).toEqual([{ label: '', value: '' }]);

    expect(log.error).toBeCalledTimes(1);
    spy.mockRestore();
  });
});
