import store from "../../store";
import actionCreators from "./actionCreator";
import { AxiosError } from "axios";
import ArtiefactError, { errorTypeNames } from "../../entity/Error";

export const errorHandler = (artiefactError: ArtiefactError) => {
  const { dispatch } = store;
  switch (artiefactError.type) {
    case errorTypeNames.axiosError: {
      const axiosError = artiefactError.error as AxiosError;
      dispatch(actionCreators.handleNetworkErrorActionCreator(axiosError));
      break;
    }
    case errorTypeNames.positionError: {
      const positionError = artiefactError.error as PositionError;
      dispatch(actionCreators.handlePositionErrorActionCreator(positionError));
      break;
    }
    case errorTypeNames.networkError: {
      // @ts-ignore TODO: Implement Appropriate Error Handler
      const error = artiefactError.error as Error;
      break;
    }
    case errorTypeNames.systemError: {
      // @ts-ignore TODO: Implement Appropriate Error Handler
      const error = artiefactError.error as Error;
      break;
    }
    case errorTypeNames.unknownError: {
      const error = artiefactError.error as Error;
      dispatch(actionCreators.handleUnknownErrorActionCreator(error));
      break;
    }
  }
};
