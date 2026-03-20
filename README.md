# Clark's Secure Web Solutions

## Contact Form Setup

The contact form uses Web3Forms directly from the frontend.

No Supabase setup is required for the contact page.

### Run locally

```bash
npm run dev
```

### Required env vars

Use the existing frontend variables in `.env`:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

Add this for contact form delivery:

- `VITE_WEB3FORMS_ACCESS_KEY`

### Get free Web3Forms key

1. Go to https://web3forms.com/
2. Create a free access key
3. Add `VITE_WEB3FORMS_ACCESS_KEY` to `.env`
4. Restart the dev server

### Verify submissions

After submitting the form, check your configured recipient inbox from Web3Forms.

