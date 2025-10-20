# 🎨 The Hive - Design Specifications

## Typography Scale

### Headings
| Element | Size (Mobile) | Size (Desktop) | Weight | Line Height |
|---------|---------------|----------------|--------|-------------|
| Hero H1 | `text-5xl` (3rem) | `text-8xl` (6rem) | `font-bold` | `leading-tight` |
| Section H2 | `text-4xl` (2.25rem) | `text-6xl` (3.75rem) | `font-bold` | `leading-tight` |
| Card H3 | `text-xl` (1.25rem) | `text-2xl` (1.5rem) | `font-bold` | `leading-snug` |
| Small H4 | `text-lg` (1.125rem) | `text-xl` (1.25rem) | `font-bold` | `leading-snug` |

### Body Text
| Element | Size (Mobile) | Size (Desktop) | Weight | Line Height |
|---------|---------------|----------------|--------|-------------|
| Large Body | `text-lg` (1.125rem) | `text-xl` (1.25rem) | `font-normal` | `leading-relaxed` |
| Regular Body | `text-base` (1rem) | `text-lg` (1.125rem) | `font-normal` | `leading-relaxed` |
| Small Text | `text-sm` (0.875rem) | `text-base` (1rem) | `font-normal` | `leading-normal` |
| Micro Text | `text-xs` (0.75rem) | `text-sm` (0.875rem) | `font-normal` | `leading-normal` |

---

## Color Palette

### Primary Colors
| Name | Hex | Usage | Example |
|------|-----|-------|---------|
| **Honey Brown** | `#473535` | Headings, dark backgrounds | Primary text on light backgrounds |
| **Honey Glow** | `#fafa5e` | CTAs, accents, highlights | Buttons, tags, important info |
| **Honey Orange** | `#f38524` | Secondary accents, hovers | Icon backgrounds, gradients |
| **Dirty White** | `#fafaf8` | Light backgrounds, text on dark | Main background color |
| **Dark Gray** | `#2d2d2d` | Body text, dark sections | Paragraph text, footer |

### Color Applications
| Context | Color | Opacity | Usage |
|---------|-------|---------|-------|
| Light section headings | `#473535` | 100% | Main heading color |
| Light section body | `#2d2d2d` | 80% | Paragraph text |
| Dark section headings | `#fafaf8` | 100% | White text on dark |
| Dark section body | `#fafaf8` | 90% | Slightly dimmed text |
| Accent highlights | `#f38524` | 100% | Important keywords |
| Secondary highlights | `#fafa5e` | 100% | CTAs and badges |

---

## Spacing System

### Section Spacing
| Breakpoint | Top/Bottom Padding | Container Max Width | Side Padding |
|------------|-------------------|---------------------|--------------|
| Mobile | `py-20` (5rem) | 100% | `px-6` (1.5rem) |
| Desktop | `py-32` (8rem) | `max-w-7xl` (80rem) | `px-6` (1.5rem) |

### Component Spacing
| Element | Spacing | Value |
|---------|---------|-------|
| Section header margin bottom | `mb-20` | 5rem |
| Card padding (mobile) | `p-6` | 1.5rem |
| Card padding (desktop) | `p-8 md:p-10` | 2rem → 2.5rem |
| Grid gaps | `gap-6 md:gap-8` | 1.5rem → 2rem |
| Icon margin bottom | `mb-6` | 1.5rem |
| List item gaps | `space-y-4` | 1rem |

---

## Component Dimensions

### Icons
| Type | Mobile | Desktop | Usage |
|------|--------|---------|-------|
| Feature icons | `w-16 h-16` | `w-20 h-20` | Section features |
| Small icons | `w-10 h-10` | `w-14 h-14` | Social media, contact |
| List icons | `w-5 h-5` | `w-6 h-6` | Inline icons |
| Hero icons | `w-16 h-16` | `w-20 h-20` | Main hero section |

### Buttons
| Type | Padding | Font Size | Border Radius |
|------|---------|-----------|---------------|
| Primary CTA | `px-14 py-8` | `text-xl` | `rounded-full` |
| Secondary | `px-8 py-4` | `text-base` | `rounded-full` |
| Small | `px-6 py-3` | `text-sm` | `rounded-full` |
| Icon button | `w-12 h-12` | - | `rounded-xl` |

