export const users = {
  standard: {
    username: process.env.STANDARD_USER,
    password: process.env.PASSWORD
  },

  locked: {
    username: 'locked_out_user',
    password: 'secret_sauce'
  },

  invalid: {
    username: 'invalid_user',
    password: 'wrong_password'
  }
};