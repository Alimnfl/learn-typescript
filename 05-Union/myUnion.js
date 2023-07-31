// 12
// Union adalah pemakaian atau pada typescript
var score = 33;
score = 44;
score = '55';
// N - Implementation for union ->
var alimnfl = {
    name: 'Alim Naufal',
    id: 23,
};
alimnfl = { username: 'alimnfl', id: 30 };
getDbId(3);
getDbId('3');
function getDbId(id) {
    //   id.toLowerCase()
    if (typeof id === 'string') {
        id.toLowerCase();
    }
}
// Array
// Hanya number
var data = [1, 2, 3, 4];
// Hanya string
var data2 = ['1', '2', '3', '4'];
// Jika kita memakai keduanya, implementasinya seperti ini
var data3 = ['1', 2, 3, '4', true];
var seatAllotment;
seatAllotment = 'aisle';
seatAllotment = 'middle';
