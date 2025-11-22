# Supabase Integration Verification Checklist

Use this checklist to verify your Supabase integration is working correctly.

## ✅ Pre-Deployment Checklist

### 1. Supabase Project Setup
- [ ] Created Supabase account and project
- [ ] Project is active and running
- [ ] Database password is saved securely

### 2. Database Table Created
- [ ] Opened SQL Editor in Supabase dashboard
- [ ] Ran `supabase-setup.sql` script
- [ ] Saw "Success. No rows returned" message
- [ ] Verified table exists:
  - Go to **Table Editor** → Should see **"bookings"** table
  - Table should have columns: id, client_name, client_email, etc.

### 3. Environment Variables Set in Vercel
- [ ] Added `NEXT_PUBLIC_SUPABASE_URL` to Vercel
- [ ] Added `NEXT_PUBLIC_SUPABASE_ANON_KEY` to Vercel
- [ ] Both variables set for **Production**, **Preview**, and **Development**
- [ ] Values are correct (no typos, no extra spaces)
- [ ] Redeployed site after adding variables

### 4. Code Integration
- [ ] `@supabase/supabase-js` package is installed
- [ ] `src/lib/supabase.ts` exists
- [ ] `src/lib/bookingsStore.ts` uses Supabase
- [ ] Code is committed and pushed to GitHub

## 🧪 Testing Checklist

### Test 1: Local Development
1. [ ] Create `.env.local` file with your Supabase credentials
2. [ ] Run `npm run dev`
3. [ ] Open browser console - should NOT see Supabase warning
4. [ ] Try booking an appointment
5. [ ] Check Supabase Table Editor - booking should appear

### Test 2: Production (Vercel)
1. [ ] Visit your live Vercel site
2. [ ] Open browser DevTools → Console
3. [ ] Should NOT see "Supabase environment variables are not set" warning
4. [ ] Try booking an appointment
5. [ ] Check Supabase Table Editor - booking should appear

### Test 3: Conflict Prevention
1. [ ] Book an appointment for a specific date/time
2. [ ] Try to book the same date/time again
3. [ ] Should see error: "This time slot is already booked"
4. [ ] Try booking a different time - should work

### Test 4: Availability Display
1. [ ] Select a date in the booking form
2. [ ] Should see "Checking availability..." briefly
3. [ ] Booked time slots should be grayed out with ✗
4. [ ] Available slots should be clickable

## 🔍 Troubleshooting

### Issue: "Supabase environment variables are not set"
**Solution:**
- Check Vercel dashboard → Settings → Environment Variables
- Make sure both variables are set
- Make sure they're set for all environments
- Redeploy after adding variables

### Issue: "relation 'bookings' does not exist"
**Solution:**
- Go to Supabase SQL Editor
- Run the `supabase-setup.sql` script again
- Verify table exists in Table Editor

### Issue: "new row violates row-level security policy"
**Solution:**
- Go to Supabase SQL Editor
- Run this:
  ```sql
  DROP POLICY IF EXISTS "Allow all operations on bookings" ON bookings;
  CREATE POLICY "Allow all operations on bookings"
  ON bookings FOR ALL USING (true) WITH CHECK (true);
  ```

### Issue: Bookings work locally but not on Vercel
**Solution:**
- Double-check environment variables in Vercel
- Make sure variable names are exact: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Check Vercel deployment logs for errors
- Redeploy after fixing variables

### Issue: Can't see bookings in Supabase
**Solution:**
- Check Table Editor → bookings table
- Make sure you're looking at the right project
- Check browser console for errors
- Verify RLS policies allow inserts

## 📊 Verification Commands

### Check if Supabase is connected (in browser console):
```javascript
// This should return an object, not null
console.log(window.__SUPABASE_CLIENT__);
```

### Check environment variables (in Vercel):
- Go to Settings → Environment Variables
- Should see both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## ✅ Success Indicators

When everything is working correctly:
- ✅ No Supabase warnings in browser console
- ✅ Bookings appear in Supabase Table Editor
- ✅ Bookings persist after page refresh
- ✅ Conflict prevention works (can't double-book)
- ✅ Availability shows correctly (booked slots disabled)
- ✅ Multiple users can book different times

## 🎉 Next Steps

Once verified:
1. Test with real bookings
2. Monitor Supabase dashboard for bookings
3. Consider setting up email notifications (optional)
4. Consider adding admin dashboard to view bookings (optional)

---

**Need Help?** Check the `SUPABASE_SETUP.md` file for detailed setup instructions.

