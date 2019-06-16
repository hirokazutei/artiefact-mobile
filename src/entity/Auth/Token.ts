export type TokenParams = {
  token: string;
  expiryDatetime: string; // change into Datetime
  generatedDateTime: string;
  obtainedBy: string;
};

export default class Token {
  token: string;
  expiryDatetime: string; // change into Datetime
  generatedDateTime: string;
  obtainedBy: string; // This should be union of all the types where it can be pbtained

  constructor(param: TokenParams) {
    this.token = param.token;
    this.expiryDatetime = param.expiryDatetime;
    this.generatedDateTime = param.generatedDateTime;
    this.obtainedBy = param.generatedDateTime;
  }
}
