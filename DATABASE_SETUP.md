# Database Setup Guide for Magic Braiding Booking System

## Why You Need a Database

**Current Status:** The booking system uses in-memory storage, which works locally but **will NOT persist** on Vercel because:
- Serverless functions reset between invocations
- Data stored in memory is lost when the function ends
- Multiple users need to see the same booking data

**Solution:** You need a persistent database to store bookings.

---

## Database Options Comparison

### 1. **Supabase (PostgreSQL) - ⭐ RECOMMENDED**

**Best for:** Most use cases - free, powerful, easy to use

**Pricing:**
- **Free Tier:** 500 MB database, 2 GB bandwidth, unlimited API requests
- **Paid:** Starts at $25/month for more storage/features

**Pros:**
- ✅ Completely free for small businesses
- ✅ PostgreSQL (industry-standard SQL database)
- ✅ Built-in dashboard for viewing/managing data
- ✅ Real-time subscriptions (if you want live updates)
- ✅ Easy integration with Next.js
- ✅ Great documentation
- ✅ Can handle complex queries easily

**Cons:**
- ⚠️ Requires external account (but free)
- ⚠️ Slightly more setup than Vercel-native options

**Setup Time:** ~15 minutes

---

### 2. **Vercel Postgres**

**Best for:** If you want everything in one place (Vercel dashboard)

**Pricing:**
- **Free Tier:** Limited (check current pricing)
- **Paid:** Starts around $20/month

**Pros:**
- ✅ Integrated directly into Vercel dashboard
- ✅ Unified billing with Vercel
- ✅ Serverless-optimized
- ✅ PostgreSQL database

**Cons:**
- ⚠️ More expensive than Supabase
- ⚠️ Less generous free tier
- ⚠️ Vendor lock-in to Vercel

**Setup Time:** ~10 minutes

---

### 3. **Vercel KV (Redis via Marketplace)**

**Best for:** Simple key-value storage, caching

**Pricing:**
- Varies by provider (Upstash, Redis Cloud, etc.)
- Usually has free tier

**Pros:**
- ✅ Fast read/write operations
- ✅ Good for caching
- ✅ Simple data structure

**Cons:**
- ⚠️ Not ideal for complex queries
- ⚠️ Key-value storage (less flexible than SQL)
- ⚠️ Need to structure data as JSON strings
- ⚠️ Harder to query bookings by date/time

**Setup Time:** ~15 minutes

---

### 4. **MongoDB Atlas**

**Best for:** NoSQL/document-based data

**Pricing:**
- **Free Tier:** 512 MB storage
- **Paid:** Starts at $9/month

**Pros:**
- ✅ Free tier available
- ✅ Flexible document structure
- ✅ Good for unstructured data

**Cons:**
- ⚠️ NoSQL (different from SQL)
- ⚠️ More complex queries
- ⚠️ Overkill for simple booking system

**Setup Time:** ~20 minutes

---

## Recommendation: **Supabase**

For Magic Braiding, **Supabase is the best choice** because:
1. **Free** - Perfect for starting out
2. **PostgreSQL** - Industry standard, easy to query
3. **Dashboard** - View/manage bookings visually
4. **Scalable** - Can grow with your business
5. **Well-documented** - Easy to find help

---

## Quick Setup Guide: Supabase

### Step 1: Create Supabase Account
1. Go to [supabase.com](https://supabase.com)
2. Sign up (free)
3. Create a new project
4. Wait ~2 minutes for setup

### Step 2: Create Database Table
Run this SQL in Supabase SQL Editor:

```sql
-- Create bookings table
CREATE TABLE bookings (
  id TEXT PRIMARY KEY,
  client_name TEXT NOT NULL,
  client_email TEXT NOT NULL,
  client_phone TEXT NOT NULL,
  preferred_date DATE NOT NULL,
  preferred_time TEXT NOT NULL,
  service_id TEXT,
  service_name TEXT,
  duration TEXT,
  payment_method TEXT NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster date queries
CREATE INDEX idx_bookings_date ON bookings(preferred_date);

-- Create index for faster date+time queries
CREATE INDEX idx_bookings_datetime ON bookings(preferred_date, preferred_time);
```

### Step 3: Get Connection String
1. Go to Project Settings → Database
2. Copy the "Connection string" (URI format)
3. Add to Vercel environment variables as `DATABASE_URL`

### Step 4: Install Dependencies
```bash
npm install @supabase/supabase-js
```

### Step 5: Update Code
See `DATABASE_IMPLEMENTATION.md` for code examples.

---

## Next Steps

1. **Choose your database** (we recommend Supabase)
2. **Set up the account**
3. **Create the database table**
4. **Update the code** (I can help with this!)
5. **Test locally**
6. **Deploy to Vercel**

---

## Need Help?

Once you choose a database, I can:
- Update the code to use it
- Help with setup
- Test the integration
- Deploy to production

Let me know which option you'd like to use!

