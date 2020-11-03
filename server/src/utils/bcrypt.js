const bcrypt = require('bcrypt');

const saltRounds = 10;

const encryptPassword = (pw) => {
  const hashPassword = bcrypt.hashSync(pw, saltRounds);

  return hashPassword;
};

const isComparedPassword = (password, hashPassword) => {
  const isCompared = bcrypt.compareSync(password, hashPassword);

  return isCompared;
};

module.exports = {
  encryptPassword,
  isComparedPassword,
};
