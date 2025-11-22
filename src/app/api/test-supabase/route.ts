import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

/**
 * Test endpoint to verify Supabase connection
 * Visit: /api/test-supabase
 */
export async function GET() {
  try {
    if (!supabase) {
      return NextResponse.json(
        {
          connected: false,
          error: 'Supabase client not initialized. Check environment variables.',
          env: {
            hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
            hasKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
          },
        },
        { status: 500 }
      );
    }

    // Test connection by querying bookings table
    const { data, error } = await supabase
      .from('bookings')
      .select('id')
      .limit(1);

    if (error) {
      return NextResponse.json(
        {
          connected: false,
          error: error.message,
          hint: error.code === '42P01' 
            ? 'Table "bookings" does not exist. Run supabase-setup.sql in Supabase SQL Editor.'
            : 'Check your Supabase configuration and RLS policies.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      connected: true,
      message: 'Supabase is connected and working!',
      bookingsCount: data?.length || 0,
      env: {
        hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        hasKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        connected: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

