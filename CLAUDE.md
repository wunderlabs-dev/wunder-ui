# Wunder UI

Design system built on top of [shadcn/ui](https://ui.shadcn.com), used across Wunderlabs applications.

## Stack

- **UI framework:** React 19
- **Component base:** shadcn/ui (radix-nova style, Radix primitives)
- **Styling:** Tailwind CSS 4
- **Animation:** Motion (framer-motion)
- **Icons:** Custom SVG icon system (project-specific)
- **Development:** Storybook 8 (Vite)
- **Linting:** oxlint
- **Formatting:** oxfmt
- **Package manager:** pnpm

## Project structure

```
src/
├── components/
│   ├── app-bar/          # Vertical navigation rail (Card solid + rounded sm)
│   ├── avatar/           # Radix Avatar with image + fallback
│   ├── badge/            # Status badges (success, warning, error)
│   ├── button/           # Buttons with CVA variants and startAdornment
│   ├── callout/          # Informational block with icon, title, body, action
│   ├── card/             # Card with 5 variants, rounded, spacing props
│   ├── input/            # Text input
│   ├── nav-list/         # Composable navigation list with groups and items
│   ├── pill/             # Compact status indicators
│   ├── status-bar/       # Horizontal status bar (Card + Badge/Pill children)
│   ├── steps/            # Step indicator list
│   ├── svg-icon/         # SVG icon system + individual icon components
│   ├── switch/           # Toggle switch (Radix)
│   ├── toast/            # Toast notifications with title, description, action
│   ├── typography/       # Typography system (h1, h2, body1, body2)
│   └── ui/               # shadcn/ui primitives (managed by shadcn CLI)
├── helpers/
│   └── utils.ts          # cn() helper (clsx + tailwind-merge)
└── static/
    └── css/
        └── style.css     # Tailwind theme tokens
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
- Never use unary `&&` for conditional rendering. Always use ternary: `{condition ? <Foo /> : null}`

## Component inventory

### Card

5 variants: `primary` (gray-950 + inset shadow), `secondary` (gray-900 + inset shadow), `solid` (gray-100/10), `outlined` (border + gray-950), `contained` (border + gray-900). Props: `variant`, `rounded` (sm=xl, md=3xl), `spacing` (none/xs/sm/md/lg/xl). Default: `primary`, `rounded="md"`, `spacing="lg"`.

### Button

7 variants: `link`, `primary`, `secondary`, `contained`, `success`, `error`, `ghost`. Sizes: `default`, `sm`, `icon`. Props: `startAdornment` (adjusts padding for avatar/icon prefix). Link uses text-decoration underline (only on text, not icons).

### Typography

4 variants: `h1` (36px semibold), `h2` (16px normal), `body1` (12px normal), `body2` (14px normal). Props: `variant`, `color` (default/muted/accent/success/warning/error/inherit), `weight` (normal/medium/semibold/bold), `as` (element override). Each variant has a default weight.

### NavList

Composable navigation: `NavList` > `NavListGroup` > `NavListGroupTitle` + `NavListGroupItems` > `NavListItem`. Items support `icon`, `action` (e.g. Switch), `active` state (bg-gray-800 + shadow). `NavListGroupItems` has `variant="flat"` to drop the left border/indent.

### Toast

Variants: `success`, `error`. Sizes: `default` (py-2), `lg` (py-3). Composable with `ToastTitle`, `ToastDescription`, `ToastAction`. Props: `icon`, `onClose`.

### SVG Icons

Base `SvgIcon` component with size (xs–xl/auto) and color (default/neutral/primary) props. Individual icons: browser (animated with motion), check, chevron-right, cross, cursor, download, eye, folder, gear, glitters, link, openable, openable-symbol, play, sidebar, skull, steps, x.

## Styling

- Always use Tailwind utility classes. No arbitrary values (`[...]`), no inline styles, no raw CSS on elements
- If a value does not exist as a Tailwind class, add it as a theme token in `src/static/css/style.css` under `@theme` and use the resulting class
- Design tokens follow the pattern `--{utility}-{name}` (e.g. `--color-primary`, `--radius-lg`)
- Use Tailwind opacity modifiers (`bg-primary/20`) instead of rgba values
- Never use template literal interpolation for className. Always use `cn()` from `@/helpers/utils` for conditional classes
- Class ordering: layout > sizing > spacing > shape > typography > visual > states > pseudo-elements

## Theme tokens (custom gray scale)

| Token      | Hex     | Usage                                                   |
| ---------- | ------- | ------------------------------------------------------- |
| `gray-50`  | #ffffff | Text default, icon default                              |
| `gray-100` | #b5b5b5 | Borders (gray-100/30), subtle backgrounds (gray-100/10) |
| `gray-200` | #808080 | Muted text                                              |
| `gray-800` | #303030 | NavListItem active, hover accents                       |
| `gray-900` | #252525 | Card secondary/contained, hover backgrounds             |
| `gray-950` | #191919 | Card primary/outlined, page background                  |

## Adding shadcn components

```bash
npx shadcn@latest add <component>
```

Components are installed into `src/components/ui/`. Do not manually edit these files — extend them by wrapping in custom components instead.
