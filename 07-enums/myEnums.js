// 14 - Enums

// jika tidak pakai const, maka hasilnya akan seperti diatas
var SeatChoice;
(function (SeatChoice) {
  SeatChoice['AISLE'] = 'aisle';
  SeatChoice[(SeatChoice['MIDDLE'] = 4)] = 'MIDDLE';
  SeatChoice[(SeatChoice['WINDOW'] = 5)] = 'WINDOW';
  SeatChoice[(SeatChoice['FOURTH'] = 6)] = 'FOURTH';
})(SeatChoice || (SeatChoice = {}));

var hcSeat = SeatChoice.AISLE;

// 14 - Enums
var hcSeat = 'aisle'; /* SeatChoice.AISLE */
// Harusnya hasilnya,, var hcSeat = 'aisle', jika pakai const
