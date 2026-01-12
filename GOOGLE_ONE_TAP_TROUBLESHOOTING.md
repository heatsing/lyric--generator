# Google One Tap Login Troubleshooting

## Error: "The given client ID is not found" (invalid_client)

This error means Google cannot find or validate your OAuth Client ID. Follow these steps to fix it:

### Step 1: Add Environment Variable in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name**: `NEXT_PUBLIC_GOOGLE_CLIENT_ID`
   - **Value**: `404702389910-ea05iba1famkjpq3pspcs68dgpo45jgi.apps.googleusercontent.com`
   - **Environment**: Check all (Production, Preview, Development)
4. Click **Save**

### Step 2: Configure Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select project: **gen-lang-client-0681187523**
3. Navigate to **APIs & Services** → **Credentials**
4. Find your OAuth 2.0 Client ID: `404702389910-ea05iba1famkjpq3pspcs68dgpo45jgi`
5. Click **Edit**

### Step 3: Add Authorized Origins

In the **Authorized JavaScript origins** section, add:

```
https://lyricgenerator.cc
https://www.lyricgenerator.cc
http://localhost:3000
```

### Step 4: Add Authorized Redirect URIs

In the **Authorized redirect URIs** section, add:

```
https://lyricgenerator.cc/api/auth/google-one-tap
https://www.lyricgenerator.cc/api/auth/google-one-tap
http://localhost:3000/api/auth/google-one-tap
```

### Step 5: Redeploy

1. Go back to Vercel
2. Go to **Deployments**
3. Click the three dots on the latest deployment
4. Select **Redeploy**

### Verification

After redeployment, the Google One Tap prompt should appear within 1-2 seconds of loading the homepage. Check the browser console for:

```
[v0] Initializing Google One Tap with Client ID: 404702389910-ea05iba1...
```

If you still see errors, wait 5-10 minutes as Google's changes can take time to propagate.

## Testing Locally

Create a `.env.local` file:

```
NEXT_PUBLIC_GOOGLE_CLIENT_ID=404702389910-ea05iba1famkjpq3pspcs68dgpo45jgi.apps.googleusercontent.com
```

Then restart your development server: `npm run dev`
