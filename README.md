## FOOD APP WEB UI

### Introduction

This is the repo for the FoodApp web app. The bulk of the work is in src. To run, run `npm start`.

### Development

To add to this repo, all react components should go in the `components` file. Each component should have its own directory, and be exported from an `index.ts` file. The directory must include a compoonet name prefixed `.spec.ts` file for unit test, and all styling should be done in a `.module.scss` file.

### SCSS Modules

This app is styled with SASS in the form of modular `.module.scss` files. These are imported as JavaScript objects in the format `import styles from './component.module.scss` and referenced in tsx elements in the form `className={syles.selectedStyle}`.

### Testing

To run all possible tests, run `npm test:all`

#### Unit Tests

Unit Testing is done with Jest and Enzyme. Enzyme's adapter file is located at `src/setupTests.ts`. To run all unit tests run `npm test`.

### Integration Tests

Integration tests are done with TestCafe. To run, use either `npm testI:chrome` or `npm testI:firefox`. To run all integration tests, run `npm testI:all`.

### StoryBook

This app is setup for (StoryBook)["https://storybook.js.org/basics/guide-react/"] development. To run, use `npm run storybook` and navigate to `localhost:6006`.

### Husky

Before you can commit or push, all tests must pass. This is enforced with (Husky)[https://github.com/typicode/husky] pre-commit and pre-push hooks. These are set up in package.json. Do not disable these just to get a commit in.
