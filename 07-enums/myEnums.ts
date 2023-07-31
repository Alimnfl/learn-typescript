// 14 - Enums

// Tipe Data ENUM memungkinkan kita untuk mendefinisikan nilai data yang akan digunakan ketika penginputan data,
// sehingga ketika ada value yang tidak sesuai dengan nilai yang sudah didefinisikan sebelumnya, maka akan menghasilkan error.
// Di tipe data ini, kita hanya bisa memilih satu value saja.

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
