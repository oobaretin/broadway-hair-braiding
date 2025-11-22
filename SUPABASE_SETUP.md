# Supabase Setup Guide for Magic Braiding

Follow these steps to set up Supabase for your booking system.

## Step 1: Create Supabase Account & Project

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project" or "Sign up"
3. Sign up with GitHub, Google, or email
4. Click "New Project"
5. Fill in:
   - **Name:** Magic Braiding (or any name)
   - **Database Password:** Create a strong password (save it!)
   - **Region:** Choose closest to your customers (US East recommended)
   - **Pricing Plan:** Free (perfect for starting out)
6. Click "Create new project"
7. Wait 2-3 minutes for setup to complete

## Step 2: Create Database Table

1. In your Supabase dashboard, click **"SQL Editor"** in the left sidebar
2. Click **"New query"**
3. Open the file `supabase-setup.sql` in this project
4. Copy the entire contents
5. Paste into the SQL Editor
6. Click **"Run"** (or press Cmd/Ctrl + Enter)
7. You should see "Success. No rows returned"

## Step 3: Get Your API Keys

1. In Supabase dashboard, click **"Settings"** (gear icon)
2. Click **"API"** in the left sidebar
3. You'll see two important values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public key** (long string starting with `eyJ...`)

## Step 4: Set Environment Variables

### For Local Development

1. Create a file named `.env.local` in the project root (if it doesn't exist)
2. Add these lines:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

Replace with your actual values from Step 3.

### For Vercel Deployment

1. Go to your Vercel project dashboard
2. Click **"Settings"**
3. Click **"Environment Variables"**
4. Add these two variables:
   - **Name:** `NEXT_PUBLIC_SUPABASE_URL`
     **Value:** Your Supabase Project URL
   - **Name:** `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     **Value:** Your Supabase anon key
5. Make sure both are set for **Production**, **Preview**, and **Development**
6. Click **"Save"**
7. Redeploy your site (or it will auto-deploy on next push)

## Step 5: Test the Setup

1. Start your local development server:
   ```bash
   npm run dev
   ```

2. Open your browser to `http://localhost:3000`

3. Try booking an appointment:
   - Click "Book Now"
   - Fill out the form
   - Select a date and time
   - Submit

4. Check Supabase:
   - Go to Supabase dashboard
   - Click **"Table Editor"** in the left sidebar
   - Click on **"bookings"** table
   - You should see your booking!

## Troubleshooting

### "Supabase environment variables are not set"
- Make sure `.env.local` exists and has the correct values
- Restart your dev server after adding environment variables
- Check for typos in variable names

### "relation 'bookings' does not exist"
- You haven't run the SQL setup script
- Go back to Step 2 and run `supabase-setup.sql`

### "new row violates row-level security policy"
- The RLS policy might not be set correctly
- Run this in SQL Editor:
  ```sql
  DROP POLICY IF EXISTS "Allow all operations on bookings" ON bookings;
  CREATE POLICY "Allow all operations on bookings"
  ON bookings FOR ALL USING (true) WITH CHECK (true);
  ```

### Booking works locally but not on Vercel
- Make sure environment variables are set in Vercel
- Check that they're set for all environments (Production, Preview, Development)
- Redeploy after adding variables

## Viewing Bookings

You can view all bookings in Supabase:

1. Go to Supabase dashboard
2. Click **"Table Editor"**
3. Click **"bookings"** table
4. You'll see all bookings with customer info, dates, times, etc.

## Security Notes

- The `anon` key is safe to use in client-side code (it's public)
- Row Level Security (RLS) is enabled for additional security
- For production, consider restricting RLS policies based on your needs
- Never commit `.env.local` to git (it's already in `.gitignore`)

## Next Steps

Once Supabase is set up:
- ✅ Bookings will persist across server restarts
- ✅ Multiple users can book without conflicts
- ✅ You can view/manage bookings in Supabase dashboard
- ✅ Data is backed up automatically

## Need Help?

If you encounter any issues:
1. Check the Supabase dashboard for error messages
2. Check browser console for client-side errors
3. Check Vercel logs for server-side errors
4. Make sure all environment variables are set correctly

