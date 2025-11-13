export interface SocialLink {
  platform: string;
  url: string;
}

export interface Creator {
  id: string;
  name: string;
  avatarUrl: string;
  platforms: string[];
  categories: string[];
  ratePerPost: number;
  location: string;
  bio: string;
  socials: SocialLink[];
  availability: Record<string, string[]>; // yyyy-MM-dd -> ["10:00",...]
}

export interface BookingRequest {
  creatorId: string;
  name: string;
  email: string;
  date: string; // yyyy-MM-dd
  time: string; // HH:mm
  notes?: string;
}

export interface BookingResponse {
  bookingId: string;
  status: 'confirmed';
}
