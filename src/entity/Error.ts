import { AxiosError } from "axios";

export type ErrorTypes =
  | "axiosError"
  | "networkError"
  | "positionError"
  | "systemError"
  | "unknownError";

export const errorTypeNames: Readonly<{ [key in ErrorTypes]: ErrorTypes }> = {
  axiosError: "axiosError",
  networkError: "networkError",
  positionError: "positionError",
  systemError: "systemError",
  unknownError: "unknownError"
};

export type EncompassingErrors = Error | AxiosError | PositionError;

export default class ArtiefactError extends Error {
  error: EncompassingErrors;
  type: ErrorTypes;

  constructor({
    error,
    errorType
  }: {
    error: EncompassingErrors;
    errorType: ErrorTypes;
  }) {
    super();
    this.error = error;
    this.type = errorType;
  }
}
