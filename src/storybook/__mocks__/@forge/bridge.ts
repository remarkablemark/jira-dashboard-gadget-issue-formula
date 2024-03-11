import { fn } from '@storybook/test';

export const requestJira = fn();

export const view = {
  submit: fn(() => Promise.resolve()),
  close: fn(() => Promise.resolve()),
  refresh: fn(() => Promise.resolve()),
  createHistory: fn(() => Promise.resolve()),
  getContext: fn(() => Promise.resolve()),
  theme: {
    enable: fn(() => Promise.resolve()),
  },
};
