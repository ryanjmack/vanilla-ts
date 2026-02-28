# ts-vanilla

opinionated vanilla typescript project shell

## Usage

```
pnpm dev           start dev server (output logged to vite.log, cleared on restart)
pnpm build         production build with sourcemaps
pnpm preview       serve the production build locally

pnpm fix           run all formatters and type-check
pnpm lint          read-only: tsc, eslint, stylelint, prettier
pnpm typecheck     type-check without emitting output

pnpm test          run tests once
pnpm test:watch    run tests in watch mode
```

Node and pnpm versions are pinned. I recommend [fnm](https://github.com/Schniz/fnm) and [corepack](https://nodejs.org/api/corepack.html).

## Stack

- **Vite**: fast dev server, native ESM, fast builds
- **Vitest**: shares Vite's module graph, no env drift
- **TypeScript**: `@tsconfig/strictest`
- **CSS Modules**: scoped styles per file
- **PostCSS + Autoprefixer**: modern CSS, no manual vendor prefixes
- **modern-css-reset**: clean baseline
- **ESLint + Prettier + Stylelint**: enforced code and style consistency
- **Husky + lint-staged + commitlint**: Conventional Commits, auto-fix on commit, full pipeline pre-push

## CI/CD

GitHub Actions runs on every push and PR to `main`:

```
lint -> test -> build
```

`pnpm lint` is the read-only verify step - no auto-fixing in CI, just fail fast.

Output is a static `dist/` folder, deploy anywhere that serves static files.
