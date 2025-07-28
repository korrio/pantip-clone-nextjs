# Remotion Animation Components

This directory contains advanced animation components built with Remotion-style patterns, designed for creating sophisticated web animations and video content.

## 🎬 IsometricClaudeUI

A comprehensive isometric animation showcasing Claude's interface with smooth transitions and 3D effects.

### Features

- **🎯 Isometric 3D Perspective**: `perspective(1000px) rotateX(15deg) rotateY(-10deg)`
- **⏱️ Staggered Animations**: Sequential element appearances with custom timing
- **🎨 Claude Design System**: Authentic colors and typography
- **💫 Floating Elements**: Dynamic 3D animations with sine wave motion
- **⌨️ Typing Simulation**: Animated dots with realistic timing
- **🇹🇭 Thai Text Integration**: Smooth scaling and appearance effects

### Animation Timeline

| Frame Range | Element | Effect |
|-------------|---------|--------|
| 0-30 | Container | Fade in with scaling |
| 20-50 | Sidebar | Slide in from left |
| 40-70 | User Message | Appear with slide up |
| 80-110 | Claude Response | Typewriter effect |
| 120-140 | Thai Text | Scale and fade in |

### Technical Implementation

```typescript
// Custom interpolation with easing
const interpolateValue = (
  value: number, 
  inputRange: [number, number], 
  outputRange: [number, number], 
  options: { easing?: string } = {}
) => {
  // Smooth easing calculations
  if (options.easing === 'easeOut') {
    easedProgress = 1 - Math.pow(1 - progress, 3);
  }
}

// Coordinated animation timing
const containerAppear = interpolateValue(componentFrame, [0, 30], [0, 1], { easing: 'easeOut' });
const messageAppear = interpolateValue(componentFrame, [40, 70], [0, 1], { easing: 'easeOut' });
```

### Color Palette

- **Primary**: `#c15f3c` (Claude Orange)
- **Secondary**: `#b1ada1` (Claude Gray)
- **Background**: `#252525` (Dark)
- **Accent**: `rgba(193, 95, 60, 0.2)` (Transparent Orange)

### Performance Optimizations

- Frame-based animation system (~20fps equivalent)
- Conditional rendering based on animation progress
- Optimized CSS transforms and transitions
- Minimal DOM updates

## 🚀 Usage

### In Remotion Project
```tsx
import { IsometricClaudeUI } from './components/animations/IsometricClaudeUI';

// In your Remotion composition
<IsometricClaudeUI />
```

### In Next.js Page
```tsx
// Visit /remotion to see the live demo
// Uses mock Remotion hooks for browser compatibility
```

## 🛠️ Mock Remotion Setup

Since this project doesn't have full Remotion dependencies, we use mock hooks:

```typescript
// lib/mockRemotion.ts
export const useCurrentFrame = () => {
  // Simulates Remotion's frame system
  // Auto-increments every ~50ms for 20fps
}

export const useVideoConfig = () => {
  return { fps: 20, width: 1920, height: 1080 };
}
```

## 🎨 Design Principles

1. **Authentic Interface Recreation**: Pixel-perfect Claude UI reproduction
2. **Smooth Transitions**: Eased animations for natural movement
3. **Isometric Depth**: 3D perspective without overwhelming complexity
4. **Performance First**: Optimized for smooth playback
5. **Brand Consistency**: Strict adherence to Claude's design system

## 📱 Responsive Considerations

- Fixed container dimensions (800x600) for consistent animation
- Viewport adaptation through CSS transforms
- Maintains aspect ratio across devices
- Optimized for desktop viewing experience

## 🔧 Customization

### Timing Adjustments
```typescript
// Modify animation timings
const containerAppear = interpolateValue(componentFrame, [0, 45], [0, 1]); // Slower
const messageAppear = interpolateValue(componentFrame, [30, 60], [0, 1]); // Faster
```

### Color Theming
```typescript
// Update color variables
const primaryColor = '#your-color';
const secondaryColor = '#your-secondary';
```

### Content Customization
```typescript
// Replace chat messages
const userMessage = "Your custom message";
const claudeResponse = "Custom Claude response";
```

## 🎯 Future Enhancements

- [ ] Multiple animation sequences
- [ ] Interactive controls (play/pause/scrub)
- [ ] Export to video functionality  
- [ ] Custom theme support
- [ ] Mobile-optimized version
- [ ] Audio synchronization
- [ ] Dynamic content injection

## 📚 Learning Resources

- [Remotion Documentation](https://remotion.dev)
- [CSS 3D Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [Animation Timing Functions](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function)
- [Claude Design System](https://claude.ai)

---

**Demo**: Visit `/remotion` to see the animation in action!
**Status**: ✅ Production Ready
**Compatibility**: Next.js 15+, React 19+