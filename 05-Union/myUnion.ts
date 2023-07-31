// 12

// Union adalah pemakaian atau pada typescript
let score: number | string = 33;

score = 44;

score = '55';

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

// N - Implementation for union ->
let alimnfl: User | Admin = {
  name: 'Alim Naufal',
  id: 23,
};

alimnfl = { username: 'alimnfl', id: 30 };

getDbId(3);
getDbId('3');

function getDbId(id: number | string) {
  //   id.toLowerCase()
  if (typeof id === 'string') {
    id.toLowerCase();
  }
}

// Array

// Hanya number
const data: number[] = [1, 2, 3, 4];

// Hanya string
const data2: string[] = ['1', '2', '3', '4'];

// Jika kita memakai keduanya, implementasinya seperti ini
const data3: (number | string | boolean)[] = ['1', 2, 3, '4', true];

let seatAllotment: 'aisle' | 'middle' | 'window';

seatAllotment = 'aisle';
seatAllotment = 'middle';
