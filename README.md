<p align="center">
  <img src="https://raw.githubusercontent.com/remarkablemark/jira-dashboard-gadget-issue-formula/master/icon.svg" alt="Issue Formula" width="65">
</p>

# Issue Formula

[![release](https://img.shields.io/github/v/release/remarkablemark/jira-dashboard-gadget-issue-formula)](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/releases)
[![build](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/actions/workflows/build.yml/badge.svg)](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/actions/workflows/build.yml)

<kbd>Issue Formula</kbd> is a [Jira dashboard gadget](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-dashboard-gadget/) that calculates mathematical formulas with issue data.

[Get it now](https://marketplace.atlassian.com/apps/1233729/issue-formula). Read the [wiki](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/wiki/).

[![Static Badge](https://img.shields.io/badge/Get_it_now-f5cd47?style=for-the-badge&logo=atlassian&logoColor=0052cc)](https://marketplace.atlassian.com/apps/1233729/issue-formula)

## Prerequisites

[Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/).

## Quick Start

Clone the repository:

```sh
git clone https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula.git
cd jira-dashboard-gadget-issue-formula
```

Install the dependecies:

```sh
npm install
```

Log in to your Atlassian account:

```sh
npm run login
```

Modify the frontend app by editing the `src/frontend/src/index.tsx` file. View your changes with [Storybook](https://storybook.js.org/):

```sh
npm run storybook
```

Modify the backend app by editing the `src/backend/index.js` file to define resolver functions. See [Forge resolvers](https://developer.atlassian.com/platform/forge/runtime-reference/custom-ui-resolver/) for documentation on resolver functions.

Build, deploy, and install your app in an Atlassian site:

```sh
npm run deploy
```

Develop your app by running `forge tunnel` to proxy invocations locally:

```sh
npx forge tunnel
```

### Notes

- Use the `npx forge deploy` command when you want to persist code changes.
- Use the `npx forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

## License

[MIT](LICENSE)
