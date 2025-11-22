-- Supabase Database Setup for Magic Braiding Booking System
-- 
-- Instructions:
-- 1. Go to your Supabase project dashboard
-- 2. Navigate to SQL Editor
-- 3. Copy and paste this entire file
-- 4. Click "Run" to execute

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
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

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(preferred_date);
CREATE INDEX IF NOT EXISTS idx_bookings_datetime ON bookings(preferred_date, preferred_time);
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings(created_at DESC);

-- Enable Row Level Security (RLS) for security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all operations (you can restrict this later)
-- For now, this allows the API to read/write bookings
CREATE POLICY "Allow all operations on bookings"
ON bookings
FOR ALL
USING (true)
WITH CHECK (true);

-- Optional: Create a view for easier querying
CREATE OR REPLACE VIEW bookings_view AS
SELECT 
  id,
  client_name,
  client_email,
  client_phone,
  preferred_date,
  preferred_time,
  service_id,
  service_name,
  duration,
  payment_method,
  notes,
  created_at
FROM bookings
ORDER BY preferred_date DESC, preferred_time DESC;

