import { RemoveButton, User } from "./styles/User.style";

export default function DisplayUsers(props) {
  const { name, id, functionRemoveUser } = props;

  function handleRemoveUser() {
    functionRemoveUser(id);
  }

  return (
    <User>
      {name} <RemoveButton onClick={handleRemoveUser}>x</RemoveButton>
    </User>
  );
}
