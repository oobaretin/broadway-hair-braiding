# Database Implementation Examples

This document shows how to implement each database option in the booking system.

---

## Option 1: Supabase (PostgreSQL) - RECOMMENDED

### Installation
```bash
npm install @supabase/supabase-js
```

### Setup Client (`src/lib/supabase.ts`)
```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);
```

### Update `src/lib/bookingsStore.ts`
```typescript
import { supabase } from './supabase';
import { Booking } from './bookingsStore';

export async function getBookings(): Promise<Booking[]> {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching bookings:', error);
    return [];
  }

  return data || [];
}

export async function createBooking(booking: Booking): Promise<Booking> {
  const { data, error } = await supabase
    .from('bookings')
    .insert(booking)
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to create booking: ${error.message}`);
  }

  return data;
}

export async function checkBookingConflict(
  date: string,
  time: string,
  duration: string
): Promise<boolean> {
  // Get all bookings for this date
  const { data: bookings, error } = await supabase
    .from('bookings')
    .select('preferred_date, preferred_time, duration')
    .eq('preferred_date', date);

  if (error) {
    console.error('Error checking conflicts:', error);
    return false;
  }

  // Check for overlaps
  return bookings.some(booking =>
    slotsOverlap(
      booking.preferred_date,
      booking.preferred_time,
      booking.duration || '2 hours',
      date,
      time,
      duration
    )
  );
}
```

### Environment Variables (`.env.local`)
```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

---

## Option 2: Vercel Postgres

### Installation
```bash
npm install @vercel/postgres
```

### Update `src/lib/bookingsStore.ts`
```typescript
import { sql } from '@vercel/postgres';
import { Booking } from './bookingsStore';

export async function getBookings(): Promise<Booking[]> {
  const { rows } = await sql`
    SELECT * FROM bookings 
    ORDER BY created_at DESC
  `;
  return rows as Booking[];
}

export async function createBooking(booking: Booking): Promise<Booking> {
  const { rows } = await sql`
    INSERT INTO bookings (
      id, client_name, client_email, client_phone,
      preferred_date, preferred_time, service_id, service_name,
      duration, payment_method, notes, created_at
    ) VALUES (
      ${booking.id}, ${booking.clientName}, ${booking.clientEmail},
      ${booking.clientPhone}, ${booking.preferredDate}, ${booking.preferredTime},
      ${booking.serviceId || null}, ${booking.serviceName || null},
      ${booking.duration || '2 hours'}, ${booking.paymentMethod},
      ${booking.notes || null}, ${booking.createdAt}
    )
    RETURNING *
  `;
  return rows[0] as Booking;
}

export async function checkBookingConflict(
  date: string,
  time: string,
  duration: string
): Promise<boolean> {
  const { rows } = await sql`
    SELECT preferred_date, preferred_time, duration
    FROM bookings
    WHERE preferred_date = ${date}
  `;

  return rows.some(booking =>
    slotsOverlap(
      booking.preferred_date,
      booking.preferred_time,
      booking.duration || '2 hours',
      date,
      time,
      duration
    )
  );
}
```

### Environment Variables
Vercel Postgres automatically provides `POSTGRES_URL` - no setup needed!

---

## Option 3: Vercel KV (Redis via Upstash)

### Installation
```bash
npm install @upstash/redis
```

### Setup Client (`src/lib/redis.ts`)
```typescript
import { Redis } from '@upstash/redis';

export const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});
```

### Update `src/lib/bookingsStore.ts`
```typescript
import { redis } from './redis';
import { Booking } from './bookingsStore';

const BOOKINGS_KEY = 'bookings';

export async function getBookings(): Promise<Booking[]> {
  const bookingsJson = await redis.get<string>(BOOKINGS_KEY);
  if (!bookingsJson) return [];
  return JSON.parse(bookingsJson);
}

export async function createBooking(booking: Booking): Promise<Booking> {
  const bookings = await getBookings();
  bookings.push(booking);
  await redis.set(BOOKINGS_KEY, JSON.stringify(bookings));
  return booking;
}

export async function checkBookingConflict(
  date: string,
  time: string,
  duration: string
): Promise<boolean> {
  const bookings = await getBookings();
  return bookings.some(booking =>
    slotsOverlap(
      booking.preferredDate,
      booking.preferredTime,
      booking.duration || '2 hours',
      date,
      time,
      duration
    )
  );
}
```

---

## Database Schema (SQL)

For PostgreSQL databases (Supabase, Vercel Postgres):

```sql
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

-- Indexes for performance
CREATE INDEX idx_bookings_date ON bookings(preferred_date);
CREATE INDEX idx_bookings_datetime ON bookings(preferred_date, preferred_time);
```

---

## Testing Locally

After implementing, test with:

```bash
npm run dev
```

Then:
1. Open booking modal
2. Select a date
3. Book an appointment
4. Try to book the same time slot again
5. Should show conflict error

---

## Deployment Checklist

- [ ] Database account created
- [ ] Database table created
- [ ] Environment variables set in Vercel
- [ ] Code updated with database calls
- [ ] Tested locally
- [ ] Deployed to Vercel
- [ ] Tested on production

---

## Need Help?

Tell me which database you want to use, and I'll:
1. Update all the code
2. Help you set it up
3. Test it works
4. Deploy it

