export default (NewUser) => {
  const user = {
    firstname: NewUser.firstname,
    lastname: NewUser.lastname,
    email: NewUser.email,
    address: NewUser.address,
    token: NewUser.token,
  };
  return user;
};
