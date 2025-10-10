<div align="center">

# 🚀 Ahmed Khaled's Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=github)](https://ahmedknasr-dev.github.io/portfolio/)
[![Angular](https://img.shields.io/badge/Angular-20.3-DD0031?style=for-the-badge&logo=angular)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

**A modern, responsive portfolio website built with cutting-edge Angular features**

[Live Demo](https://ahmedknasr-dev.github.io/portfolio/) · [Report Bug](https://github.com/ahmedknasr-dev/portfolio/issues) · [Request Feature](https://github.com/ahmedknasr-dev/portfolio/issues)

</div>

---

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, responsive design built with Bootstrap 5
- ⚡ **Blazing Fast** - Optimized with OnPush change detection and signals
- 📱 **Fully Responsive** - Seamless experience across all devices
- 🎯 **Standalone Components** - Modern Angular architecture with no NgModules
- 🔄 **Reactive State** - Built with Angular Signals for optimal performance
- 📧 **Contact Form** - Integrated contact functionality
- 🎭 **Smooth Animations** - Engaging user interactions
- ♿ **Accessible** - WCAG compliant with semantic HTML
- 🚀 **CI/CD Ready** - Automated deployment with GitHub Actions

## 🛠️ Tech Stack

<div align="center">

| Category         | Technologies                                                                                                                               |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Framework**    | ![Angular](https://img.shields.io/badge/Angular-20.3-DD0031?logo=angular)                                                                  |
| **Language**     | ![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)                                                          |
| **Styling**      | ![SCSS](https://img.shields.io/badge/SCSS-CC6699?logo=sass) ![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap) |
| **Code Quality** | ![ESLint](https://img.shields.io/badge/ESLint-8A2BE2?logo=eslint) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier)  |
| **Testing**      | ![Jasmine](https://img.shields.io/badge/Jasmine-8A4182?logo=jasmine) ![Karma](https://img.shields.io/badge/Karma-429e38?logo=karma)        |
| **Git Hooks**    | ![Husky](https://img.shields.io/badge/Husky-042B37?logo=git) ![lint--staged](https://img.shields.io/badge/lint--staged-black?logo=git)     |
| **CI/CD**        | ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=github-actions)                                                  |
| **Hosting**      | ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?logo=github)                                                              |

</div>

## 🎯 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── core/           # Core services (contact service, etc.)
│   │   ├── layout/         # Layout components (navbar, footer)
│   │   │   ├── footer/
│   │   │   └── navbar/
│   │   ├── pages/          # Page components
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── experience/
│   │   │   ├── projects/
│   │   │   ├── skills/
│   │   │   └── contact/
│   │   ├── app.config.ts   # App configuration
│   │   └── app.routes.ts   # Route definitions
│   ├── assets/             # Static assets
│   ├── environments/       # Environment configurations
│   └── styles/             # Global styles
├── public/                 # Public assets
└── scripts/                # Build scripts
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v20 or higher)
- npm (v10 or higher)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ahmed-khaled18/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

4. **Open your browser**

   Navigate to `http://localhost:4200/` 🎉

## 📜 Available Scripts

| Command                      | Description                  |
| ---------------------------- | ---------------------------- |
| `npm start`                  | 🏃 Start development server  |
| `npm run build`              | 🔨 Build for development     |
| `npm run build:prod`         | 🚀 Build for production      |
| `npm run build:github-pages` | 📦 Build for GitHub Pages    |
| `npm test`                   | 🧪 Run unit tests            |
| `npm run test:ci`            | 🤖 Run tests in CI mode      |
| `npm run lint`               | 🔍 Run ESLint                |
| `npm run lint:fix`           | 🔧 Fix ESLint errors         |
| `npm run format`             | 💅 Format code with Prettier |
| `npm run format:check`       | ✅ Check code formatting     |

## 🚀 Deployment

### Automatic Deployment

This project uses **GitHub Actions** for continuous deployment. Every push to the `main` branch automatically:

1. ✅ Runs code quality checks (ESLint + Prettier)
2. 🧪 Executes all unit tests
3. 🔨 Builds the production bundle
4. 🚀 Deploys to GitHub Pages

### Manual Deployment

To manually deploy:

```bash
npm run build:github-pages
```

The build artifacts will be stored in the `dist/` directory.

## 🔧 Code Quality & Best Practices

This project maintains high code quality standards through:

### 🎯 Linting & Formatting

- **ESLint** - TypeScript and Angular-specific rules
- **Prettier** - Consistent code formatting
- **Pre-commit hooks** - Automatic validation before commits

### 🧪 Testing

- **Unit Tests** - Comprehensive test coverage with Jasmine & Karma
- **CI Testing** - Automated testing in the pipeline

### 📝 Commit Standards

- **Commitlint** - Enforces conventional commit messages
- **Husky** - Git hooks for automated checks

### ⚡ Angular Best Practices

- ✅ Standalone components (no NgModules)
- ✅ Signals for reactive state management
- ✅ OnPush change detection strategy
- ✅ Lazy loading for optimal performance
- ✅ Type-safe throughout

## 🎨 Key Features Implemented

- **Responsive Navigation** - Mobile-friendly navbar with smooth transitions
- **Dynamic Sections** - Home, About, Experience, Projects, Skills, Contact
- **Contact Form** - Fully functional with validation
- **Social Links** - GitHub, LinkedIn, Email integration
- **SEO Optimized** - Meta tags and semantic HTML
- **Performance** - Optimized images, lazy loading, and efficient rendering

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ahmed Khaled**

- GitHub: [@ahmed-khaled18](https://github.com/ahmed-khaled18)
- LinkedIn: [Ahmed Khaled](https://www.linkedin.com/in/ahmedknasr/)
- Email: a.k.nasr18@gmail.com

## 🌟 Show your support

Give a ⭐️ if you like this project!

---

<div align="center">

**Built with ❤️ using Angular 20 and TypeScript**

[![Angular](https://img.shields.io/badge/Made%20with-Angular-DD0031?style=flat&logo=angular)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/Written%20in-TypeScript-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)

</div>
