<div align="center">
<a href="https://vuejs.org/" target="blank" style="margin: 0 1rem;"><img src="https://router.vuejs.org/logo.svg" width="80" alt="Vue Logo" /></a>
<a href="https://www.typescriptlang.org/" target="blank" style="margin: 0 1rem;"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png?20210506173343" width="80" alt="Typescript Logo" /></a>
<a href="https://vitejs.dev/" target="blank" style="margin: 0 1rem;"><img src="https://vitejs.dev/logo.svg" width="80" alt="Vite 3 Logo" /></a>
<a href="https://pinia.vuejs.org/" target="blank" style="margin: 0 1rem;"><img src="https://pinia.vuejs.org/logo.svg" width="50" alt="Pinia Logo" /></a>
<a href="https://vue-i18n.intlify.dev/" target="blank" style="margin: 0 1rem;"><img src="https://vue-i18n.intlify.dev/vue-i18n-logo.svg" width="90" alt="Vue i18n Logo" /></a>

<br><br>

[![license](https://img.shields.io/github/license/saymenghour/vue3-enterprise-boilerplate.svg)](LICENSE)
[![repo-size](https://img.shields.io/github/repo-size/saymenghour/vue3-enterprise-boilerplate.svg)](repo-size)
[![last-commit](https://img.shields.io/github/last-commit/saymenghour/vue3-enterprise-boilerplate.svg)](last-commit)
[![release](https://img.shields.io/github/release/saymenghour/vue3-enterprise-boilerplate.svg)](release)

<h1>✨ Vue Boilerplate ✨</h1>
</div>

The boilerplate of Vue v3, Typescript, Vite, Vue Router, Pinia, Axios, Tailwind CSS, Vue Query, VeeValidate, Zod, and Vue i18n for buildings efficient, faster, maintainable, and scalable for enterprise applications.

### 📚 Table of Contents

- [❓ What's Included?](#-whats-included)
- [🖇️ Core Dependencies](#️-core-dependencies)
- [🗂️ Project Structure](#️-project-structure)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Run with Docker manually](#run-with-docker-manually)
    - [Explanation of the Run Command:](#explanation-of-the-run-command)
  - [Run with Docker compose](#run-with-docker-compose)
- [💡 Scripts](#-scripts)
- [📝 License](#-license)

## ❓ What's Included?

- [x] Authentication: Provides a secure login system for users.
- [x] Authorization: Implements role-based access control to manage user permissions.
- [x] Multiple Language: Supports localization and enables users to switch between different languages.
- [x] Form Validation: Includes form validation functionality to ensure data integrity and improve user experience.
- [x] Error Handling: Handles and displays error messages in a user-friendly manner.
- [x] API Integration: Integrates with external APIs to fetch data and provide dynamic content.
- [ ] Theme (Light/Dark/System): Offers a choice of light, dark, or system-based theme for a personalized user experience.
- [ ] Responsive Design: Ensures the application is optimized for various screen sizes and devices.
- [ ] Testing: Includes a test suite with unit tests and integration tests for reliable code quality.
- [ ] Documentation: Provides comprehensive documentation to guide developers and users.

## 🖇️ Core Dependencies

[&#8593; Back to top](#-table-of-contents)

| Library      | Version                                                                  | Description                                                                                        |
| ------------ | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| Vue          | ![Vue](https://img.shields.io/badge/%5E3.5.12-blue.svg)                  | A progressive JavaScript framework for building user interfaces.                                   |
| Vite         | ![Vite](https://img.shields.io/badge/%5E5.4.9-blue.svg)                  | Next-generation frontend build tooling for fast and efficient development.                         |
| Typescript   | ![Typescript](https://img.shields.io/badge/%5E5.6.3-blue.svg)            | A superset of JavaScript that enhances the development experience with static typing.              |
| Vue Router   | ![Vue Router](https://img.shields.io/badge/%5E4.4.5-blue.svg)            | Official router for Vue.js, used for managing application routes.                                  |
| Vue i18n     | ![Vue i18n](https://img.shields.io/badge/%5E9.14.1-blue.svg)             | Internationalization plugin for Vue.js applications, enabling multi-language support.              |
| Vue Query    | ![@tanstack/vue-query](https://img.shields.io/badge/%5E5.59.13-blue.svg) | A data-fetching and state management library for Vue.js, with powerful data-fetching capabilities. |
| Pinia        | ![Pinia](https://img.shields.io/badge/%5E2.2.4-blue.svg)                 | An intuitive store for Vue.js applications, providing centralized state management.                |
| Axios        | ![Axios](https://img.shields.io/badge/%5E1.7.7-blue.svg)                 | Promise-based HTTP client for making API requests.                                                 |
| Tailwind CSS | ![Tailwind CSS](https://img.shields.io/badge/%5E3.4.14-blue.svg)         | A highly customizable CSS framework for rapid web development.                                     |
| VeeValidate  | ![VeeValidate](https://img.shields.io/badge/%5E4.14.3-blue.svg)          | Painless Vue form.                                                                                 |
| Zod          | ![Zod](https://img.shields.io/badge/%5E3.23.8-blue.svg)                  | TypeScript-first schema validation with static type inference.                                     |

## 🗂️ Project Structure

```
.
├── public/
│   ├── assets
│   │   ├── fonts
|   |   └── images
│   └── favicon.ico
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── images
│   │   │   └── logo.svg
│   │   └── styles
│   │       └── main.css
│   ├── components
│   │   ├── index.ts
│   │   ├── shared
│   │   ├── theme-switcher
│   │   ├── ui
│   │   │   ├── Avatar.vue
│   │   │   ├── Button.vue
│   │   │   ├── Card.vue
│   │   │   └── ...
│   │   └── vee-validate
│   │       ├── CheckboxField.vue
│   │       ├── CheckboxGroupField.vue
│   │   │   └── ...
│   ├── composables
│   ├── constants
│   ├── http
│   │   ├── axios
│   │   │   ├── index.ts
│   │   │   └── interceptor.ts
│   │   └── index.ts
│   ├── layouts
│   ├── locales
│   │   ├── en.ts
│   │   ├── index.ts
│   │   └── km.ts
│   ├── main.ts
│   ├── modules
│   │   ├── auth
│   │   │   ├── LoginView.vue
│   │   │   ├── authenticationService.ts
│   │   │   ├── authenticationType.ts
│   │   │   ├── loginSchema.ts
│   │   │   ├── routes.ts
│   │   │   └── useAuth.ts
│   │   ├── current-user
│   │   │   ├── currentUserApi.ts
│   │   │   ├── currentUserStore.ts
│   │   │   └── currentUserType.ts
│   │   ├── dashboard
│   │   │   ├── DashboardView.vue
│   │   │   ├── OverviewView.vue
│   │   │   └── RecentSales.vue
│   │   ├── exception
│   │   │   ├── NotFound.vue
│   │   │   └── UnauthorizeView.vue
│   ├── router
│   │   ├── guards.ts
│   │   ├── index.ts
│   │   ├── privateRoutes.ts
│   │   └── publicRoutes.ts
│   ├── services
│   │   └── localStorage.ts
│   ├── types
│   │   ├── index.ts
│   │   └── menu.ts
│   └── utils
│       ├── common
│       ├── crypto
│       └── env.ts
├── types
│   ├── env.d.ts
│   ├── global.d.ts
│   └── router.d.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── ...
```

## 🚀 Getting Started

### Prerequisites

[&#8593; Back to top](#-table-of-contents)

1. [Node Js](https://nodejs.org/en/) version `v20+`. The current Long Term Support (LTS) release is an ideal starting point.
2. [Visual Studio Code](https://code.visualstudio.com/download). Visual Studio Code is the free and open-sourced code editor. It is one of the top most editor used especially for JavaScript application development.

   **Recommended Plugin for VSCode**

   - [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
   - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
   - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   - [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
   - [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   - [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
   - [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

### Installation

[&#8593; Back to top](#-table-of-contents)

1.  Clone this repository to your computer:

    ```sh
    https://github.com/saymenghour/vue3-enterprise-boilerplate.git
    cd vue3-enterprise-boilerplate
    code .
    ```

2.  Run command below to ignore git case-sensitive filename

    ```sh
    git config --global core.ignorecase false
    ```

3.  From the project's root directory, install the required packages (dependencies):

    ```sh
    pnpm install
    ```

4.  Create environment files:

    ```sh
    cp .env.example .env
    ```

5.  Set up the environment variables.

6.  To run the app on your local machine:

    ```sh
    pnpm dev
    ```

7.  Build for production

    ```sh
    pnpm build
    ```

This will gracefully stop the container without affecting its data or configuration.

Happy Coding :)

## 💡 Scripts

[&#8593; Back to top](#-table-of-contents)

The following scripts are available:

| Script         | Action                                                    |
| -------------- | --------------------------------------------------------- |
| `pnpm install` | Installs the project dependencies.                        |
| `pnpm dev`     | Runs the application in development mode.                 |
| `pnpm build`   | Builds the production-ready optimized bundle.             |
| `pnpm preview` | Starts the preview server using Vite.                     |
| `pnpm lint`    | Runs ESLint to lint the project files and fix any issues. |
| `pnpm format`  | Formats the source code using Prettier.                   |

## 📝 License

This project is licensed under the [MIT](./LICENSE) License.
