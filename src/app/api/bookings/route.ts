import { NextRequest, NextResponse } from 'next/server';
import { getBookings, createBooking, checkBookingConflict, Booking } from '@/lib/bookingsStore';

// GET - Check availability
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');
    const time = searchParams.get('time');
    const duration = searchParams.get('duration');

    const bookings = await getBookings();

    // If checking specific date/time/duration
    if (date && time && duration) {
      const hasConflict = await checkBookingConflict(date, time, duration);
      return NextResponse.json({ available: !hasConflict });
    }

    // If checking all bookings for a date
    if (date) {
      const dateBookings = bookings.filter(b => b.preferredDate === date);
      return NextResponse.json({ bookings: dateBookings });
    }

    // Return all bookings
    return NextResponse.json({ bookings });
  } catch (error) {
    console.error('Error reading bookings:', error);
    return NextResponse.json(
      { error: 'Failed to read bookings' },
      { status: 500 }
    );
  }
}

// POST - Create new booking
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      clientName,
      clientEmail,
      clientPhone,
      preferredDate,
      preferredTime,
      serviceId,
      serviceName,
      duration,
      paymentMethod,
      notes,
    } = body;

    // Validate required fields
    if (!clientName || !clientEmail || !clientPhone || !preferredDate || !preferredTime || !paymentMethod) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check for conflicts
    const hasConflict = await checkBookingConflict(
      preferredDate,
      preferredTime,
      duration || '2 hours'
    );

    if (hasConflict) {
      return NextResponse.json(
        { error: 'This time slot is already booked. Please select another time.' },
        { status: 409 }
      );
    }

    // Create new booking
    const newBooking: Booking = {
      id: `booking-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      clientName,
      clientEmail,
      clientPhone,
      preferredDate,
      preferredTime,
      serviceId,
      serviceName,
      duration: duration || '2 hours',
      paymentMethod,
      notes,
      createdAt: new Date().toISOString(),
    };

    await createBooking(newBooking);

    return NextResponse.json(
      { success: true, booking: newBooking },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}

