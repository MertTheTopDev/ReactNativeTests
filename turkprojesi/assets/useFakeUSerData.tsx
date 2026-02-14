import { faker } from '@faker-js/faker';

export interface IUser {
  id: string;
  name: string;
  surname: string;
  avatar: any;
  email: string;
  messages: number
}

const useFakeUserData = () => {
  const users: Array<IUser> = [];

  for (let i = 0; i < 20; i++) {
    users.push({
      id: faker.string.uuid(),
      name: faker.person.firstName(),
      surname: faker.person.lastName(),
      avatar: faker.image.avatar(),
      email: faker.internet.email(),
      messages: faker.number.int() % 4
    });
  }

  return users;
};

export default useFakeUserData