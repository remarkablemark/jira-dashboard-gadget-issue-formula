<p align="center">
  <img src="https://raw.githubusercontent.com/remarkablemark/jira-dashboard-gadget-issue-formula/master/icon.svg" alt="Issue Formula" width="65">
</p>

# Issue Formula

<kbd>Issue Formula</kbd> is a [Jira dashboard gadget](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-dashboard-gadget/) that calculates mathematical formulas using issue data.

## Stack

- [Forge](https://developer.atlassian.com/cloud/confluence/forge/)
- [Atlaskit](https://atlassian.design/components)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)

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

## Resources

- [Manage your apps](https://developer.atlassian.com/platform/forge/manage-your-apps/)
- [Product bridge APIs](https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/bridge/)
- [Atlassian design system](https://atlassian.design/components)

## Prototype

- [StackBlitz](https://stackblitz.com/edit/issue-formula)

## License

[MIT](LICENSE)
