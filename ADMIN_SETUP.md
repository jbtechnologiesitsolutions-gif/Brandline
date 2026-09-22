# BrandlineTech Admin Panel

The project now includes a protected admin area at `/admin` and an admin login at `/admin-login`.

## Authentication

Authentication is server-side and uses an HTTP-only session cookie. The login checks:

- `ADMIN_EMAIL`
- `ADMIN_PASSWORD_HASH` (PBKDF2-SHA256, 310,000 iterations)
- `SESSION_SECRET` (32+ random characters)

Do **not** put these values in `VITE_*` variables or client-side code.

### 1. Create `.env`

Copy `.env.example` to `.env`.

### 2. Generate the password hash

```bash
node scripts/generate-admin-hash.mjs "YourStrongAdminPassword"
```

Put the output into `ADMIN_PASSWORD_HASH`.

### 3. Generate a session secret

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Put the output into `SESSION_SECRET`.

### 4. Run

```bash
npm install
npm run dev
```

Open `/admin-login`.

## Important production note

The admin authentication is real server-side session authentication, but the dashboard's business/content records are currently UI scaffolding. To make Services, Leads, Testimonials, Website Content, Marketplace, and SEO settings persist across deployments, connect those sections to a database/API (Supabase, PostgreSQL, MySQL, etc.). The private data/API boundary should also use the same authentication middleware before reads/writes.
