# README.DEV (DS) - Books and Tutorials for Programming

[![CI](https://github.com/emiscode/react-readmedev-ds/actions/workflows/main.yaml/badge.svg?branch=main)](https://github.com/emiscode/react-readmedev-ds/actions/workflows/main.yml) [![RELEASE](https://github.com/emiscode/react-readmedev-ds/actions/workflows/release.yaml/badge.svg?branch=main)](https://github.com/emiscode/react-readmedev-ds/actions/workflows/release.yml)

This project was created to study how to build and publish [React](https://reactjs.org/) UI Components Library with [Storybook](https://storybook.js.org/).

This project was bootstrapped with [TSDX](https://tsdx.io/).

## Commands

The recommended workflow is to run TSDX in one terminal:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run either Storybook or the example playground:

### Storybook

Run inside another terminal:

```bash
yarn storybook
```

This loads the stories from `./stories`.

### Example

Then run the example inside another:

```bash
cd example
npm i # or yarn to install dependencies
npm start # or yarn start
```

To do a one-off build, use `npm run build` or `yarn build`.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.
