# NextJS (App Router ✨) TailwindCSS Starter + MUI and MUI X Date Pickers

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It uses the now stable App Router feature.

## `'use client'` :(

Unfortunately, we must use `'use client'` in most of the components, limiting the benefits of SSR. However, we can still use SSR for the initial page load.

This limitation is due to the lack of interoperability between NextJS and MUI (specifically `@emotion`). See [this issue](https://github.com/mui/material-ui/issues/34898). Once this is resolved, we can remove `'use client'` from most of the components.

## Code Quality

It includes ESLint, Prettier, and TypeScript support out of the box. It includes appropriate [VS Code settings](./.vscode/settings.json) to ensure a consistent development experience.

ESLint enforces [encapsulation of 🪝s](https://kyleshevlin.com/use-encapsulation). It's only a ⚠️ warning, but it's a good practice to follow.

It includes a pre-commit 🪝 using `husky` and `lint-staged` (see `package.json`).

It includes [Zod](https://github.com/colinhacks/zod) with [React Hook Form](https://react-hook-form.com/) support for form validation.

## Dev Experience

It can always be debatable, but there is a `.vscode` with settings and recommended extensions. Generally, as you work, once you leave the file it will automatically save 💾, lint (auto-fixes as much as it can) and prettify/format the code. The result is much less manual code formatting/correcting.

## Animation

It includes [Framer Motion](https://www.framer.com/motion/).

## Data Fetching

[`ky`](https://github.com/sindresorhus/ky) is included to perform the actual fetching.

It includes [SWR](https://swr.vercel.app/) for data fetching/caching.

> With SWR, components will get a stream of data updates constantly and automatically.
> And the UI will be always fast and reactive.

## 💹

It includes [Recharts](https://recharts.org/en-US/guide). Use this for...charts 💹 (e.g. Analytics).

## Snackbars

It includes [Notistack](https://iamhosseindhv.com/notistack) for snackbars.

## Testing ✅

Cypress for Additional Integration/E2E Testing

## Getting Started

First, run the development server: `npm run dev`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
