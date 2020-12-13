# Boilerplate for React, Nextjs

[![Build Status](https://travis-ci.org/shortgiraffe4/react-nextjs-boilerplate.svg?branch=master)](https://travis-ci.org/shortgiraffe4/react-nextjs-boilerplate)
[![Dependency Status](https://david-dm.org/shortgiraffe4/react-nextjs-boilerplate.svg)](https://david-dm.org/shortgiraffe4/react-nextjs-boilerplate)
[![devDependency Status](https://david-dm.org/shortgiraffe4/react-nextjs-boilerplate/dev-status.svg)](https://david-dm.org/shortgiraffe4/react-nextjs-boilerplate#info=devDependencies)

This boilerplate is all you need for frontend project development with Reactjs and Nextjs.

### Stack

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Nextjs](https://nextjs.org//)

### Tools

- [Stylelint](https://stylelint.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)

## Getting started

Directory layout

```
├── /next/                      # The folder for compiled output
├── /.vscode/                   # VSCode configuration
├── /api/                       # Utilities for api handling
├── /hooks/                     # Custom hooks
├── /pages/                     # The source code of the application
|   ├── _app.js                 # Custom _app.js https://nextjs.org/docs/advanced-features/custom-app
│   └── /index.tsx              # Home page
├── /public/                    # Static assets
|   ├── /fonts/                 # fonts
├── /styles/                    # SCSS
├── /translation/               # Static translation files for react-intl
├── .env.local.template         # Template for environment
├── .eslintrc.json              # Configuration for eslint
├── .gitignore                  # .gitignore
├── .prettier.json              # Configuration for prettier
├── .stylelintrc.json           # Configuration for stylelint
├── next-env.d.ts               # Custom typescript type definition
├── next-config.js              # Configuration for nextjs
├── package.json                # The list of 3rd party libraries, utilities, and build, run scripts
├── package-lock.json           # Automatically generated file when installing npm packages
├── README.md                   # README
└── tsconfig.json               # Configuration for Typescript
```

##### 1. Clone the repo

`git clone git@github.com:shortgiraffe4/react-nextjs-boilerplate.git --depth 1`

##### 2. Install dependencies

`npm i`

##### 3. Run the project

`npm run dev`

## Deployment

https://nextjs.org/docs/deployment
