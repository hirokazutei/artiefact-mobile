export type ArtiefactUserParams = {
  birthday: string;
  id: string;
  register_datetime: Date;
  status: string;
  username: string;
};

export default class ArtiefactUser {
  birthday: string;
  id: string;
  registerDatetime: Date;
  status: string;
  username: string;

  constructor(param: ArtiefactUserParams) {
    this.birthday = param.birthday;
    this.id = param.id;
    this.registerDatetime = param.register_datetime;
    this.status = param.status;
    this.username = param.username;
  }
}