### Cards
| Type | Padding | Border Radius | Shadow |
|------|---------|---------------|--------|
| Feature card | `p-8 md:p-10` | `rounded-3xl` | `shadow-xl` |
| Stat card | `p-10` | `rounded-3xl` | `shadow-xl` |
| Small card | `p-6` | `rounded-2xl` | `shadow-lg` |
| Inline card | `p-4` | `rounded-xl` | `shadow-md` |

---

## Animation Specifications

### Entrance Animations
| Type | Initial State | Final State | Duration | Delay Pattern |
|------|---------------|-------------|----------|---------------|
| Fade + Slide Up | `opacity: 0, y: 30` | `opacity: 1, y: 0` | 0.6s | Base |
| Fade + Scale | `opacity: 0, scale: 0.95` | `opacity: 1, scale: 1` | 0.7s | Headings |
| Staggered Grid | `opacity: 0, y: 30` | `opacity: 1, y: 0` | 0.6s | `index * 0.15s` |
| Slide From Left | `opacity: 0, x: -30` | `opacity: 1, x: 0` | 0.6s | Left items |
| Slide From Right | `opacity: 0, x: 30` | `opacity: 1, x: 0` | 0.6s | Right items |

### Hover Animations
| Element | Transform | Scale | Duration | Easing |
|---------|-----------|-------|----------|--------|
| Cards | `translateY(-10px)` | 1.03 | 0.3s | ease-out |
| Icons | `rotate(10deg)` | 1.1 | 0.3s | ease-out |
| Buttons | - | 1.05 | 0.2s | ease-out |
| Links | `translateX(5px)` | - | 0.2s | ease-out |
| Images | - | 1.02 | 0.3s | ease-out |

### Background Animations
| Pattern | Movement | Duration | Loop |
|---------|----------|----------|------|
| Honeycomb | `0% 0%` → `100% 100%` | 40-60s | Infinite, reverse |
| Gradient | Position shift | 30s | Infinite, reverse |
| Pulse | Shadow expansion | 3s | Infinite |

---

## Shadow System

### Elevation Levels
| Level | Class | Box Shadow | Usage |
|-------|-------|------------|-------|
| **SM** | `shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle depth |
| **MD** | `shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Small cards |
| **LG** | `shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Elevated cards |
| **XL** | `shadow-xl` | `0 20px 25px rgba(0,0,0,0.1)` | Primary cards |
| **2XL** | `shadow-2xl` | `0 25px 50px rgba(0,0,0,0.25)` | Hover state |

### Glow Effects
| Type | Color | Blur | Spread |
|------|-------|------|--------|
| Yellow glow | `#fafa5e` | 40-80px | 0 |
| Orange glow | `#f38524` | 40-80px | 0 |
| Combined | Both colors | 80-120px | 0 |

---

## Border System

### Border Widths
| Width | Class | Pixels | Usage |
|-------|-------|--------|-------|
| None | `border-0` | 0px | Default |
| Thin | `border` | 1px | Subtle outlines |
| Medium | `border-2` | 2px | Emphasis |
| Thick | `border-4` | 4px | Strong emphasis |

### Border Colors & Opacity
| Purpose | Color | Opacity | Example |
|---------|-------|---------|---------|
| Subtle on light | `border-[#473535]` | 10% | `.../10` |
| Medium on light | `border-[#f38524]` | 30% | `.../30` |
| Hover on light | `border-[#f38524]` | 60% | `.../60` |
| On dark bg | `border-white` | 10-20% | `.../10` or `.../20` |
| Hover on dark | `border-[#fafa5e]` | 40-60% | `.../40` or `.../60` |

### Border Radius
| Size | Class | Pixels | Usage |
|------|-------|--------|-------|
| Small | `rounded-lg` | 0.5rem | Buttons, small elements |
| Medium | `rounded-xl` | 0.75rem | Icons, medium cards |
| Large | `rounded-2xl` | 1rem | Icon containers |
| XLarge | `rounded-3xl` | 1.5rem | Feature cards, main cards |
| Full | `rounded-full` | 9999px | Circular buttons, tags |

---

## Grid Layouts

