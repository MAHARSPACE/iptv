# NexusView IPTV Website

Production-ready IPTV landing site built with Next.js + React, Tailwind CSS, and Framer Motion.

## Stack
- Next.js 16
- React 19
- Tailwind CSS
- Framer Motion

## Project Structure
- `components/` reusable UI sections and widgets
- `pages/` Next.js routes and app wrappers
- `styles/` global Tailwind styles
- `public/` static assets + editable JSON data (`public/data/pricing.json`)

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```
3. Build production bundle:
   ```bash
   npm run build
   ```
4. Start production server:
   ```bash
   npm run start
   ```

## Editable Pricing
Update pricing plans in:
- `public/data/pricing.json`

## Performance Tips
- Use optimized static assets in `public/`
- Keep sections componentized and lazy where needed
- Build and audit with Lighthouse in production mode
