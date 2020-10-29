const regex = {
  email: /^[\w]([-_.]?[\w])*@[\w]([-_.]?[\w])*\.[a-zA-Z]{2,3}/i,
  password: /^[a-zA-Z0-9]{6,12}$/,
};

const isPassword = (testPassword) => {
  return regex.password.test(testPassword);
};

export default isPassword;
