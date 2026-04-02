# Wunder UI

Design system built on top of [shadcn/ui](https://ui.shadcn.com), used across Wunderlabs applications.

## Stack

- **UI framework:** React 19
- **Component base:** shadcn/ui (radix-nova style, Radix primitives)
- **Styling:** Tailwind CSS 4
- **Icons:** Custom (project-specific)
- **Development:** Storybook 8 (Vite)
- **Linting:** oxlint
- **Formatting:** oxfmt
- **Package manager:** pnpm

## Project structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui primitives (managed by shadcn CLI)
│   └── {component-name}/ # custom design system components
│       ├── {component-name}.tsx
│       ├── {component-name}.stories.tsx
│       └── index.ts
├── helpers/
│   └── utils.ts         # cn() helper
└── static/
    └── css/
        └── style.css    # Tailwind theme tokens
```

## Commands

- `pnpm dev` — start Storybook dev server (port 6006)
- `pnpm build` — build static Storybook to `out/`
- `pnpm lint` / `pnpm lint:fix` — run oxlint
- `pnpm fmt` / `pnpm fmt:check` — run oxfmt

## Code conventions

- DRY: extract shared patterns, no copy-paste
- YAGNI: no speculative features or unused abstractions
- Fail fast: validate inputs early, return/throw before the happy path
- Errors are values: structured error types with context, no bare `catch {}`
- Name by what it does in the domain, not how it's implemented
- Comments explain _why_, never temporal context or what changed
- Avoid magic primitives in logic: use named constants for raw strings, numbers, or booleans that appear in conditionals or repeated logic. String literals in type-constrained contexts (CVA variants, object keys, default values) are fine as-is

## Components

- Components must be arrow functions (`const Foo = () => {}`) not function declarations
- All file and directory names must be lowercase kebab-case (e.g. `button.tsx`, `date-picker/`)
- On macOS (case-insensitive FS), rename via a temp name: `mv Foo foo-tmp && mv foo-tmp foo`
- Each component lives in its own directory with a barrel `index.ts`
- Every component must have a corresponding `.stories.tsx` file
- Use `tags: ["autodocs"]` in story meta for automatic documentation

## Styling

- Always use Tailwind utility classes. No arbitrary values (`[...]`), no inline styles, no raw CSS on elements
- If a value does not exist as a Tailwind class, add it as a theme token in `src/static/css/style.css` under `@theme` and use the resulting class
- Design tokens follow the pattern `--{utility}-{name}` (e.g. `--color-primary`, `--radius-lg`)
- Use Tailwind opacity modifiers (`bg-primary/20`) instead of rgba values
- Never use template literal interpolation for className. Always use `cn()` from `@/helpers/utils` for conditional classes

## Adding shadcn components

```bash
npx shadcn@latest add <component>
```

Components are installed into `src/components/ui/`. Do not manually edit these files — extend them by wrapping in custom components instead.
