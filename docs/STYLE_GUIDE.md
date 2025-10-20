# The Hive - Quick Style Reference Guide

## 🎨 Common Patterns

### Section Container
```tsx
<section className="py-20 md:py-32 bg-[#fafaf8]">
  <div className="max-w-7xl mx-auto px-6">
    {/* Content */}
  </div>
</section>
```

### Section Header
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-center mb-20"
>
  <motion.h2 
    className="text-4xl md:text-6xl font-bold mb-8 text-[#473535]"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    Your Heading Here
  </motion.h2>
  <p className="text-lg md:text-xl text-[#2d2d2d]/80 max-w-4xl mx-auto leading-relaxed">
    Your description text here
  </p>
</motion.div>
```

### Feature Card
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.15, duration: 0.6 }}
  whileHover={{ y: -10, scale: 1.03 }}
  className="p-8 md:p-10 rounded-3xl bg-white backdrop-blur-md border border-[#473535]/10 shadow-xl hover:shadow-2xl hover:border-[#f38524]/30 transition-all duration-300 group"
>
  <motion.div
    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
    style={{ backgroundColor: "#fafa5e" }}
    whileHover={{ rotate: 10, scale: 1.1 }}
    transition={{ duration: 0.3 }}
  >
    <Icon className="w-10 h-10 text-[#473535]" />
  </motion.div>
  <h3 className="text-2xl font-bold mb-4 text-[#473535]">Title</h3>
  <p className="text-[#2d2d2d]/70 text-base leading-relaxed">Description</p>
</motion.div>
```

### CTA Button
```tsx
<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  <Button
    asChild
    size="lg"
    className="bg-gradient-to-r from-[#f38524] to-[#fafa5e] hover:from-[#f38524]/90 hover:to-[#fafa5e]/90 text-[#473535] font-bold px-14 py-8 text-xl rounded-full shadow-2xl transition-all duration-300"
  >
    <a href="#" target="_blank" rel="noopener noreferrer">
      Button Text
    </a>
  </Button>
</motion.div>
```

## 🎯 Color Usage

### Backgrounds
- Light sections: `bg-[#fafaf8]`
- Dark sections: `bg-gradient-to-br from-[#2d2d2d] to-[#473535]`
- Accent gradients: `bg-gradient-to-br from-[#473535] via-[#f38524] to-[#fafa5e]`

### Text Colors
- Primary headings on light: `text-[#473535]`
- Primary headings on dark: `text-[#fafaf8]`
- Body text on light: `text-[#2d2d2d]/80`
- Body text on dark: `text-[#fafaf8]/90`
- Accents: `text-[#f38524]` or `text-[#fafa5e]`

### Borders
- Subtle: `border-[#473535]/10`
- Hover state: `hover:border-[#f38524]/30`
- Strong: `border-[#fafa5e]/40`

## ⚡ Animation Timing

### Standard Entrance
```tsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```

### With Scale
```tsx
initial={{ opacity: 0, scale: 0.95 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true }}
transition={{ duration: 0.7 }}
```

### Staggered (Grid Items)
```tsx
transition={{ delay: index * 0.15, duration: 0.6 }}
```

### Hover Effects
```tsx
whileHover={{ y: -10, scale: 1.03 }}
// or for icons
whileHover={{ rotate: 10, scale: 1.1 }}
transition={{ duration: 0.3 }}
```

## 📐 Spacing Scale

### Section Padding
- `py-20 md:py-32` - Main sections
- `mb-20` - Section header bottom margin
- `gap-6 md:gap-8` - Grid gaps

### Card Padding
- `p-8 md:p-10` - Large cards
- `p-6 md:p-8` - Medium cards
- `p-4 md:p-6` - Small cards

### Content Width
- `max-w-7xl` - Main container
- `max-w-4xl` - Text content
- `max-w-5xl` - Special sections

## 🔤 Typography Scale

### Headings
- Hero: `text-5xl md:text-7xl lg:text-8xl font-bold`
- H2: `text-4xl md:text-6xl font-bold`
- H3: `text-2xl font-bold`
- H4: `text-xl font-bold`

### Body
- Large: `text-lg md:text-xl`
- Base: `text-base`
- Small: `text-sm`

### Line Height
- Headings: `leading-tight`
- Body: `leading-relaxed`

## 🎨 Gradient Patterns

### Button Gradient
```tsx
className="bg-gradient-to-r from-[#f38524] to-[#fafa5e]"
```

### Text Gradient
```tsx
className="bg-gradient-to-r from-[#fafa5e] to-[#f38524] bg-clip-text text-transparent"
```

### Background Gradient
```tsx
className="bg-gradient-to-br from-[#473535] via-[#f38524] to-[#fafa5e]"
```

## 🌙 Dark Section Pattern
```tsx
<section className="py-20 md:py-32 bg-[#473535] relative overflow-hidden">
  {/* Animated Background Pattern */}
  <div className="absolute inset-0 opacity-5">
    <motion.div 
      className="absolute inset-0"
      animate={{
        backgroundPosition: ['0% 0%', '100% 100%']
      }}
      transition={{
        duration: 50,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear'
      }}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0L69.28 20v40L40 80 10.72 60V20z' fill='none' stroke='%23fafa5e' stroke-width='2'/%3E%3C/svg%3E")`,
        backgroundSize: '80px 80px'
      }}
    />
  </div>
  
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    {/* Content */}
  </div>
</section>
```

## 🐝 Honeycomb SVG Pattern
```tsx
backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L93.3 25v50L50 100 6.7 75V25z' fill='none' stroke='%23fafaf8' stroke-width='2'/%3E%3C/svg%3E")`,
backgroundSize: '100px 100px'
```

## 📱 Responsive Grid
```tsx
className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
```

Common patterns:
- 1 → 2 → 3: Features, team
- 1 → 2 → 4: Small icons, tags
- 1 → 2: Large content blocks

---

**Quick tip**: Copy and paste these patterns as starting points, then customize colors, spacing, and content as needed!
