# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Pantip clone - a Thai discussion forum platform built with Next.js, TypeScript, Tailwind CSS, Apollo Client, and StepZen for GraphQL API management. The application uses NextAuth for Google OAuth authentication and connects to a PostgreSQL database through StepZen's GraphQL layer.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Architecture Overview

### Core Stack
- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Apollo Client for GraphQL state
- **Authentication**: NextAuth with Google OAuth
- **Database**: PostgreSQL via StepZen GraphQL API
- **API Layer**: StepZen for database abstraction

### Key Directories
- `pages/` - Next.js pages and API routes
- `components/` - Reusable React components (Header, Footer, Modal, SideBar)
- `graphql/` - GraphQL queries and mutations
- `stepzen/` - StepZen configuration and PostgreSQL schema
- `utils/` - Custom hooks and utility functions
- `styles/` - Global CSS and Tailwind configuration

### Database Schema
The application uses PostgreSQL with these main entities:
- **Post**: Forum topics with title, body, tag association, votes, and comments
- **Comment**: Replies to posts with voting capability
- **Tag**: Categories for organizing posts
- **Vote**: User voting system for posts and comments
- **Reaction**: User reactions to content

### GraphQL Architecture
- StepZen endpoint: `https://plovdiv.stepzen.net/api/opulent-lightningbug/__graphql`
- Authentication via `NEXT_PUBLIC_STEPZEN_KEY` environment variable
- Schema defined in `stepzen/postgresql/postgresql.graphql`
- Queries and mutations in `graphql/quereis.ts` and `graphql/mutation.ts`

### Authentication Flow
- Google OAuth via NextAuth
- Session management through SessionProvider
- User data includes email, username, and profile information

### Key Features
- Forum topic creation with tag association
- Commenting system with threading
- Voting/reaction system for posts and comments
- Tag-based content organization
- Real-time toast notifications
- SEO optimization with next-seo

### Environment Variables Required
- `NEXT_PUBLIC_STEPZEN_KEY` - StepZen API authentication
- `GOOGLE_CLIENT_ID` - Google OAuth client ID
- `GOOGLE_CLIENT_SECRET` - Google OAuth client secret
- `URL` - Base URL for SEO and OpenGraph metadata

### Custom Hooks
- `useDebounce.ts` - Debouncing input values
- `useTimeout.ts` - Timeout functionality

### Important Notes
- The application is primarily in Thai language
- Uses custom purple theme (`bg-[#3c3963]`)
- No test framework is currently configured
- Apollo Client handles all GraphQL operations and caching