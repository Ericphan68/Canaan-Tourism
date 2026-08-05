import type { FlightOffer } from '@/types';
import { siteConfig } from '@/config/site';

/**
 * Ba nền tảng đối tác hiển thị giá tham khảo song song.
 * Link lấy từ config (không hardcode). Giá thực xác nhận trên nền tảng đối tác.
 */
export const flightOffers: FlightOffer[] = [
  {
    partner: 'SkyCompare',
    logoInitial: 'SC',
    price: { from: 12850000, currency: 'VND' },
    baggage: '1 x 23kg ký gửi + 7kg xách tay',
    changePolicy: 'Đổi vé có phí từ 900.000₫',
    duration: '14h 35m',
    stops: '1 điểm dừng · DXB',
    partnerUrl: siteConfig.partners.flights[0],
  },
  {
    partner: 'AeroDeal',
    logoInitial: 'AD',
    price: { from: 13420000, currency: 'VND' },
    baggage: '2 x 23kg ký gửi + 7kg xách tay',
    changePolicy: 'Đổi vé miễn phí 1 lần',
    duration: '15h 10m',
    stops: '1 điểm dừng · BKK',
    partnerUrl: siteConfig.partners.flights[1],
  },
  {
    partner: 'GlobeFare',
    logoInitial: 'GF',
    price: { from: 12290000, currency: 'VND' },
    baggage: '1 x 23kg ký gửi + 7kg xách tay',
    changePolicy: 'Vé tiết kiệm, không hoàn',
    duration: '16h 45m',
    stops: '1 điểm dừng · DOH',
    partnerUrl: siteConfig.partners.flights[2],
  },
];

/** Cabin class cho form tìm vé. */
export const cabinClasses = [
  { value: 'economy', label: 'Phổ thông' },
  { value: 'business', label: 'Thương gia' },
  { value: 'first', label: 'Hạng nhất' },
] as const;
