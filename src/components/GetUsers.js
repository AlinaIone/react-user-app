export default function GetUsers() {
  const arrayOfUsers = [];

  for (let index = 1; index <= 100; index++) {
    arrayOfUsers.push({
      id: index,
      name: `User ${index}`,
    });
  }

  return arrayOfUsers;
}
