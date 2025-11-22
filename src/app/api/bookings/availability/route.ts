import { NextRequest, NextResponse } from 'next/server';
import { getBookings, checkBookingConflict } from '@/lib/bookingsStore';

// GET - Get available time slots for a date
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');
    const duration = searchParams.get('duration') || '2 hours';

    if (!date) {
      return NextResponse.json(
        { error: 'Date parameter is required' },
        { status: 400 }
      );
    }

    // Business hours: 7 AM - 7 PM
    const allTimeSlots = [
      '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
      '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
    ];

    // Check which slots are available
    const availabilityChecks = await Promise.all(
      allTimeSlots.map(async (timeSlot) => {
        const hasConflict = await checkBookingConflict(date, timeSlot, duration);
        return { timeSlot, available: !hasConflict };
      })
    );

    const availableSlots = availabilityChecks
      .filter(check => check.available)
      .map(check => check.timeSlot);

    return NextResponse.json({
      date,
      availableSlots,
      bookedSlots: allTimeSlots.filter(slot => !availableSlots.includes(slot)),
    });
  } catch (error) {
    console.error('Error checking availability:', error);
    return NextResponse.json(
      { error: 'Failed to check availability' },
      { status: 500 }
    );
  }
}

