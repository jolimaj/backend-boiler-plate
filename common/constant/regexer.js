const REGULAR_EXPRESSION = {
  MOBILE: /^(09|\+639)\d{9}$/,
  PASSWORD:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*?&])[A-Za-z\d@$!%^*?&]{8,}$/,
  NAME: /^[A-Za-z]+$/,
};
// At least 8 characters long
// Contains at least one uppercase letter
// Contains at least one lowercase letter
// Contains at least one digit
// Contains at least one special character (e.g., !@#$%^&*)
module.exports = { REGULAR_EXPRESSION };