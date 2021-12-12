import { UsersContainer } from "./styles/Container.style";
import { RemoveButton, User } from "./styles/User.style";
import { useState } from "react";
// import GetUsers from './GetUsers'

export default function DisplayUsers(props) {
  // const [count, setCount] = useState(0);

  const { name, id, functionRemoveUser } = props;

  function handleRemoveUser() {
    functionRemoveUser(id);
  }

  // function handleUserCount(index) {
  //   // const newArrayList = [...arrayList];
  //   // newArrayList[index+1].count++;
  //   // setCount(newArrayList)
  //   // };
  //   // if(index+1 === user){
  //   // newArrayList.map(user=>{
  //   // return ({...user, count: count+1})
  //   //     })
  //   //   }
  // }
  return (
    <UsersContainer>
      <User>
        {name}

        <RemoveButton onClick={handleRemoveUser}>x</RemoveButton>
      </User>
    </UsersContainer>
  );
}
