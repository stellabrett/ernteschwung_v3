# Ernteschwung V3

A modern Vue 3 application built with Vite, TypeScript, and Tailwind CSS v4.

## 🚀 Features

- **Vue 3** - Composition API with `<script setup>` syntax
- **Vite** - Lightning-fast development server and build tool
- **TypeScript** - Strict type-checking configuration
- **Tailwind CSS v4** - Utility-first CSS framework
- **Vue Router** - Official routing solution for Vue.js
- **Clean Architecture** - Organized folder structure

## 📁 Project Structure

```
src/
├── assets/         # Static assets (images, fonts, etc.)
├── components/     # Reusable Vue components
├── composables/    # Vue composables for shared logic
├── router/         # Vue Router configuration
├── styles/         # Global styles and Tailwind CSS
├── types/          # TypeScript type definitions
├── views/          # Page-level components
├── App.vue         # Root component
└── main.ts         # Application entry point
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
# Build for production
npm run build
```

### Preview

```bash
# Preview production build locally
npm run preview
```

## 🔧 TypeScript Configuration

This project uses a **strict TypeScript configuration** with the following enabled:
- `strict: true` - All strict type-checking options
- `noUnusedLocals: true` - Report errors on unused local variables
- `noUnusedParameters: true` - Report errors on unused parameters
- `noFallthroughCasesInSwitch: true` - Report errors for fallthrough cases
- `noUncheckedIndexedAccess: true` - Add undefined to index signatures
- `noImplicitOverride: true` - Ensure overriding members are marked
- `exactOptionalPropertyTypes: true` - Strict optional property types

## 📝 License

MIT