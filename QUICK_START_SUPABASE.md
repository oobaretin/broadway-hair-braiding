# Quick Start: Create Supabase Project & Connect to Vercel

Follow these steps to create your Supabase project and connect it to your Vercel deployment.

## Step 1: Create Supabase Account & Project

1. **Go to Supabase**
   - Visit [supabase.com](https://supabase.com)
   - Click **"Start your project"** or **"Sign up"**

2. **Sign Up**
   - Use GitHub, Google, or email
   - Complete the signup process

3. **Create New Project**
   - Click **"New Project"** button
   - Fill in the form:
     - **Name:** `Magic Braiding` (or any name you prefer)
     - **Database Password:** Create a strong password ⚠️ **SAVE THIS!** You'll need it later
     - **Region:** Choose closest to your customers (e.g., `US East (North Virginia)` for US customers)
     - **Pricing Plan:** Select **Free** (perfect for starting out)
   - Click **"Create new project"**
   - ⏳ Wait 2-3 minutes for setup to complete

## Step 2: Create the Bookings Table

Once your project is ready:

1. **Open SQL Editor**
   - In Supabase dashboard, click **"SQL Editor"** in the left sidebar
   - Click **"New query"** button

2. **Run the Setup Script**
   - Open the file `supabase-setup.sql` from this project
   - Copy the **entire contents**
   - Paste into the SQL Editor
   - Click **"Run"** button (or press `Cmd+Enter` / `Ctrl+Enter`)
   - ✅ You should see: **"Success. No rows returned"**

3. **Verify Table Created**
   - Click **"Table Editor"** in the left sidebar
   - You should see **"bookings"** table
   - Click on it to see the columns

## Step 3: Get Your API Keys

1. **Go to Settings**
   - Click the **gear icon** (⚙️) in the left sidebar
   - Click **"API"** in the settings menu

2. **Copy Your Credentials**
   You'll see two important values:
   
   - **Project URL**
     - Looks like: `https://xxxxxxxxxxxxx.supabase.co`
     - Copy this entire URL
   
   - **anon public key**
     - Long string starting with `eyJ...`
     - Click the copy icon next to it
     - This is your **anon key**

## Step 4: Add Environment Variables to Vercel

1. **Go to Vercel Dashboard**
   - Visit [vercel.com](https://vercel.com)
   - Sign in and go to your project

2. **Open Project Settings**
   - Click on your **Magic Braiding** project
   - Click **"Settings"** tab
   - Click **"Environment Variables"** in the left menu

3. **Add First Variable**
   - Click **"Add New"**
   - **Name:** `NEXT_PUBLIC_SUPABASE_URL`
   - **Value:** Paste your Supabase Project URL (from Step 3)
   - **Environments:** Check all three:
     - ✅ Production
     - ✅ Preview  
     - ✅ Development
   - Click **"Save"**

4. **Add Second Variable**
   - Click **"Add New"** again
   - **Name:** `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **Value:** Paste your Supabase anon key (from Step 3)
   - **Environments:** Check all three:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
   - Click **"Save"**

5. **Redeploy**
   - Go to **"Deployments"** tab
   - Click the **"..."** menu on the latest deployment
   - Click **"Redeploy"**
   - Or just push a new commit to trigger auto-deploy

## Step 5: Verify Everything Works

### Option A: Test Endpoint (Easiest)
1. Wait for Vercel to finish redeploying
2. Visit: `https://your-site.vercel.app/api/test-supabase`
3. You should see:
   ```json
   {
     "connected": true,
     "message": "Supabase is connected and working!"
   }
   ```

### Option B: Test Booking
1. Visit your live site
2. Click **"Book Now"**
3. Fill out the booking form
4. Submit a test booking
5. Go back to Supabase → **Table Editor** → **bookings**
6. ✅ Your booking should appear!

## Troubleshooting

### "Supabase environment variables are not set"
- Make sure you added both variables in Vercel
- Check variable names are exact: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Make sure you checked all environments (Production, Preview, Development)
- Redeploy after adding variables

### "relation 'bookings' does not exist"
- You haven't run the SQL script yet
- Go back to Step 2 and run `supabase-setup.sql`

### "new row violates row-level security policy"
- Run this in Supabase SQL Editor:
  ```sql
  DROP POLICY IF EXISTS "Allow all operations on bookings" ON bookings;
  CREATE POLICY "Allow all operations on bookings"
  ON bookings FOR ALL USING (true) WITH CHECK (true);
  ```

### Test endpoint shows "connected: false"
- Check the error message in the response
- Verify your environment variables in Vercel
- Make sure you copied the full URL and key (no extra spaces)

## What's Next?

Once everything is working:
- ✅ Bookings will save to Supabase
- ✅ You can view all bookings in Supabase Table Editor
- ✅ Conflict prevention will work (no double-booking)
- ✅ Availability checking will show booked slots

## Need Help?

If you get stuck:
1. Check the error message from `/api/test-supabase`
2. Verify all steps above are completed
3. Check Vercel deployment logs for errors
4. Check Supabase dashboard for any error messages

---

**Quick Checklist:**
- [ ] Created Supabase account
- [ ] Created new project
- [ ] Ran `supabase-setup.sql` script
- [ ] Got Project URL and anon key
- [ ] Added both environment variables to Vercel
- [ ] Redeployed site
- [ ] Tested connection at `/api/test-supabase`
- [ ] Tested booking a real appointment

