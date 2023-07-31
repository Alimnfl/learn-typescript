// 13 - Tuples

// Tuples dipakai untuk pemakaian secara spesifik/berurutan, seperti pemakaian API atau database array dimana
// diperlukan secara berurutan untuk datanya

// const user: (string | number)[] = [1, 'lim'];
let tUser: [string, number, boolean];

tUser = ['lim', 23, true];

let rgb: [number, number, number] = [255, 133, 123];

type User = [number, string];

const newUser: User = [12, 'alimnfl@gmail.com'];

newUser[1] = 'bukanalim@gmail.com';
newUser.push('alimnfl@gmail.com');

export {};
