export type User = {
  login: string;
  password: string;
  token: string;
}

const userMock:User =
  {
    login: 'admin'
    ,password: '123'
    ,token: 'abc'
  };

export {userMock};