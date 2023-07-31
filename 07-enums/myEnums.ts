// 14 - Enums

// Bisa diimplementasi pakai const 1 per 1, tapi kita bisa pakai cara simple dengan enum

// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;

// enum SeatChoice {
const enum SeatChoice {
  // Pakai = 10 maka jadi nomor 10, yang lain mengikuti element index 10
  // Pakai = 'AISLE' maka yang lain harus diberi inisialisasi juga
  AISLE = 'aisle',
  MIDDLE = 4,
  WINDOW,
  FOURTH,
}

const hcSeat = SeatChoice.AISLE;
