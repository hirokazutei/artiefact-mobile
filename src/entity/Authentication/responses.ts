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

export type CheckUsernameAvailabilityResponse = {
  is_avialable?: boolean;
  username: string;
};

export type initializationRespose = {
  artiefact_user: ArtiefactUserParams;
};
