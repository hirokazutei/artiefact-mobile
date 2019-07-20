import { TokenParams } from "./Token";
import { ArtiefactUserParams } from "../User/ArtifactUser";

export type SignInResponse = {
  access_token: TokenParams;
  artiefact_user: ArtiefactUserParams;
};

export type SignUpResponse = {
  access_token: TokenParams;
  artiefact_user: ArtiefactUserParams;
};

export type initializationRespose = {
  artiefact_user: ArtiefactUserParams;
};
