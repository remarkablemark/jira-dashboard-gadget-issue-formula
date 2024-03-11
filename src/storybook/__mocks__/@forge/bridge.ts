import { fn } from '@storybook/test';

export const requestJira = fn();

export const view = {
  submit: fn(),
  close: fn(),
  refresh: fn(),
  createHistory: fn(),
  getContext: fn(),
  theme: {
    enable: fn(),
  },
};
