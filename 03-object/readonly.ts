// 10

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails: number;
};

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

// function createUser(u: User) {}

let myUser: User = {
  _id: '1234',
  name: 'alim',
  email: 'alim@a.com',
  isActive: false,
  credcardDetails: 23123,
};

myUser.email = 'alimnfl@gmail.com';
// myUser._id = 'asa';
