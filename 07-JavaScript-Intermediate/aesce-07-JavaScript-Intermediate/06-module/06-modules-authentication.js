const emailValidator = /^[^\d\W_][\w.-]*@[a-z0-9-]*[.][a-z]*$/;
const passwordValidator = /^[a-z0-9!@#$%^&*]{8,}$/i;
const emailErr = 'tolong masukan email yang valid';
const passwordErr = 'tolong masukan password sesuai ketentuan';
const validMsg = 'Welcome to The Jungle';

export default function validateLoginData(email, password) {
  if (email.match(emailValidator) === null) {
    return emailErr;
  }

  if (password.match(passwordValidator) === null) {
    return passwordErr;
  }

  return validMsg;
}
