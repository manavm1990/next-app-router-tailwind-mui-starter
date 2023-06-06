# NextJS (App Router ✨) TailwindCSS Starter + MUI and MUI X Date Pickers

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It uses the now stable App Router feature.

It includes many starter files/folders that you may or may not need. Reference [the docs](https://nextjs.org/docs/getting-started/project-structure#app-routing-conventions) and add/delete as you like. Consider [Colocation.](https://nextjs.org/docs/app/building-your-application/routing#colocation)

You're encouraged to [Split project files by feature or route](https://nextjs.org/docs/app/building-your-application/routing/colocation#split-project-files-by-feature-or-route).

You'll also want a `.env.local` where you will store your secrets 🙈.

## `'use client'` :(

Unfortunately, we must use `'use client'` in most of the components, limiting the benefits of SSR. However, we can still use SSR for the initial page load.

This limitation is due to the lack of interoperability between NextJS and MUI (specifically `@emotion`). See [this issue](https://github.com/mui/material-ui/issues/34898). Once this is resolved, we can remove `'use client'` from most of the components.

Read more about [the `use client` directive](https://nextjs.org/docs/getting-started/react-essentials#the-use-client-directive). It's not ideal, but it's not the end of the world. For now, we are actually bypassing much of the advantage of the _App Router_ feature...for now!

## `import 'server-only';`

`server-only` has been included. Extra! Extra! [Read all about it.](https://nextjs.org/docs/getting-started/react-essentials#the-server-only-package). `client-only` is also available.

## Code Quality

It includes ESLint, Prettier, and TypeScript support out of the box. It includes appropriate [VS Code settings](./.vscode/settings.json) to ensure a consistent development experience.

ESLint enforces [encapsulation of 🪝s](https://kyleshevlin.com/use-encapsulation). It's only a ⚠️ warning, but it's a good practice to follow. There is a `./app/hooks` folder where you can put your hooks.

It includes a pre-commit 🪝 using `husky` and `lint-staged` (see `package.json`).

It includes [Zod](https://github.com/colinhacks/zod) with [React Hook Form](https://react-hook-form.com/) support for form validation.

### [Async Server Component TypeScript Error](https://nextjs.org/docs/app/building-your-application/configuring/typescript#async-server-component-typescript-error)

```ts
import { ExampleAsyncComponent } from './ExampleAsyncComponent';
export default function Page() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <ExampleAsyncComponent />
    </>
  );
}
```

## Dev Experience

It can always be debatable, but there is a `.vscode` with settings and recommended extensions. Generally, as you work, once you leave the file it will automatically save 💾, lint (auto-fixes as much as it can), and, prettify/format the code. The result is much less manual code formatting/correcting.

## Animation

It includes [Framer Motion](https://www.framer.com/motion/).
It includes [GSAP](https://greensock.com/gsap/). 💫 See [Getting Started with GSAP + React](https://greensock.com/react-basics).

## Data Fetching

~~[`ky`](https://github.com/sindresorhus/ky) is included to perform the actual fetching.~~

> if you need to fetch data in a Client Component, we recommend using a third-party library such as SWR or React Query.
> [Source](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#use-in-client-components)

It includes ~~[SWR](https://swr.vercel.app/)~~ [React Query](https://tanstack.com/query/v4) for data fetching/caching.

## 💹

It includes [Recharts](https://recharts.org/en-US/guide). Use this for...charts 💹 (e.g. Analytics).

## Snackbars

It includes [Notistack](https://iamhosseindhv.com/notistack) for snackbars.

## [Spin Delay](https://github.com/smeijer/spin-delay)

## Testing ✅

~~Cypress for Additional Integration/E2E Testing.~~ Unfortunately, this doesn't seem to be working with App Router (yet).

## Getting Started

First, run the development server: `npm run dev`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed at [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

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
