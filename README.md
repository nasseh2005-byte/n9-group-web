# N9 GROUP Website

Next.js website structure for N9 GROUP, designed for GitHub and Vercel deployment.

## Run locally

```powershell
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:3000`.

## Admin login

Copy `.env.example` to `.env.local` and change the values:

```txt
ADMIN_USER=n9admin
ADMIN_PASSWORD=your-secure-password
```

The protected admin page is available at `/admin`.
