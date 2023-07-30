// 6

// function getValue(myVal: number): boolean {
//   if (myVal > 5) {
//     return true;
//   }
//   return '200 OK';
// }

const getHello = (s: string): string => {
  return '';
};

// const heros = [1,2,3];
const heros = ['Thor', 'Spiderman', 'Iron Man'];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

// untuk mengakhiri sebuah program, tipe yang tidak pernah diperhatikan
function handleError(errmsg: string): never {
  throw new Error();
}

export {};
