# ts-next-storybook-template

## Tasks:

1. Task – 1 (Date Range Component for current month)
2. Task – 2 (Date Range Component for cross months)

## Demo

- View [Demo](https://tokileecy.github.io/ts-next-storybook-template/demo)
- View [Stories](https://tokileecy.github.io/ts-next-storybook-template/stories)

## Architecture

- TypeScript
- React hooks
- Next.js (SSR and SSG)
- @emotion/css (CSS in JS)
- Storybook (manual test)

## Code quality

- ESLint
- Prettier

## App Directory structure

```
.
├── components              # React components
├── containers              # Next.js page container components
├── hooks                   # React hooks
├── pages                   # Next.js page components for route and SSG, SSR.
├── public                  # Public Assets
├── stories                 # Storybooks stories
├── styles                  # Global Styles Settings
```

## Component Directory structure

```
Component
├── Component.stories.tsx   # Component stories
├── Component.test.ts       # Component test file
├── Component.styles.ts     # Component styles
├── Component.tsx           # React Component
└── index.ts
```
## Env Description

1. NODE Version: 14.x, 16.x
2. Confirmed Work System Version: 
  - Ubuntu 22.04.1 LTS
  - macOS Monterey

### Install

```sh
yarn install
```

### development

1. storybook (document of components)

running at Port `$DOCS_PORT` default is at Port 6006.

```sh
DOCS_PORT=<DOCS_PORT> yarn storybook
```

2. dev (Task demo site)

running at Port `$WEB_PORT` default is at Port 3000.

```sh
WEB_PORT=<WEB_PORT> yarn dev
```

### docker for development

1. new `.dev-docker.env` file
2. start docker container
```sh
docker compose --env-file=./.dev-docker.env up
```
3. close docker container
```sh
docker compose --env-file=./.dev-docker.env down
```

### production

1. SSR

simply build app and run start:

```sh
yarn build && yarn start
```

2. SSG

export static page.

```sh
yarn export
```

### Test

run `yarn test` to test component

## Deploy

Deploy Static Production Page to Github Pages.

Force push git tag `prod` to change production.