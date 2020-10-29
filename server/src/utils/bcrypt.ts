import bcrypt from 'bcrypt';

const saltRounds = 10;

const encryptPassword = (pw: string) => {
  const hashPassword = bcrypt.hashSync(pw, saltRounds);

  return hashPassword;
};

const isComparedPassword = (password: string, hashPassword: string) => {
  const isCompared = bcrypt.compareSync(password, hashPassword);

  return isCompared;
};

export { encryptPassword, isComparedPassword };
