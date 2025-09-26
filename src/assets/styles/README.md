# 🎨 Modular Theme System

A mathematically derived, modular color system where **ALL colors are calculated from just 4 base colors**. Perfect for maintaining design consistency and making theme-wide changes effortlessly.

## 📁 File Structure

```
src/assets/styles/
├── _theme.scss              ← Main entry point (imports everything)
├── _theme-system.scss       ← Master import file with documentation
├── _base-colors.scss        ← 🎯 Base palette (ONLY file to modify)
├── _computed-colors.scss    ← Primary & semantic colors
├── _interactive-colors.scss ← Hover, focus, border states
├── _component-colors.scss   ← Cards, buttons, status colors
├── _gradients-shadows.scss  ← Visual effects
├── _spacing-sizing.scss     ← Layout & typography tokens
├── _utilities.scss          ← CSS utility classes
└── _components.scss         ← Ready-made component styles
```

## 🚀 Quick Start

### Change the Entire Theme

Edit **only** `_base-colors.scss`:

```scss
/* Change these 12 values to transform everything! */
--base-1-h: 205;
--base-1-s: 32%;
--base-1-l: 54%; /* Primary */
--base-2-h: 198;
--base-2-s: 32%;
--base-2-l: 69%; /* Secondary */
--base-3-h: 201;
--base-3-s: 23%;
--base-3-l: 78%; /* Tertiary */
--base-4-h: 46;
--base-4-s: 33%;
--base-4-l: 90%; /* Accent */
```

### Example: Warm Sunset Theme

```scss
--base-1-h: 25; /* Orange */
--base-1-s: 70%; /* High saturation */
--base-1-l: 45%; /* Medium lightness */

--base-2-h: 35; /* Yellow-orange */
--base-2-s: 65%;
--base-2-l: 60%;

--base-3-h: 45; /* Yellow */
--base-3-s: 55%;
--base-3-l: 75%;

--base-4-h: 55; /* Yellow-green */
--base-4-s: 40%;
--base-4-l: 90%;
```

**Result:** 50+ colors update automatically while maintaining perfect harmony! 🎉

## 🎯 What Gets Auto-Calculated

- ✅ **50+ Color Variations**: Lighter, darker, muted, vibrant versions
- ✅ **Interactive States**: Hover, focus, active, disabled
- ✅ **Gradients**: Multi-color backgrounds with smooth transitions
- ✅ **Shadows**: Color-matched shadows at different intensities
- ✅ **Text Colors**: Auto-calculated for optimal contrast
- ✅ **Component Colors**: Cards, buttons, borders, status indicators
- ✅ **Transparency Overlays**: Alpha variations for overlays

## 🛠️ Usage Examples

### In HTML

```html
<div class="theme-card">
  <h2 class="theme-text-primary">Card Title</h2>
  <p class="theme-text-secondary">Card content</p>
  <button class="btn-primary">Primary Button</button>
</div>
```

### In Angular Components

```scss
.my-component {
  background: var(--color-surface);
  color: var(--color-text-primary);
  box-shadow: var(--shadow-md);

  &:hover {
    background: var(--color-hover);
    box-shadow: var(--shadow-lg);
  }
}
```

## 🎨 Available CSS Custom Properties

### Base Colors

- `--color-primary-darkest` / `--color-primary-dark` / `--color-primary-medium` / `--color-primary-light`

### Text Colors

- `--color-text-primary` / `--color-text-secondary` / `--color-text-muted` / `--color-text-accent`

### Interactive States

- `--color-hover` / `--color-active` / `--color-focus` / `--color-disabled`

### Gradients

- `--gradient-primary` / `--gradient-accent` / `--gradient-overlay` / `--gradient-subtle`

### Shadows

- `--shadow-sm` / `--shadow-md` / `--shadow-lg` / `--shadow-xl` / `--shadow-glow`

### Layout Tokens

- `--space-xs` to `--space-3xl` (spacing)
- `--radius-sm` to `--radius-full` (border radius)
- `--font-size-xs` to `--font-size-6xl` (typography)

## 🔧 Advanced Customization

### Add New Derived Colors

Add to `_computed-colors.scss`:

```scss
--color-custom: hsl(
  calc(var(--base-1-h) + 30),
  /* Shift hue by 30 degrees */ var(--base-1-s),
  calc(var(--base-1-l) + 20%) /* Make 20% lighter */
);
```

### Create Custom Components

Add to `_components.scss`:

```scss
.my-custom-card {
  background: var(--color-card-background);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  box-shadow: var(--shadow-md);
}
```

## ✨ Benefits

1. **🎯 Single Source of Truth**: Change 4 colors → update entire theme
2. **🎨 Perfect Harmony**: Mathematical relationships ensure consistency
3. **♿ Accessible**: Auto-calculated contrast ratios
4. **🔧 Maintainable**: Modular architecture, easy to extend
5. **🚀 Performant**: CSS custom properties, no JavaScript needed
6. **📱 Responsive**: Works with all screen sizes and devices

## 🤝 Contributing

To add new color variations or components:

1. **Colors**: Add to appropriate `_*-colors.scss` file
2. **Components**: Add to `_components.scss`
3. **Utilities**: Add to `_utilities.scss`
4. **Layout Tokens**: Add to `_spacing-sizing.scss`

---

**Made with ❤️ for maintainable, scalable design systems**
