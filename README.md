# ts-vanilla

opinionated vanilla typescript project shell

## Usage

```
pnpm dev           start dev server (output logged to vite.log, cleared on restart)
pnpm build         production build with sourcemaps
pnpm preview       serve the production build locally
pnpm check         fix lint/format issues then type-check
pnpm lint          auto-fix: eslint, stylelint, prettier
pnpm lint:check    read-only check: tsc, eslint, stylelint, prettier
pnpm typecheck     type-check without emitting output
pnpm test          run tests once
pnpm test:watch    run tests in watch mode
```

**Note:** Node and pnpm versions are pinned. Use [fnm](https://github.com/Schniz/fnm) to manage Node and [corepack](https://nodejs.org/api/corepack.html) to manage pnpm

## Stack

- **Vite**: instant dev server via native ESM, esbuild for dev speed, Rollup for optimized prod builds
- **Vitest**: shares Vite's module graph so there's no dev vs test environment drift
- **TypeScript**: maximum strictness via `@tsconfig/strictest` — catches bugs at compile time, not runtime
- **CSS Modules**: styles are scoped per file by default, no global naming conflicts to manage
- **PostCSS + Autoprefixer**: vendor prefixes handled automatically — write modern CSS, don't think about browser compat
- **modern-css-reset**: strips inconsistent browser defaults so you start from a clean slate
- **ESLint**: catches logic flaws TypeScript can't — unhandled promises, missing braces, that kind of thing
- **Prettier**: nobody debates formatting, it just gets formatted
- **Stylelint**: same idea as ESLint but for CSS — ordering, invalid values, typos
- **Husky + lint-staged + commitlint**: auto-fixes staged files on commit, enforces Conventional Commits, runs full pipeline pre-push so CI doesn't surprise you

## CI/CD

GitHub Actions runs on every push and PR to `main`:

```
lint -> test -> build
```

`pnpm lint:check` is the read-only verify step — no auto-fixing in CI, just fail fast.

Output is a static `dist/` folder, deploy anywhere that serves static files.
