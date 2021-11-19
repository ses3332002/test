function User({ userInfo }) {
  return (
    <div>
      {userInfo.id}
      {userInfo.name}
      {userInfo.email}
      {userInfo.gender}
    </div>
  );
}
export default User;
