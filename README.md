# Uttam Kumar Singh — Portfolio

A responsive Next.js portfolio for AI/LLM engineering, AI infrastructure, applied research, and full-stack work.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Create a GitHub repository and push this folder.
2. Sign in at https://vercel.com and choose **Add New → Project**.
3. Import the repository. Vercel detects Next.js automatically.
4. Keep the default build settings and click **Deploy**.
5. Add your custom domain in the project settings if you have one.

## Deploy to Render

1. Push this folder to GitHub.
2. In Render, choose **New → Web Service** and connect the repository.
3. Build command: `npm install && npm run build`
4. Start command: `npm run start`
5. Choose a Node runtime and deploy.

## Before publishing

- Replace the LinkedIn URL if you use a different profile.
- Add your GitHub profile and real project/demo links when available.
- Confirm that all project descriptions and metrics are accurate and public-safe.
- Update `metadataBase` in `app/layout.tsx` to your live domain after deployment.
- The resume currently lists the email and phone; the site intentionally uses email as the public contact method.
