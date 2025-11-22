/**
 * Bookings Store
 * 
 * NOTE: This is an in-memory store for development/testing.
 * For production on Vercel, you MUST use a database:
 * - Vercel KV (Redis) - Recommended for simple use cases
 * - Vercel Postgres - For relational data
 * - Supabase - Free PostgreSQL option
 * - MongoDB Atlas - NoSQL option
 * 
 * In-memory storage will NOT persist between serverless function invocations.
 */

export interface Booking {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  preferredDate: string;
  preferredTime: string;
  serviceId?: string;
  serviceName?: string;
  duration?: string;
  paymentMethod: string;
  notes?: string;
  createdAt: string;
}

// Shared in-memory store
// In production, replace all functions below with database calls
const bookings: Booking[] = [];

export async function getBookings(): Promise<Booking[]> {
  // TODO: Replace with database query
  // Example: return await db.select().from('bookings');
  return [...bookings];
}

export async function createBooking(booking: Booking): Promise<Booking> {
  // TODO: Replace with database insert
  // Example: return await db.insert('bookings').values(booking);
  bookings.push(booking);
  return booking;
}

export async function checkBookingConflict(
  date: string,
  time: string,
  duration: string
): Promise<boolean> {
  // TODO: Replace with database query
  const existingBookings = await getBookings();
  return existingBookings.some(booking =>
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

function slotsOverlap(
  date1: string,
  time1: string,
  duration1: string,
  date2: string,
  time2: string,
  duration2: string
): boolean {
  if (date1 !== date2) return false;

  const parseTime = (timeStr: string): number => {
    const [time, period] = timeStr.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    let totalMinutes = hours * 60 + minutes;
    if (period === 'PM' && hours !== 12) totalMinutes += 12 * 60;
    if (period === 'AM' && hours === 12) totalMinutes -= 12 * 60;
    return totalMinutes;
  };

  const parseDuration = (durationStr: string): number => {
    const match = durationStr.match(/(\d+)/);
    if (match) {
      return parseInt(match[1]) * 60;
    }
    return 60;
  };

  const start1 = parseTime(time1);
  const end1 = start1 + parseDuration(duration1);
  const start2 = parseTime(time2);
  const end2 = start2 + parseDuration(duration2);

  return start1 < end2 && start2 < end1;
}

