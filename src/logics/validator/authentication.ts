const checkHasPasswordSpecial = (value: string): boolean => {
  const checkHasPasswordSpecialRegExp = new RegExp("[*@!#%&()^~{}]+");
  return checkHasPasswordSpecialRegExp.test(value);
};

const checkHasLower = (value: string): boolean => {
  const checkHasLowerRegExp = new RegExp("[a-z]+");
  return checkHasLowerRegExp.test(value);
};

const checkHasUpper = (value: string): boolean => {
  const checkHasUpperRegExp = new RegExp("[A-Z]+");
  return checkHasUpperRegExp.test(value);
};

const checkHasNumber = (value: string): boolean => {
  const checkHasNumberRegExp = new RegExp("[0-9]+");
  return checkHasNumberRegExp.test(value);
};

const checkPasswordLength = (value: string): boolean => {
  const checkNumberRegExp = new RegExp("^.{8,32}$");
  return checkNumberRegExp.test(value);
};

const checkUsernameLength = (value: string): boolean => {
  const checkNumberRegExp = new RegExp("^.{4,24}$");
  return checkNumberRegExp.test(value);
};

const checkUsernameAllowedChars = (value: string): boolean => {
  const checkUsernameAllowedCharsRegExp = new RegExp("^[A-z0-9_+=-]+$");
  return checkUsernameAllowedCharsRegExp.test(value);
};

type EmailValidator = {
  valid: boolean;
};

export const emailValidator = (value: string): EmailValidator => {
  const emailRegExp = new RegExp(
    "^[A-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-z0-9.-]+\\.[A-z]{1,}$"
  );
  return { valid: emailRegExp.test(value) };
};

type UsernameConditions = {
  hasLength: boolean;
  hasOnlyAllowedChars: boolean;
};

export const usernameValidator = (value: string): UsernameConditions => {
  return {
    hasLength: checkUsernameLength(value),
    hasOnlyAllowedChars: checkUsernameAllowedChars(value),
  };
};

type PasswordConditions = {
  hasSpecial: boolean;
  hasLower: boolean;
  hasUpper: boolean;
  hasNumber: boolean;
  hasLength: boolean;
};

export const passwordValidator = (value: string): PasswordConditions => {
  return {
    hasSpecial: checkHasPasswordSpecial(value),
    hasLower: checkHasLower(value),
    hasUpper: checkHasUpper(value),
    hasNumber: checkHasNumber(value),
    hasLength: checkPasswordLength(value),
  };
};
