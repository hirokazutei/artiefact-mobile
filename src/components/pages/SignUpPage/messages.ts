const messages = {
  usernameWrongLength: "Username must be between 4 to 24 characters.",
  usernameUnavailable: (username: string): string => {
    return `Username ${username} is unavailable.`;
  },
  usernameHasIllegalChars:
    "Username only permits alphabets, numbers and the following characters: _+=-",
  usernameIsBlank: "Username field cannot be left blank.",
  passwordWrongLength: "Password must be between 8 to 32 characters.",
  passwordNeedsLowerAndUpper:
    "Password must contain both lowercase and uppercase.",
  passwordIsBlank: "Password field cannot be left blank.",
  emailIsInvalid: "The e-mail address provided is not valid.",
  emailIsBlank: "Email cannot be left blank.",
};

export default messages;
