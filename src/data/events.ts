import type { EventType } from '@/types';
import { img, photo } from './images';

export const eventTypes: EventType[] = [
  { slug: 'corporate-events', title: 'Corporate Events', image: img(photo.conference), summary: 'Hội nghị khách hàng, kỷ niệm thành lập, sự kiện nội bộ doanh nghiệp.', scope: ['Dubai', 'Việt Nam', 'Thái Lan'] },
  { slug: 'mice', title: 'Conferences & MICE', image: img(photo.event), summary: 'Hội nghị, hội thảo, khen thưởng và sự kiện quy mô lớn trọn gói.', scope: ['Dubai', 'Singapore', 'Châu Âu'] },
  { slug: 'gala-dinner', title: 'Gala Dinner & Award', image: img(photo.gala), summary: 'Đêm gala, lễ trao giải với sân khấu, AV và ẩm thực cao cấp.', scope: ['Dubai', 'Việt Nam'] },
  { slug: 'church-events', title: 'Church Conferences', image: img(photo.holyland), summary: 'Hội đồng, thông công và sự kiện hội thánh trong và ngoài nước.', scope: ['Việt Nam', 'Israel', 'Hàn Quốc'] },
  { slug: 'product-launch', title: 'Product Launch', image: img(photo.concert), summary: 'Ra mắt sản phẩm ấn tượng với dàn dựng sân khấu và truyền thông.', scope: ['Dubai', 'Việt Nam', 'Thái Lan'] },
  { slug: 'destination-wedding', title: 'Destination Wedding', image: img(photo.wedding), summary: 'Đám cưới điểm đến sang trọng, lo trọn nghi lễ và lưu trú cho khách mời.', scope: ['Dubai', 'Phú Quốc', 'Bali'] },
  { slug: 'team-building', title: 'Team Building', image: img(photo.team), summary: 'Gắn kết đội ngũ qua các chương trình trong nước và quốc tế.', scope: ['Việt Nam', 'Thái Lan', 'Malaysia'] },
  { slug: 'concert-stage', title: 'Concert & Stage Support', image: img(photo.concert, 1000), summary: 'Hỗ trợ sân khấu, âm thanh ánh sáng và vận hành cho show quy mô.', scope: ['Dubai', 'Việt Nam'] },
];

/** Dịch vụ trong một sự kiện — dùng cho trang Events. */
export const eventServices = [
  'Ý tưởng & concept', 'Lập kế hoạch', 'Tìm địa điểm', 'Khách sạn', 'Vé máy bay',
  'Visa đoàn', 'Đưa đón', 'Sân khấu', 'Âm thanh', 'Ánh sáng', 'Màn hình LED',
  'Trang trí', 'Tiệc & catering', 'MC & phiên dịch', 'Nhân sự', 'Quay phim & chụp ảnh',
  'Livestream', 'Quà tặng', 'Check-in & đăng ký khách', 'Tour trước/sau sự kiện',
];

export const eventCountries = [
  { slug: 'dubai', name: 'Events in Dubai', cities: ['Dubai', 'Abu Dhabi', 'Sharjah'], image: img(photo.dubaiSkyline) },
  { slug: 'vietnam', name: 'Events in Vietnam', cities: ['TP.HCM', 'Hà Nội', 'Đà Nẵng', 'Phú Quốc'], image: img(photo.vietnam) },
  { slug: 'thailand', name: 'Events in Thailand', cities: ['Bangkok', 'Pattaya', 'Phuket'], image: img(photo.thailand) },
];
