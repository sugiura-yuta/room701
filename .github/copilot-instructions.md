# Portfolio Project Instructions

## Scope

These instructions apply to all tasks in this repository unless a more specific file instruction overrides them.

## Stack and Build Rules

- Use Astro with Tailwind CSS v4 via the Vite plugin configuration in [astro.config.mjs](../astro.config.mjs).
- Keep theme tokens centralized in [src/styles/global.css](../src/styles/global.css) using semantic token classes (for example, `text-primary`, `bg-surface-container-low`).
- Do not introduce raw hex colors in page/component markup when an existing token already covers the use case.
- Keep `pnpm` as the package manager and validate major changes with `pnpm build` or `pnpm exec astro check`.

## Styling and Component Rules

- Prefer Tailwind utility classes for layout and styling in Astro components.
- Avoid mixing legacy local `<style>` blocks that can override Tailwind layout unintentionally.
- If local styles are necessary, scope them narrowly and ensure they do not target generic tags (`nav`, `h1`, `p`) used by other sections.
- Preserve responsive behavior on mobile first; avoid horizontal overflow regressions.

## Content and Tone Rules

- Default writing tone should be factual, calm, and professional in Japanese.
- Avoid excessive sales-like emphasis or decorative highlighting unless explicitly requested.
- Keep emphasis minimal and hierarchy clear: main heading, supporting line, then body copy.
- Maintain priority balance for landing copy: roughly 80% technical capability/results and 20% legal/logical background.

## Editing Principles

- Make minimal diffs and avoid unrelated refactors.
- Keep existing naming and file structure unless the task explicitly asks for changes.
- When touching hero content in [src/pages/index.astro](../src/pages/index.astro), preserve readability with sufficient spacing and restrained font scaling.
