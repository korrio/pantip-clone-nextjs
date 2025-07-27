# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Pantip clone - a Thai discussion forum platform built with Next.js, TypeScript, and Tailwind CSS. The application uses mock data for content and runs completely client-side without external dependencies or authentication.

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
- **State Management**: React useState/useEffect hooks
- **Authentication**: Removed (no authentication required)
- **Data**: Mock data with local state management
- **API Layer**: Mock functions simulating database operations

### Key Directories
- `pages/` - Next.js pages
- `components/` - Reusable React components (Header, Footer, Modal, SideBar)
- `lib/` - Mock data definitions and API functions
- `graphql/` - Mock data functions (renamed from GraphQL)
- `utils/` - Custom hooks and utility functions
- `styles/` - Global CSS and Tailwind configuration

### Mock Data Schema
The application uses TypeScript interfaces for mock data entities:
- **Post**: Forum topics with title, body, tag association, votes, and comments
- **Comment**: Replies to posts with voting capability
- **Tag**: Categories for organizing posts
- **Vote**: User voting system for posts and comments
- **Announcement**: Site announcements and news
- **Category**: Content categories for organization

### Mock Data Architecture
- Mock data defined in `lib/mockData.ts`
- Simulated async operations with Promise-based functions
- Thai language content with realistic forum discussions
- Functions in `graphql/quereis.ts` and `graphql/mutation.ts` now reference mock data

### User System
- No authentication required
- Uses mock user data ("ผู้ใช้งาน") for interactions
- All users can create posts, comments, and vote without login

### Key Features
- Forum topic creation with tag association
- Commenting system with threading
- Voting/reaction system for posts and comments
- Tag-based content organization
- Real-time toast notifications
- SEO optimization with next-seo

### Environment Variables (Optional)
- `URL` - Base URL for SEO and OpenGraph metadata (optional)

Note: No external API keys or authentication variables are required.

### Custom Hooks
- `useDebounce.ts` - Debouncing input values
- `useTimeout.ts` - Timeout functionality

### Important Notes
- The application is primarily in Thai language
- Uses custom purple theme (`bg-[#3c3963]`)
- No test framework is currently configured
- All data operations use mock functions with simulated async behavior
- No external dependencies required for core functionality
- Fully offline-capable forum simulation