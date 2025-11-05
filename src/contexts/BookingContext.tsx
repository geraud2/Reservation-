import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Interface CORRIGÉE
export interface Booking {
  id: string;
  eventId: number;
  eventTitle: string;
  eventDate: string;
  eventVenue: string;
  eventCity: string; // ← string au lieu de ReactNode
  eventImage: string;
  eventTime: string; // ← string au lieu de ReactNode
  category: string;
  price: number;     // ← number pour les calculs
  ticketType: 'standard' | 'premium';
  userName: string;
  userEmail: string;
  userPhone: string;
  paymentMethod: 'mtn' | 'moov' | 'visa' | 'mastercard';
  hasAfterMovie: boolean;
  chatEnabled: boolean;
  bookingDate: string;
  status: 'confirmed' | 'cancelled' | 'pending';
}

interface BookingContextType {
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [bookings, setBookings] = useState<Booking[]>(() => {
    try {
      const saved = localStorage.getItem('bookings');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Failed to parse bookings from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }, [bookings]);

  const addBooking = (booking: Booking) => {
    setBookings(prev => [...prev, booking]);
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBookings() {
  const context = useContext(BookingContext);
  if (!context) throw new Error('useBookings must be used within BookingProvider');
  return context;
}