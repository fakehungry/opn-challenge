<p align="center">
  <a href='https://www.omise.co'>
    <img src="https://cdn.omise.co/assets/omise-logo/omise-wordmark.png" width="300" />
  </a>
</p>

**Tamboon React** is a code challenge for frontend developer. [Tamboon](https://github.com/opn-ooo/challenges/tree/master/challenge-react)

## How to run this project

- Clone the project

```
git clone https://github.com/fakehungry/opn-challenges-react.git
```

- Download repositories and wait for everything completed.

```sh
yarn
```

- Start server. If everything fine, you will see smiling face. It take port 3001 to run.

```sh
yarn server
```

- Start development. Go to your browser and browse to localhost:3000

```sh
yarn client
```

- To test the whole project

```sh
yarn jest -u
```

- To see test coverage

```sh
yarn jest --coverage
```

- To see document of components. Go to your browser and browse to localhost:6006.

```sh
yarn storybook
```

## What I have done

1. Reorganize project structure and update some repositories.
2. Setup [Storybook](https://storybook.js.org/) to documenting components.
3. Setup global styles and theme provider with [styled-component](https://www.styled-components.com/) and [react context](https://react.dev/reference/react/hooks#context-hooks).
4. Setup [jest](https://jestjs.io/) unit testing.
5. Create components, stories, and unit testing.
6. Setup [redux](https://redux.js.org/).
7. Integrate components in home page.
8. Complete payment feature and notify user with toast after they pay.
