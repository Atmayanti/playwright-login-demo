export const loginTestData = [
  {
    testCase: 'L-01 Login with valid username and password',
    username: 'standard_user',
    password: 'secret_sauce',
    isValid: true,
  },
  {
    testCase: 'L-02 Login with invalid username and valid password',
    username: 'standard_user123',
    password: 'secret_sauce',
    isValid: false,
    expectedError: 'Epic sadface: Username and password do not match any user in this service'
  },
  {
    testCase: 'L-03 Login with valid username and invalid password',
    username: 'standard_user',
    password: 'WrongPass123',
    isValid: false,
    expectedError: 'Epic sadface: Username and password do not match any user in this service'
  },
  {
    testCase: 'L-04 Login with invalid username and invalid password',
    username: 'tomsmith123',
    password: 'WrongPass123',
    isValid: false,
    expectedError: 'Epic sadface: Username and password do not match any user in this service'
  },
  {
    testCase: 'L-05 Login with empty email',
    username: '',
    password: 'secret_sauce',
    isValid: false,
    expectedError: 'Epic sadface: Username is required'
  },
  {
    testCase: 'L-06 Login with empty password',
    username: 'standard_user',
    password: '',
    isValid: false,
    expectedError: 'Epic sadface: Password is required'
  },
  {
    testCase: 'L-07 Login with empty username and password',
    username: '',
    password: '',
    isValid: false,
    expectedError: 'Epic sadface: Username is required'
  }
];
