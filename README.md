## FOOD APP WEB UI

### Introduction

This is the repo for the FoodApp web app. The bulk of the work is in src. To run please install [yarn](https://yarnpkg.com/en/) and run `yarn start`.

### Development

To add to this repo, all react components should go in the `components` file. Each component should have its own directory, and be exported from an `index.ts` file. The directory must include a compoonet name prefixed `.spec.ts` file for unit test, and all styling should be done in a `.module.scss` file.

### SCSS Modules

This app is styled with SASS in the form of modular `.module.scss` files. These are imported as JavaScript objects in the format `import styles from './component.module.scss` and referenced in tsx elements in the form `className={syles.selectedStyle}`.

### Testing

To run all possible tests, run `yarn test:all`

#### Unit Tests

Unit Testing is done with Jest and Enzyme. Enzyme's adapter file is located at `src/setupTests.ts`. To run all unit tests run `yarn test`.

### Integration Tests

Integration tests are done with TestCafe. To run, use either `yarn testI:chrome` or `yarn testI:firefox`. To run all integration tests, run `yarn testI:all`.

###StoryBook

This app is setup for (StoryBook)["https://storybook.js.org/basics/guide-react/"] development. To run, use `yarn storybook` and navigate to `localhost:6006`.
