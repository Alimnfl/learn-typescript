// 9
const User = {
  name: 'alimnfl',
  email: 'alimnfl@alim.dev',
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: 'alimnfl', isPaid: 'false', email: 'alim@alim.com' };

createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: 'reactjs', price: 10000 };
}

export {};
