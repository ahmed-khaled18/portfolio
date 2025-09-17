# Portfolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.1.

## 🚀 Live Demo

Visit the live portfolio at: [https://ahmed-khaled18.github.io/portfolio/](https://ahmed-khaled18.github.io/portfolio/)

## 🛠️ Tech Stack

- **Angular 20** - Frontend framework
- **TypeScript** - Programming language
- **SCSS** - Styling
- **ESLint & Prettier** - Code quality and formatting
- **Husky & lint-staged** - Git hooks for code quality
- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Static site hosting

## 📦 Development

## 📦 Development

### Development server

To start a local development server, run:

```bash
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for development
- `npm run build:prod` - Build for production
- `npm run build:github-pages` - Build for GitHub Pages deployment
- `npm run test` - Run unit tests
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. Every push to the `main` branch triggers:

1. **Code Quality Checks**: ESLint and Prettier validation
2. **Testing**: Unit tests execution
3. **Build**: Production build with GitHub Pages configuration
4. **Deploy**: Automatic deployment to GitHub Pages

### Manual Deployment

To manually deploy to GitHub Pages:

```bash
npm run build:github-pages
```

## 🔧 Code Quality

This project includes comprehensive code quality tools:

- **ESLint**: TypeScript and Angular-specific linting rules
- **Prettier**: Code formatting
- **Husky**: Git hooks for pre-commit validation
- **lint-staged**: Run linters on staged files only
- **Commitlint**: Conventional commit message validation

### Git Hooks

Pre-commit hooks automatically:

- Run ESLint with auto-fix
- Format code with Prettier
- Validate commit messages

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
