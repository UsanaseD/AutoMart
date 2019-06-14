export default (NewUser) => {
  const user = {
    id: NewUser.id,
    firstname: NewUser.firstname,
    lastname: NewUser.lastname,
    email: NewUser.email,
    address: NewUser.address,
    admin: NewUser.admin,
    token: NewUser.token,
  };
  return user;
};
