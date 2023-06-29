const getJwtToken = () => {
  return sessionStorage.getItem("JWT_TOKEN");
};
const setJwtToken = (token: string) => {
  return sessionStorage.setItem("JWT_TOKEN", token);
};

const getUserName = () => {
  return sessionStorage.getItem("username");
};
const setUserName = (first_name: string) => {
  return sessionStorage.setItem("username", first_name);
};

export { getJwtToken, setJwtToken, setUserName, getUserName };
