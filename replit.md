# Overview

Lafayette Resources is a comprehensive Human Capital consultancy application built as a full-stack web platform. The application serves as a professional website showcasing Lafayette Resources' services including human capital consulting, recruitment, talent assessments, training programs, and career coaching. The platform features a contact form system for lead generation and client inquiries, with a modern, responsive design targeting African markets and beyond.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Design System**: Custom design tokens with Montserrat and Open Sans fonts

## Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API with centralized route registration
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **Session Management**: Connect-pg-simple for PostgreSQL session storage (configured but not actively used)
- **Error Handling**: Centralized error middleware with structured JSON responses

## Database & Schema Design
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (via Neon serverless)
- **Schema Management**: Type-safe schema definitions with Zod validation
- **Tables**: Users table for authentication, Contact submissions table for lead capture
- **Migrations**: Drizzle-kit for schema migrations

## Development & Build System
- **Build Tool**: Vite with React plugin and runtime error overlay
- **Development**: Hot module replacement with Vite dev server
- **Production**: ESBuild for server bundling, Vite for client bundling
- **TypeScript**: Strict configuration with path aliases for clean imports
- **Linting/Formatting**: PostCSS with Tailwind and Autoprefixer

## Key Architectural Decisions

### Monorepo Structure
- **Client**: React frontend in `/client` directory
- **Server**: Express backend in `/server` directory  
- **Shared**: Common schemas and types in `/shared` directory
- **Rationale**: Enables code sharing between frontend and backend while maintaining separation of concerns

### Database Abstraction
- **Storage Interface**: IStorage interface for data operations
- **Memory Implementation**: MemStorage class for development/testing
- **Database Ready**: Drizzle configuration prepared for PostgreSQL integration
- **Rationale**: Allows easy switching between storage backends and facilitates testing

### Form Validation Strategy
- **Shared Schemas**: Zod schemas in shared directory used by both client and server
- **Type Safety**: Automatic TypeScript type generation from schemas
- **Client-Server Sync**: Same validation rules enforced on both ends
- **Rationale**: Ensures data consistency and reduces duplication

### Component Architecture
- **Compound Components**: Shadcn/ui pattern for flexible, composable UI
- **Custom Components**: HeroSection, ServiceCard for business-specific needs
- **Layout Components**: Header/Footer with responsive navigation
- **Rationale**: Promotes reusability while maintaining design consistency

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **Routing**: Wouter for lightweight routing
- **State Management**: TanStack React Query for server state
- **Validation**: Zod for schema validation, Hookform Resolvers for form integration

## UI & Styling
- **Component Library**: Radix UI primitives (@radix-ui/react-*)
- **Styling**: Tailwind CSS, Class Variance Authority, clsx
- **Icons**: Lucide React for consistent iconography
- **Utilities**: Date-fns for date manipulation

## Backend Infrastructure
- **Server**: Express.js with TypeScript support (tsx)
- **Database**: Drizzle ORM, Neon Database serverless PostgreSQL
- **Session Storage**: Connect-pg-simple for PostgreSQL sessions
- **Build Tools**: ESBuild for server bundling

## Development Tools
- **Build System**: Vite with React plugin
- **Development**: Replit integration plugins for enhanced development experience
- **TypeScript**: Full TypeScript support with strict configuration
- **Fonts**: Google Fonts integration (Montserrat, Open Sans, Fira Code)

## Production Considerations
- **Database**: Neon serverless PostgreSQL for scalable data storage
- **Static Assets**: Vite handles bundling and optimization
- **Environment**: Environment variables for database configuration
- **Error Handling**: Structured error responses with proper HTTP status codes