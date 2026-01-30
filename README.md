# Lendsqr Frontend Assessment

A responsive admin dashboard for managing users, built with React, TypeScript, and modern web technologies.

## 🚀 Features Implemented

### Core Functionality

- **User Management Dashboard** - View and manage user accounts with comprehensive details
- **User Listing** - Paginated table displaying all users with sorting and filtering capabilities
- **User Details** - Detailed user profile pages with personal info, employment, socials, and guarantor information
- **Authentication** - Login page with form validation
- **Responsive Design** - Fully responsive across mobile, tablet, and desktop devices

### Advanced Features

- **API Integration** - Fetches real user data from external API (api.json-generator.com)
- **Pagination** - Client-side pagination with customizable items per page (10, 20, 50, 100)
- **Filtering System** - Filter users by organization, username, email, date, phone, and status
- **Action Menus** - View details, blacklist, or activate users with dropdown menus
- **Column Sorting** - Sort table columns in ascending/descending order
- **Mobile Navigation** - Hamburger menu with slide-out drawer for mobile devices
- **Clickable Rows** - Navigate to user details by clicking table rows
- **Loading States** - User feedback during data fetching

### Responsive Behavior

- **Mobile (≤768px)**: Hamburger menu, horizontal scrolling tables, dropdown tabs
- **Tablet (769-1024px)**: Optimized spacing and layout
- **Desktop (≥1025px)**: Full sidebar navigation, expanded views

## 🛠️ Tech Stack

- **React 18.3.1** - UI library
- **TypeScript 5.6.2** - Type safety
- **React Router 7.13.0** - Client-side routing
- **Sass** - Styling with modern module system
- **Vite 5.4.10** - Build tool and dev server
- **Vitest 4.0.18** - Unit testing framework
- **React Testing Library** - Component testing
- **Bun** - Package manager and test runner

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd lendsqr-fe-test

# Install dependencies
bun install

# Start development server
bun run dev
```

## 🧪 Testing

```bash
# Run all tests
bun test

# Run tests once
bun run test

# Run tests with UI
bun test:ui

# Run tests with coverage
bun test:coverage
```

**Test Coverage**: 33 tests across 5 test suites

- Login Component (4 tests)
- Users Component (8 tests)
- UserDetails Component (10 tests)
- MainLayout Component (9 tests)
- useClickOutside Hook (3 tests)

## 📁 Project Structure

```
src/
├── assets/          # Images and SVG icons
├── components/      # Reusable UI components
├── hooks/           # Custom React hooks
│   └── useClickOutside.ts
├── layouts/         # Layout components
│   └── MainLayout.tsx
├── pages/           # Page components
│   ├── Login.tsx
│   ├── Users.tsx
│   └── UserDetails.tsx
├── routes/          # Route configuration
│   └── index.tsx
├── styles/          # SCSS stylesheets
│   ├── base/       # Variables, mixins, base styles
│   └── components/ # Component-specific styles
└── test/           # Test utilities and setup
```

## 🎨 Key Implementation Details

### Custom Hooks

- **useClickOutside** - Detects clicks outside elements (used for modals, dropdowns, mobile menu)

### State Management

- React hooks (useState, useEffect, useRef) for local component state
- No external state management library needed for this scope

### Styling Architecture

- Modern Sass with `@use` and `@forward`
- Component-scoped styles
- Responsive mixins for breakpoints
- CSS-based responsive tabs/dropdown switching

### API Integration

- Fetch API with Bearer token authentication
- Mock data fallback for development
- Error handling and loading states

### Testing Strategy

- Co-located tests (test files next to source files)
- Comprehensive component testing
- API mocking for isolated tests
- Custom test utilities in `src/test/utils.tsx`
- Follows React Testing Library best practices

## 🚀 Available Scripts

```bash
bun run dev          # Start development server
bun run build        # Build for production
bun run preview      # Preview production build
bun run lint         # Run ESLint
bun test            # Run tests in watch mode
bun run test       # Run tests once
bun test:ui         # Run tests with UI
bun test:coverage   # Run tests with coverage report
```

## 📱 Pages

1. **Login** (`/`) - User authentication
2. **Users** (`/users`) - User listing with filters and pagination
3. **User Details** (`/users/:id`) - Detailed user information

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Code Quality

- TypeScript for type safety
- ESLint for code linting
- Prettier formatting (via editor config)
- Comprehensive test coverage
- Semantic HTML and ARIA labels for accessibility
