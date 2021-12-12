import GetUsers from "./components/GetUsers";
import DisplayUsers from "./components/DisplayUsers";
import { useState } from "react";
import GlobalStyles from "./components/styles/Global";
import { Input } from "./components/styles/Input.style";
import {
  Container,
  UsersContainer,
  InputContainer,
  BarContainer,
} from "./components/styles/Container.style";
import { Bar } from "./components/styles/Bar.style";

function App() {
  const [searchedUser, setSearchedUser] = useState("");

  const arrayOfUsers = GetUsers();
  const [displayedUserList, setdisplayedUserList] = useState(arrayOfUsers);

  function removeUser(idUserRemoved) {
    const remainingUsers = displayedUserList.filter((user) => {
      return user.id !== idUserRemoved;
    });
    setdisplayedUserList(remainingUsers);
  }

  return (
    <Container>
      <InputContainer>
        <Input
          value={searchedUser}
          onChange={(event) => setSearchedUser(event.target.value)}
          type="text"
          placeholder="Search user"
        ></Input>
      </InputContainer>

      <BarContainer>
        <Bar></Bar>
      </BarContainer>

      <UsersContainer>
        {displayedUserList
          .filter((user) => {
            if (searchedUser === "") {
              return user;
            } else if (
              user.name.toLowerCase().includes(searchedUser.toLowerCase())
            ) {
              return user;
            }
            return user;
          })
          .map((user) => {
            return (
              <DisplayUsers
                key={user.id}
                id={user.id}
                name={user.name}
                count={user.count}
                functionRemoveUser={removeUser}
                arrayList={arrayOfUsers}
              />
            );
          })}
      </UsersContainer>
    </Container>
  );
}

export default App;
