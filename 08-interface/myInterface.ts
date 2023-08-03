// 16 - Interface

interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

// tambahan
interface User {
  githubToken: string;
}

interface Admin extends User {
  role: 'admin' | 'ta' | 'learner';
}

const alim: Admin = {
  dbId: 22,
  email: 'alimnfl@a.com',
  userId: 2234,
  role: 'admin',
  githubToken: 'github',
  startTrail: () => {
    return 'trail started';
  },
  getCoupon: (name: 'alim@.ad.com', off: 10) => {
    return 23;
  },
};
