export type TokenParams = {
  active: boolean;
  expiry_datetime: string;
  generated_datetime: string;
  obtained_by: string;
  token: string;
  user_id: number;
};

export default class Token {
  token: string;
  expiryDatetime: string; // change into Datetime
  generatedDateTime: string;
  obtainedBy: string; // This should be union of all the types where it can be obtained

  constructor(param: TokenParams) {
    this.token = param.token;
    this.expiryDatetime = param.expiry_datetime;
    this.generatedDateTime = param.generated_datetime;
    this.obtainedBy = param.generated_datetime;
  }
}
