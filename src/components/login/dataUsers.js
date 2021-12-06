const users = [
  {
    id: Math.random,
    email: "user1@gmail.com",
    password: "123456!",
    name: "Mark",
    lastname: "Zuckenberg",
  },
  {
    id: Math.random,
    email: "user2@gmail.com",
    password: "1234567!",
    name: "Elon",
    lastname: "Musk",
  },
];

export default function getAllUsers() {
  return users;
}
