/**
 * Ảnh demo lấy từ Unsplash (remote, tối ưu qua next/image).
 * Tập trung ID ở một nơi để sau này thay bằng ảnh thật của Canaan rất dễ:
 * chỉ cần đổi map bên dưới, mọi trang tự cập nhật.
 */

const UNSPLASH = 'https://images.unsplash.com';

/** Dựng URL ảnh theo ID + kích thước mong muốn. */
export function img(id: string, w = 1200, q = 80): string {
  return `${UNSPLASH}/${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

/** Thư viện ID ảnh theo chủ đề (dễ đọc, dễ thay). */
export const photo = {
  dubaiSkyline: 'photo-1512453979798-5ea266f8880c',
  dubaiMarina: 'photo-1518684079-3c830dcef090',
  dubaiDesert: 'photo-1451337516015-6b6e9a44a8a3',
  dubaiFrame: 'photo-1546412414-e1885259563a',
  burjKhalifa: 'photo-1526495124232-a04e1849168c',
  abuDhabi: 'photo-1512632578888-169bbbc64f33',
  airplane: 'photo-1436491865332-7a61a109cc05',
  airplaneWindow: 'photo-1540339832862-474599807836',
  businessClass: 'photo-1583997052103-b4a1cb974ce5',
  jerusalem: 'photo-1544735716-392fe2489ffa',
  holyland: 'photo-1524492412937-b28074a5d7da',
  petra: 'photo-1563177978-4c5ac2c3f9b8',
  egypt: 'photo-1539768942893-daf53e448371',
  cappadocia: 'photo-1570939274717-7eda259b50ed',
  santorini: 'photo-1570077188670-e3a8d69ac5ff',
  rome: 'photo-1552832230-c0197dd311b5',
  vatican: 'photo-1531572753322-ad063cecc140',
  greece: 'photo-1503152394-c571994fd383',
  luxuryHotel: 'photo-1566073771259-6a8506099945',
  hotelPool: 'photo-1571003123894-1f0594d2b5d9',
  hotelRoom: 'photo-1611892440504-42a792e24d32',
  resort: 'photo-1520250497591-112f2f40a3f4',
  yacht: 'photo-1567899378494-47b22a2ae96a',
  beach: 'photo-1507525428034-b723cf961d3e',
  vietnam: 'photo-1528127269322-539801943592',
  hoiAn: 'photo-1559592413-7cec4d0cae2b',
  thailand: 'photo-1528181304800-259b08848526',
  bangkok: 'photo-1508009603885-50cf7c579365',
  event: 'photo-1519671482749-fd09be7ccebf',
  gala: 'photo-1492684223066-81342ee5ff30',
  conference: 'photo-1505373877841-8d25f7d46678',
  wedding: 'photo-1519741497674-611481863552',
  concert: 'photo-1470229722913-7c0e2dbbafd3',
  chauffeur: 'photo-1503376780353-7e6692767b70',
  guide: 'photo-1488646953014-85cb44e25828',
  visa: 'photo-1569098644584-210bcd375b59',
  europe: 'photo-1499856871958-5b9627545d1a',
  team: 'photo-1522071820081-009f0129c71c',
} as const;

export type PhotoKey = keyof typeof photo;
