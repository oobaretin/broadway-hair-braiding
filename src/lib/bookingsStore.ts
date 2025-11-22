/**
 * Bookings Store
 * 
 * Uses Supabase PostgreSQL database for persistent storage.
 * Falls back to in-memory storage if Supabase is not configured (for local development).
 */

import { supabase } from './supabase';

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

// Fallback in-memory store (only used if Supabase is not configured)
const bookingsFallback: Booking[] = [];

/**
 * Get all bookings from Supabase (or fallback store)
 */
export async function getBookings(): Promise<Booking[]> {
  // Use Supabase if configured
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching bookings from Supabase:', error);
        // Fallback to in-memory store on error
        return [...bookingsFallback];
      }

      // Map database columns to Booking interface
      return (data || []).map((row: any) => ({
        id: row.id,
        clientName: row.client_name,
        clientEmail: row.client_email,
        clientPhone: row.client_phone,
        preferredDate: row.preferred_date,
        preferredTime: row.preferred_time,
        serviceId: row.service_id || undefined,
        serviceName: row.service_name || undefined,
        duration: row.duration || undefined,
        paymentMethod: row.payment_method,
        notes: row.notes || undefined,
        createdAt: row.created_at,
      }));
    } catch (error) {
      console.error('Unexpected error fetching bookings:', error);
      return [...bookingsFallback];
    }
  }

  // Fallback to in-memory store
  return [...bookingsFallback];
}

/**
 * Create a new booking in Supabase (or fallback store)
 */
export async function createBooking(booking: Booking): Promise<Booking> {
  // Use Supabase if configured
  if (supabase) {
    try {
      // Map Booking interface to database columns
      const { data, error } = await supabase
        .from('bookings')
        .insert({
          id: booking.id,
          client_name: booking.clientName,
          client_email: booking.clientEmail,
          client_phone: booking.clientPhone,
          preferred_date: booking.preferredDate,
          preferred_time: booking.preferredTime,
          service_id: booking.serviceId || null,
          service_name: booking.serviceName || null,
          duration: booking.duration || null,
          payment_method: booking.paymentMethod,
          notes: booking.notes || null,
          created_at: booking.createdAt,
        })
        .select()
        .single();

      if (error) {
        throw new Error(`Failed to create booking: ${error.message}`);
      }

      // Map database columns back to Booking interface
      return {
        id: data.id,
        clientName: data.client_name,
        clientEmail: data.client_email,
        clientPhone: data.client_phone,
        preferredDate: data.preferred_date,
        preferredTime: data.preferred_time,
        serviceId: data.service_id || undefined,
        serviceName: data.service_name || undefined,
        duration: data.duration || undefined,
        paymentMethod: data.payment_method,
        notes: data.notes || undefined,
        createdAt: data.created_at,
      };
    } catch (error) {
      console.error('Error creating booking in Supabase:', error);
      throw error;
    }
  }

  // Fallback to in-memory store
  bookingsFallback.push(booking);
  return booking;
}

/**
 * Check if a booking time slot conflicts with existing bookings
 */
export async function checkBookingConflict(
  date: string,
  time: string,
  duration: string
): Promise<boolean> {
  // Use Supabase if configured
  if (supabase) {
    try {
      // Get all bookings for this date
      const { data: bookings, error } = await supabase
        .from('bookings')
        .select('preferred_date, preferred_time, duration')
        .eq('preferred_date', date);

      if (error) {
        console.error('Error checking conflicts in Supabase:', error);
        // Fallback to checking in-memory store
        return bookingsFallback.some(booking =>
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

      // Check for overlaps
      return (bookings || []).some((booking: any) =>
        slotsOverlap(
          booking.preferred_date,
          booking.preferred_time,
          booking.duration || '2 hours',
          date,
          time,
          duration
        )
      );
    } catch (error) {
      console.error('Unexpected error checking conflicts:', error);
      // Fallback to in-memory store
      return bookingsFallback.some(booking =>
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
  }

  // Fallback to in-memory store
  return bookingsFallback.some(booking =>
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

