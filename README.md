<div align="center">
<a href="https://vuejs.org/" target="blank" style="margin: 0 1rem;"><img src="https://router.vuejs.org/logo.svg" width="80" alt="Vue Logo" /></a>
<a href="https://www.typescriptlang.org/" target="blank" style="margin: 0 1rem;"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png?20210506173343" width="80" alt="Typescript Logo" /></a>
<a href="https://vitejs.dev/" target="blank" style="margin: 0 1rem;"><img src="https://vitejs.dev/logo.svg" width="80" alt="Vite 3 Logo" /></a>
<a href="https://pinia.vuejs.org/" target="blank" style="margin: 0 1rem;"><img src="https://pinia.vuejs.org/logo.svg" width="50" alt="Pinia Logo" /></a>
<a href="https://vue-i18n.intlify.dev/" target="blank" style="margin: 0 1rem;"><img src="https://vue-i18n.intlify.dev/vue-i18n-logo.svg" width="90" alt="Vue i18n Logo" /></a>

<br><br>

[![license](https://img.shields.io/github/license/saymenghour/vue3-enterprise-boilerplate.svg)](LICENSE) [![repo-size](https://img.shields.io/github/repo-size/saymenghour/vue3-enterprise-boilerplate.svg)](repo-size) [![last-commit](https://img.shields.io/github/last-commit/saymenghour/vue3-enterprise-boilerplate.svg)](last-commit) [![stars](https://img.shields.io/github/stars/saymenghour/vue3-enterprise-boilerplate.svg)](stars) [![forks](https://img.shields.io/github/forks/saymenghour/vue3-enterprise-boilerplate.svg)](forks) [![release](https://img.shields.io/github/release/saymenghour/vue3-enterprise-boilerplate.svg)](release) [![watchers](https://img.shields.io/github/watchers/saymenghour/vue3-enterprise-boilerplate.svg)](watchers)

<h1>Vue 3 + TypeScript + Vite + Pinia + Vue i18n</h1>

</div>

## Description

The boilerplate of Vue v3, Typescript, Vite, Vue Router, Pinia, Axios, Tailwind CSS, and Vue i18n for buildings efficient, faster, maintainable, and scalable for enterprise applications.

## Table of Contents

1.  [Core Dependencies](#core-dependencies)
2.  [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)

## Core Dependencies

[&#8593; Back to top](#table-of-contents)

- [Vue](https://vuejs.org/) ![Vue](https://img.shields.io/badge/v-%5E3.4.5-blue.svg)
- [Vite](https://vitejs.dev/) ![Vite](https://img.shields.io/badge/v-%5E5.0.11-blue.svg)
- [Typescript](https://www.typescriptlang.org/) ![Typescript](https://img.shields.io/badge/v-%5E5.3.3-blue.svg)
- [Vue Router](https://router.vuejs.org/) ![Vue Router](https://img.shields.io/badge/v-%5E4.2.5-blue.svg)
- [Vue i18n](https://vue-i18n.intlify.dev/) ![Vue i19n](https://img.shields.io/badge/v-%5E9.7.0-blue.svg)
- [Vue Query](https://vue-query.vercel.app/) ![Vue i19n](https://img.shields.io/badge/v-%5E1.26.0-blue.svg)
- [Pinia](https://pinia.vuejs.org/) ![Pinia](https://img.shields.io/badge/v-%5E2.1.7-blue.svg)
- [Axios](https://www.npmjs.com/package/axios) ![Axios](https://img.shields.io/badge/v-%5E1.6.5-blue.svg)
- [Tailwind CSS](https://tailwindcss.com/) ![Tailwind CSS](https://img.shields.io/badge/v-%5E3.4.1-blue.svg)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Getting Started

### Prerequisites

[&#8593; Back to top](#table-of-contents)

1. [Node Js](https://nodejs.org/en/) version `v20.10.0`. The current Long Term Support (LTS) release is an ideal starting point.
2. [Visual Studio Code](https://code.visualstudio.com/download). Visual Studio Code is the free and open-sourced code editor. It is one of the top most editor used especially for JavaScript application development.

   **Recommended Plugin for VSCode**

   - [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
   - [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
   - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
   - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   - [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
   - [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
   - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   - [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
   - [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

### Installation

[&#8593; Back to top](#table-of-contents)

1.  Make sure you have a fresh version of [Node.js](https://nodejs.org/en) and NPM installed.

2.  Clone this repository to your computer:

    ```bash
    https://github.com/saymenghour/vue3-enterprise-boilerplate.git
    ```

3.  Go to project directory:

    ```bash
    cd vue3-enterprise-boilerplate
    ```

4.  Open project in VScode:

    ```bash
    code .
    ```

5.  Run command below to ignore git case-sensitive filename

    ```bash
    git config --global core.ignorecase false
    ```

6.  From the project's root directory, install the required packages (dependencies):

    using [npm](https://www.npmjs.com/):

    ```bash
    npm install
    ```

    or using [pnpm](https://pnpm.io/):

    ```bash
    pnpm install
    ```

7.  Create environment files:

    ```bash
    cp .env.example .env
    ```

    or for local development using

    ```bash
    cp .env .env.local
    ```

8.  Change its values appropriately

    ```bash
    BASE_API_URL="http://localhost:8080"
    ```

9.  To run the app on your local machine:

    ```bash
    npm run dev
    ```

10. Build for production

    ```bash
    npm run build
    ```

Happy Coding... :)

## License

[MIT](./LICENSE)
