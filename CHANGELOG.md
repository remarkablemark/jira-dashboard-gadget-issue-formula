# Changelog

## [1.2.8](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/compare/v1.2.7...v1.2.8) (2024-11-23)


### Performance Improvements

* **frontend:** refactor to `react-dom/client` createRoot ([ca9a243](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/commit/ca9a2437c83391151a5058ac25144b6dc6671d07))

## [1.2.7](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/compare/v1.2.6...v1.2.7) (2024-11-23)


### Build System

* **package:** upgrade react from 16 to 18 ([62176ee](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/commit/62176ee356547fd8e43658179e11b355c57552b5))

## [1.2.6](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/compare/v1.2.5...v1.2.6) (2024-11-21)


### Bug Fixes

* **frontend:** downgrade zustand from v5 to v4 ([ea32839](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/commit/ea32839ec8c664ec46cc091e2dbf0fad2c68e28d))

## [1.2.5](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/compare/v1.2.4...v1.2.5) (2024-09-23)


### Build System

* **package:** bump @forge/cli from 7.1.0 to 10.5.0 ([db9d156](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/commit/db9d156348a0ebb3df1854113493c7ee7fb30237))

## [1.2.4](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/compare/v1.2.3...v1.2.4) (2024-09-23)

### Bug Fixes

- **frontend:** fix cannot read properties of undefined (reading 'length') ([19b5b4e](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/commit/19b5b4e1f1b7f224ba0257be5cf3f0348d88b62d)), relates to [#400](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/issues/400)

## [1.2.3](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/compare/v1.2.2...v1.2.3) (2024-09-23)

### Bug Fixes

- **package:** downgrade @forge/cli from 7.1.0 to 8.0.0 ([27c0637](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/commit/27c06379536eae4792ee7696a97cc969ab882696)), reverts [#94](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/issues/94)

## [1.2.2](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/compare/v1.2.1...v1.2.2) (2024-09-23)

### Bug Fixes

- **package:** revert @forge/cli from 10.5.0 to 8.0.1 ([9ca35df](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/commit/9ca35df17a82052adfebff4f0360259ea3f50380))

## [1.2.1](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/compare/v1.2.0...v1.2.1) (2024-08-11)

### Build System

- **manifest:** remove app property licensing ([38ef738](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/commit/38ef7381510fdf73e5ce338a7dc649d6abafe7da))

## [1.2.0](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/compare/v1.1.0...v1.2.0) (2024-08-11)

### Features

- **frontend:** add formula suffix ([cea3081](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/commit/cea30813c164e9a75f4f059a9d8ef03bb6d71a83))

## [1.1.0](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/compare/v1.0.2...v1.1.0) (2024-08-11)

### Features

- **frontend:** add formula prefix ([371d6c9](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/commit/371d6c91b158215444227dde0b76870636ac3400))

## [1.0.2](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/compare/v1.0.1...v1.0.2) (2024-03-14)

### Bug Fixes

- **frontend:** prevent race condition of jira search in view ([22334ce](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/commit/22334ce21669121935f14a6a1f6563603d68b138))

## [1.0.1](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/compare/v1.0.0...v1.0.1) (2024-03-14)

### Bug Fixes

- **frontend:** don't show spinner if requests have not fired ([e6466f1](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/commit/e6466f19ed3222de39903205b7009f8eed5ca156))
- **frontend:** don't throw error in view if there's no data ([5d38a0b](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/commit/5d38a0bd8aa51a6326118abc3b3caf6262eea08b))

## 1.0.0 (2024-03-12)

### Features

- **frontend:** add Edit and View ([5383f65](https://github.com/remarkablemark/jira-dashboard-gadget-issue-formula/commit/5383f65e5279b1662efe34e990b869c28abda51c))
