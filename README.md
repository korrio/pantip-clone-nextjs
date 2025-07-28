# Pantip Clone - Next.js Forum Platform

A comprehensive Thai discussion forum platform built with Next.js, featuring advanced animations and modern web technologies. This project demonstrates the exploration of cutting-edge development tools and frameworks.

## Video Demo

[https://user-images.githubusercontent.com/126239/151127893-5c98ba8d-c431-4a25-bb1f-e0b33645a2b6.mp4](https://github-production-user-asset-6210df.s3.amazonaws.com/2325299/471358563-81c9cb9b-ac96-4145-bdeb-71c406abb3d0.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250728%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250728T064257Z&X-Amz-Expires=300&X-Amz-Signature=21ff807938ac391f98897c7036d4d037f4be4ec05b902965aae989ab5a9a0e57&X-Amz-SignedHeaders=host)

## Project Highlights

- **Complete Forum System**: Authentic Thai forum experience with posts, comments, voting, and categories
- **Advanced Animations**: Dual Remotion animation system with 15-second videos at 60fps
- **SEO Optimized**: Schema.org structured data, XML sitemap, and comprehensive meta tags
- **Search Integration**: Real Pantip API integration with fallback mock data
- **Modern Architecture**: Full TypeScript implementation with mock data layer

## Tech Stack

### Core Framework
- **Next.js 15.1.7** - React framework with SSR/SSG
- **React 19.0.0** - UI library
- **TypeScript 4.5.4** - Type safety

### Styling & UI
- **Tailwind CSS 3.0.7** - Utility-first CSS framework
- **@heroicons/react 1.0.6** - Icon library
- **Autoprefixer 10.4.0** - CSS vendor prefixing

### Animation & Media
- **Remotion 4.0.327** - Video generation framework
- **@remotion/cli 4.0.327** - Video rendering tools
- **Critters 0.0.25** - Critical CSS extraction

### Development Tools
- **Prettier 2.5.1** - Code formatting
- **prettier-plugin-tailwindcss 0.1.1** - Tailwind class sorting

### Additional Libraries
- **next-seo 5.4.0** - SEO optimization
- **react-hook-form 7.31.2** - Form handling
- **react-hot-toast 2.2.0** - Toast notifications
- **react-timeago 6.2.1** - Time formatting
- **html-react-parser 1.4.12** - HTML parsing

## Key Features

- **Forum Categories**: 10+ category rooms with authentic Thai names
- **Post Management**: Create, vote, and comment on forum topics
- **Tag System**: Organized content with hot tags sidebar
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Video Export**: Generate MP4 animations of forum interfaces
- **Mock Data Layer**: Complete offline functionality without external dependencies

## Project Statistics

- **25+ Components** - Modular React architecture
- **15+ Pages** - Complete forum navigation
- **2 Animation Systems** - Claude UI and Pantip interface demos
- **100+ Mock Posts** - Diverse content across all categories
- **Thai Language Support** - Authentic localization

## Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Animation preview
npm run remotion:preview

# Render video
npm run remotion:render
```

## Video Rendering

Generate animation videos:

```bash
npx remotion render remotion/index.ts PantipRemotion out/pantip-ui.mp4
npx remotion render remotion/index.ts IsometricClaudeUI out/claude-ui.mp4
```

## Purpose

This project serves as a learning platform to explore and demonstrate:
- Modern React/Next.js development patterns
- Advanced animation techniques with Remotion
- SEO optimization strategies
- TypeScript implementation in large applications
- Mock data architecture for offline development
- Video generation from web interfaces

## Architecture

The application uses a complete mock data system, eliminating external dependencies while providing a realistic forum experience. All data operations simulate async behavior with Promise-based functions, making it easy to transition to real APIs in the future.
