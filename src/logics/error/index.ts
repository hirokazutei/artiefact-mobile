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
      const error = artiefactError.error as Error;
      // TODO Error Handler
      break;
    }
    case errorTypeNames.systemError: {
      const error = artiefactError.error as Error;
      // TODO Error Handler
      break;
    }
    case errorTypeNames.unknownError: {
      const error = artiefactError.error as Error;
      dispatch(actionCreators.handleUnknownErrorActionCreator(error));
      break;
    }
  }
};
