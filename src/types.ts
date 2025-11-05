import { ReactNode } from "react";

export interface Event {
  id: number;
  type: string;
  title: string;
  artist: string;
  date: string;
  time: ReactNode;
  venue: string;
  city: ReactNode;
  image: string;
  price: string;
  isPremium: boolean;
  description: ReactNode;
  participants?: string;
  lat: number;
  lng: number;
  chatEnabled?: boolean;
}