function addTwo(num: number): number {
  // return "hello"
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

addTwo(5);
getUpper('alim');
signUpUser('alim', 'alimjuga@gmail.com', false);
loginUser('naufal', 'naufal@naufal.com');

export {};
