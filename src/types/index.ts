/**
 * Kiểu dữ liệu dùng chung toàn site.
 * Giữ tối giản ở Phase 1 — mở rộng khi tích hợp API thật.
 */

/** Ba loại hành động mọi sản phẩm phải thuộc về (xem ActionBadge). */
export type ActionType = 'book' | 'quote' | 'partner';

export type Currency = 'VND' | 'USD';

export interface Price {
  /** Giá "từ" — luôn là giá tham khảo, có thể thay đổi. */
  from: number;
  currency: Currency;
  /** Đơn vị hiển thị kèm, ví dụ "/khách", "/đêm". */
  unit?: string;
}

export type TourSegment = 'saver' | 'standard' | 'premium' | 'luxury' | 'private';
export type TourFormat =
  | 'join'
  | 'private-group'
  | 'individual'
  | 'family'
  | 'corporate'
  | 'church'
  | 'school'
  | 'bespoke';
export type DepartureMode = 'from-vietnam' | 'at-destination';

export interface Tour {
  slug: string;
  title: string;
  destination: string;
  region: string;
  image: string;
  durationDays: number;
  durationNights: number;
  departureFrom: string[];
  nextDepartures: string[];
  price: Price;
  seatsLeft: number;
  format: TourFormat;
  segment: TourSegment;
  mode: DepartureMode;
  action: ActionType;
  highlights: string[];
  summary: string;
}

export interface FlightOffer {
  partner: string;
  logoInitial: string;
  price: Price;
  baggage: string;
  changePolicy: string;
  duration: string;
  stops: string;
  partnerUrl: string;
}

export interface Hotel {
  slug: string;
  name: string;
  city: string;
  country: string;
  image: string;
  stars: number;
  rating: number;
  reviewCount: number;
  price: Price;
  freeCancellation: boolean;
  breakfastIncluded: boolean;
  area: string;
  amenities: string[];
  action: ActionType;
}

export interface DubaiExperience {
  slug: string;
  title: string;
  category: string;
  image: string;
  price: Price;
  duration: string;
  pickup: string;
  schedule: string;
  action: ActionType;
  summary: string;
}

export interface HolyLandJourney {
  slug: string;
  title: string;
  countries: string[];
  image: string;
  durationDays: number;
  theme: string;
  mode: string;
  leader: string;
  price: Price;
  nextDepartures: string[];
  summary: string;
  stops: { place: string; meaning: string }[];
}

export interface VisaCountry {
  slug: string;
  country: string;
  flag: string;
  region: string;
  visaTypes: string[];
  processingTime: string;
  stayDuration: string;
  popular: boolean;
  summary: string;
}

export interface EventType {
  slug: string;
  title: string;
  image: string;
  summary: string;
  scope: string[];
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  destination: string;
  topic: string;
  readingMinutes: number;
  publishedAt: string;
  author: string;
}

export interface Review {
  name: string;
  role: string;
  location: string;
  rating: number;
  quote: string;
  product: string;
}

export interface Destination {
  name: string;
  slug: string;
  image: string;
  tourCount: number;
  tagline: string;
}
