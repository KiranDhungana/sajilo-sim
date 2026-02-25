This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser. The home page is at `src/app/(marketing)/page.tsx`.

## Deploying on a VPS

If you see the default Next.js welcome page (“To get started, edit the page.tsx file”, Deploy Now, Documentation) after deploying to a VPS, **the server is running old or different code**—not this repo.

Do this on the VPS:

1. **Use the same codebase**  
   Deploy from this repo (e.g. `git clone` / `git pull`), or upload the full project including:
   - `src/app/(marketing)/` (home page)
   - `src/app/(app)/`
   - `src/components/`
   - `src/features/`
   - `src/lib/`, `src/hooks/`, `src/types/`

2. **Install, build, and run**
   ```bash
   npm ci
   npm run build
   npm run start
   ```

3. **Avoid old build/cache**  
   Remove the previous build before building again:
   ```bash
   rm -rf .next
   npm run build
   npm run start
   ```

4. **Confirm**  
   The site root `/` should show the Sajilo Sim landing (hero, destinations, offers, footer). If it still shows the default Next.js page, the process (e.g. PM2, Docker, or your deploy script) is likely running from a different directory or an old copy of the app.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
