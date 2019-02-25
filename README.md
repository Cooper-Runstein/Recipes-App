## FOOD APP WEB UI

### Introduction

This is the repo for the FoodApp web app. The bulk of the work is in src. To run, run `npm start`.

### Development

#### Directory structure

To add to this repo, all react components should go in the `components` file. Each component should have its own directory, and be exported from an `index.ts` file. The directory must include a compoonet name prefixed `.spec.ts` file for unit test, and all styling should be done in a `.module.scss` file.

#### Coding style rules

TSlint and prettier will serve to enforce as much styling and practice rules as possible, but this section serves to layout some of the best practices.

- Alphabetization: All css rules, all component props, all config options, and all imports should be in alphabetical order.
- Arrow functions: In every case, an arrow function is prefered to a standard function.
- SCSS: Don't use `important`. Don't use more that one layer of nesting. Don't write global rules.
- React classes: Every component that can be a function component, should be a functional component.
- NPM modules: Can you write the functionality in 15 minutes or less? If so, don't import a module. If you do, check the github page and npm page for downloads/stars. Don't use old or unpopular modules.

#### Testing rules

Every component needs to have unit tests associated with it. Every helper function should also be thoroughly tested. Every componet that serves as a UI piece should have a storybook entry, and an integration test. More about these is below in the Testing section.

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
