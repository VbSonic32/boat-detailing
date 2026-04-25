---
name: Lakeshore Detail Co.
version: 1.0.0
author: Antigravity
tokens:
  colors:
    primary:
      navy: "#0a1628"
      navy-mid: "#0f2044"
      navy-light: "#1a3a6e"
    accent:
      gold: "#c9a84c"
      gold-light: "#e8c97a"
      gold-subtle: "rgba(201, 168, 76, 0.12)"
    neutral:
      white: "#ffffff"
      off-white: "#f4f1eb"
      mist: "#d4dde8"
      text: "#1a2a40"
      text-muted: "#4a6080"
      surface: "#ffffff"
  typography:
    families:
      display: "'Cormorant Garamond', Georgia, serif"
      body: "'DM Sans', sans-serif"
    weights:
      light: 300
      regular: 400
      medium: 500
      semibold: 600
    sizes:
      hero: "clamp(3rem, 7vw, 5.5rem)"
      section-heading: "clamp(2.25rem, 4.5vw, 3.5rem)"
      body: "1rem"
      eyebrow: "0.6875rem"
  motion:
    curves:
      ease-out: "cubic-bezier(0.16, 1, 0.3, 1)"
      ease-in-out: "cubic-bezier(0.76, 0, 0.24, 1)"
    durations:
      fast: "0.2s"
      standard: "0.3s"
      slow: "0.7s"
      hero: "1.2s"
  spacing:
    container-px: "clamp(24px, 5vw, 80px)"
    section-py: "clamp(80px, 10vw, 140px)"
    gap-small: "12px"
    gap-medium: "24px"
    gap-large: "48px"
  radii:
    sharp: "2px"
    soft: "4px"
    circle: "50%"
  shadows:
    card-hover: "0 20px 60px rgba(10, 22, 40, 0.1)"
    btn-hover: "0 8px 32px rgba(201, 168, 76, 0.3)"
---

# Lakeshore Detail Co. Design System

## Visual Identity
The Lakeshore Detail Co. brand identity is built on a foundation of **Nautical Luxury** and **Marine Precision**. It targets high-end boat owners on Lake Conroe, TX, by evoking a sense of heritage, reliability, and meticulous care. The aesthetic balances the "Old Money" elegance of a yacht club with the crisp, modern efficiency of a professional detailing service.

## Design Philosophy
1.  **Marine Heritage**: Using deep navy as the anchor color to ground the brand in the maritime world.
2.  **Brilliance & Protection**: Gold accents represent both the sun on the water and the premium protection (Ceramic/Wax) provided to the vessel.
3.  **Breathability**: Extensive use of "Off-White" and "Mist" allows for a high-contrast, airy layout that feels as fresh as the open water.
4.  **Storytelling Flow**: Content is revealed through graceful `fadeUp` animations, creating a curated experience rather than a static page.

## Core Elements

### Typography
The system uses a high-contrast pairing to distinguish between elegance and utility:
- **Cormorant Garamond (Display)**: Used for all primary and secondary headings. Its delicate serifs and sweeping italics (`em`) evoke a sense of tradition and bespoke service.
- **DM Sans (Body)**: A clean, geometric sans-serif that handles all functional information and body copy. It provides a modern counterpoint to the display face, ensuring clarity and legibility.

### Color Palette
- **The Navy Stack**: A range of deep blues used for backgrounds and text. It creates depth and suggests the deep waters of the lake.
- **The Gold Accent**: Specifically tuned to `#c9a84c`, this is used for calls to action, icons, and decorative highlights. It signifies excellence and the "brilliance" promised in the hero statement.
- **Mist & Off-White**: These neutral tones prevent the dark navy from feeling heavy, providing a sense of space and cleanliness.

### Motion & Interaction
- **Water Ripples**: The hero section features CSS-animated SVG waves that move at varying speeds, creating a living background.
- **Reveal-on-Scroll**: Elements utilize a `.reveal` class that triggers a `0.7s` transition, ensuring the user feels the interface "waking up" as they navigate.
- **Tactile Responses**: Buttons and cards use subtle vertical translations (`-2px` or `-4px`) and shadow expansions to provide immediate feedback on hover.

### UI Components
- **The Eyebrow**: Small, uppercase text with wide letter-spacing (`0.2em`) accompanied by a fine `1px` gold line. This provides context without clutter.
- **Service Cards**: Minimalist white containers with a subtle `3px` gold progress-bar-style highlight on hover.
- **The Map Pin**: A pulsing gold dot that anchors the service area section, reinforcing the mobile, local nature of the business.

### Atmospheric Elements
- **Particle Systems**: Floating gold dots in the hero section add a layer of "magic" and depth, suggesting bubbles or sunlight catching dust/water.
- **Micro-Decorations**: Large, low-opacity typographic elements (like the quote marks in testimonials or "DETAIL" text in the CTA background) provide texture without distracting from the content.
- **Fine Dividers**: `1px` lines are used throughout to separate sections and group related items, maintaining a high-precision, "blueprint" feel.
