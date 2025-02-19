# SvelteKit Application Architecture Ruleset v0.1

This document outlines the core rules and patterns for building scalable SvelteKit applications. It serves as a reference for consistent project structure and architecture decisions.

## Core Concepts

### 1. Component Hierarchy
```
RULE 1.1: Every page is a component
- Pages are defined in +page.svelte files
- Pages can be nested in route directories
- Pages should be focused on layout and composition

RULE 1.2: Layouts wrap pages
- Layouts are defined in +layout.svelte files
- Layouts can be nested for route groups
- Layouts should handle shared UI elements

RULE 1.3: Components can be universal (SSR + CSR) or client-only
- Universal components work in both environments
- Client-only components must be loaded conditionally
- SSR compatibility should be the default
```

### 2. Data Flow
```
RULE 2.1: Server-side load functions must be isolated
- Use +page.server.ts for server-only operations
- Keep database queries in server routes
- Handle sensitive data server-side only

RULE 2.2: Client-side state must be serializable
- State passed to the client must be JSON-serializable
- Complex objects must be transformed before sending
- Use derived stores for computed values

RULE 2.3: API endpoints must be separate from page logic
- Define APIs in +server.ts files
- Abstract API logic in service layers
- Keep endpoints RESTful and focused
```

### 3. Code Isolation
```
RULE 3.1: Server-only code must never reach client
- Place server code in lib/server directory
- Never import server code in universal modules
- Use API endpoints to access server functionality

RULE 3.2: Environment variables must be handled server-side
- Never expose sensitive env vars to client
- Use server endpoints to handle sensitive operations
- Public env vars must be prefixed with PUBLIC_

RULE 3.3: Sensitive operations must be in server routes
- Authentication logic stays server-side
- Database operations through server endpoints
- File system operations in server code only
```

## Structural Rules

### 1. Route Organization
```
RULE R1.1: Routes must follow SvelteKit's naming conventions
- Use +page.svelte for pages
- Use +server.ts for API endpoints
- Use +layout.svelte for layouts

RULE R1.2: Dynamic routes must use parameter conventions
- Use [param] for dynamic segments
- Use [[optional]] for optional parameters
- Use [...rest] for catch-all routes

RULE R1.3: Route groups must use directory conventions
- Use (group) for route groups
- Maintain logical grouping of related routes
- Keep route hierarchy shallow when possible
```

### 2. Code Organization
```
RULE O1.1: Shared code goes in lib/
- Utilities in lib/utils
- Components in lib/components
- Types in lib/types

RULE O1.2: Server-only code goes in lib/server/
- Database logic in lib/server/db
- Auth logic in lib/server/auth
- Server utilities in lib/server/utils

RULE O1.3: Components follow feature-first organization
- Group by feature in lib/components/[feature]
- Include feature-specific types and utilities
- Keep features independent and self-contained
```

### 3. Data Management
```
RULE D1.1: Database queries belong in server routes
- Define database logic in lib/server/db
- Use typed models and query builders
- Implement proper error handling

RULE D1.2: API calls must be abstracted in services
- Create service classes for API logic
- Implement proper error handling
- Use TypeScript for type safety

RULE D1.3: State management must be centralized
- Use Svelte stores for shared state
- Implement proper type safety
- Consider server state vs client state
```

## Implementation Rules

### 1. File Naming
```
RULE N1.1: +page.svelte for page components
- Contains page-specific markup and logic
- Handles page-level state
- Composes feature components

RULE N1.2: +server.ts for API endpoints
- Implements HTTP methods (GET, POST, etc.)
- Handles API-specific validation
- Returns proper HTTP responses

RULE N1.3: +layout.svelte for layout definitions
- Defines shared layout structure
- Handles navigation and common UI
- Manages layout-specific state
```

### 2. Data Loading
```
RULE L1.1: Universal load in +page.ts
- Handles client-side data loading
- Manages client-side transitions
- Implements proper error handling

RULE L1.2: Server-only load in +page.server.ts
- Handles server-side data loading
- Manages server-side state
- Implements proper error handling

RULE L1.3: Shared load in +layout.ts
- Loads data shared across routes
- Manages shared state
- Implements proper caching
```

### 3. Error Handling
```
RULE E1.1: Error boundaries in +error.svelte
- Handles route-level errors
- Provides user-friendly error messages
- Implements proper error recovery

RULE E1.2: API errors in +server.ts
- Returns proper HTTP error codes
- Provides detailed error messages
- Implements proper error logging

RULE E1.3: Load errors in load functions
- Handles data loading errors
- Provides fallback states
- Implements proper error recovery
```

## Recommended Project Structure
```
my-app/
├─ src/
│  ├─ lib/
│  │  ├─ components/
│  │  │  └─ [feature]/          # Feature-specific components
│  │  ├─ server/
│  │  │  ├─ db/                 # Database logic
│  │  │  ├─ auth/               # Authentication logic
│  │  │  └─ utils/              # Server utilities
│  │  ├─ services/              # API services
│  │  ├─ stores/                # Svelte stores
│  │  ├─ types/                 # TypeScript types
│  │  └─ utils/                 # Shared utilities
│  ├─ params/                   # Parameter matchers
│  ├─ routes/
│  │  ├─ api/
│  │  │  └─ +server.ts          # API endpoints
│  │  ├─ (auth)/                # Auth route group
│  │  ├─ (app)/                 # App route group
│  │  ├─ +layout.svelte         # Root layout
│  │  ├─ +layout.ts             # Shared data loading
│  │  ├─ +error.svelte          # Error boundary
│  │  └─ +page.svelte           # Index page
│  ├─ app.html                  # HTML template
│  └─ hooks.server.ts           # Server hooks
├─ static/                      # Static assets
├─ tests/                       # Test files
└─ [config files]               # Configuration
```

## Version History
- v0.1: Initial ruleset definition 