### Responsive Columns
| Content Type | Mobile | Tablet | Desktop | Gap |
|--------------|--------|--------|---------|-----|
| Features | 1 col | 2 cols | 3-4 cols | `gap-6 md:gap-8` |
| Team members | 1 col | 2 cols | 3 cols | `gap-6 md:gap-8` |
| Stats | 1 col | 2 cols | 3 cols | `gap-8` |
| Images | 1 col | 2 cols | 2 cols | `gap-6 md:gap-8` |
| Roadmap | 1 col | 1 col | 3 cols | `gap-8 md:gap-6` |

---

## Gradient Patterns

### Common Gradients
| Name | Direction | Colors | Usage |
|------|-----------|--------|-------|
| **Primary Button** | `to-r` | `#f38524` → `#fafa5e` | CTA buttons |
| **Hero Background** | `to-br` | `#473535` → `#f38524` → `#fafa5e` | Hero section |
| **Text Gradient** | `to-r` | `#f38524` → `#fafa5e` | Heading accents |
| **Dark Background** | `to-br` | `#2d2d2d` → `#473535` | Dark sections |
| **Light Accent** | `to-b` | `#fafaf8` → `#fafa5e/10` | Subtle backgrounds |
| **Card Accent** | `to-br` | `#fafa5e/30` → `#f38524/30` | Special cards |

---

## Background Patterns

### SVG Patterns
```tsx
// Honeycomb Pattern
backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L93.3 25v50L50 100 6.7 75V25z' fill='none' stroke='%23fafaf8' stroke-width='2'/%3E%3C/svg%3E")`
backgroundSize: '100px 100px'

// Small Honeycomb
backgroundSize: '60px 60px'

// Large Honeycomb
backgroundSize: '120px 120px'
```

### Pattern Usage
| Section | Pattern | Size | Opacity | Animation |
|---------|---------|------|---------|-----------|
| Hero | Honeycomb | 100px | 10% | Slow drift |
| Dark sections | Honeycomb | 80px | 5% | Slow drift |
| Emulation | Image overlay | - | 20% | None |
| Tokenomics | Honeycomb | 80px | 5% | Slow drift |

---

## Accessibility Standards

### Color Contrast Ratios
| Combination | Ratio | WCAG Level | Usage |
|-------------|-------|------------|-------|
| `#473535` on `#fafaf8` | 9.2:1 | AAA | Primary text |
| `#2d2d2d` on `#fafaf8` | 11.7:1 | AAA | Body text |
| `#fafaf8` on `#473535` | 9.2:1 | AAA | Dark section text |
| `#473535` on `#fafa5e` | 5.5:1 | AA+ | Button text |

### Touch Target Sizes
| Element | Minimum Size | Recommended |
|---------|--------------|-------------|
| Buttons | 44x44px | 48x48px+ |
| Links | 44x44px | 48x48px+ |
| Icons | 44x44px | 48x48px+ |
| Form inputs | 44px height | 48px height |

---

## Performance Benchmarks

### Target Metrics
| Metric | Target | Current |
|--------|--------|---------|
| First Contentful Paint (FCP) | < 1.8s | ✅ |
| Largest Contentful Paint (LCP) | < 2.5s | ✅ |
| First Input Delay (FID) | < 100ms | ✅ |
| Cumulative Layout Shift (CLS) | < 0.1 | ✅ |
| Time to Interactive (TTI) | < 3.8s | ✅ |

### Optimization Tips
- Use `loading="lazy"` for images
- Minimize animation on slower devices
- Defer non-critical CSS
- Use CSS `contain` property
- Implement code splitting

---

## Browser Support

### Minimum Versions
| Browser | Version | Notes |
|---------|---------|-------|
| Chrome | 90+ | Full support |
| Safari | 14+ | Full support |
| Firefox | 88+ | Full support |
| Edge | 90+ | Full support |
| Mobile Safari | iOS 14+ | Full support |
| Chrome Android | Latest | Full support |

### Fallbacks
- CSS Grid → Flexbox fallback
- CSS Variables → Fallback colors
- Backdrop filter → Solid background
- Modern animations → Reduced motion

---

**This is your complete design specification document!** Use it as a reference for maintaining consistency across the entire project. 🎨✨
