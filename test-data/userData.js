export const users = {
  standard: {
    username: process.env.SAUCE_USERNAME,
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