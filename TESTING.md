# Testing Guide

This project uses **Vitest** and **React Testing Library** for unit and integration testing.

## Running Tests

```bash
# Run tests in watch mode
bun test

# Run tests once
bun run test

# Run tests with UI
bun test:ui

# Run tests with coverage
bun test:coverage
```

## Test Structure

Tests are located next to the files they test with the `.test.tsx` or `.test.ts` extension:

```
src/
  pages/
    Users.tsx
    Users.test.tsx
  hooks/
    useClickOutside.ts
    useClickOutside.test.ts
```

## Writing Tests

### Component Tests

```typescript
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MyComponent from "./MyComponent";

describe("MyComponent", () => {
  it("renders correctly", () => {
    render(
      <BrowserRouter>
        <MyComponent />
      </BrowserRouter>
    );

    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
```

### Hook Tests

```typescript
import { renderHook } from "@testing-library/react";
import { useMyHook } from "./useMyHook";

describe("useMyHook", () => {
	it("returns expected value", () => {
		const { result } = renderHook(() => useMyHook());
		expect(result.current).toBe(true);
	});
});
```

## Test Coverage

Current test coverage includes:

- ✅ Login page
- ✅ Users page (with API mocking)
- ✅ UserDetails page
- ✅ MainLayout component
- ✅ useClickOutside hook

## Best Practices

1. **Test user behavior, not implementation details**
2. **Use semantic queries** (getByRole, getByLabelText)
3. **Mock external dependencies** (API calls, third-party libraries)
4. **Test accessibility** (proper ARIA labels, keyboard navigation)
5. **Keep tests isolated** and independent

## Utilities

Common test utilities are available in `src/test/utils.tsx`:

- `renderWithRouter()` - Render component with Router wrapper
- `mockFetch()` - Mock successful API calls
- `mockFetchError()` - Mock failed API calls
