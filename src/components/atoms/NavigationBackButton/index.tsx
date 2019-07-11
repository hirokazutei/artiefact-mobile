import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import {
  NavigationScreenProp,
  HeaderBackButton,
  withNavigation
} from "react-navigation";
import { compose } from "recompose";
import { Action } from "../../../redux/types";

type NavigationProps = {
  navigation: NavigationScreenProp<any, any>;
};

type OwnProps = {
  action: Action;
} & NavigationProps;

type DispatchProps = {
  onPressBack: () => void;
};

export type Props = DispatchProps;

const BackButton: React.FC<Props> = (props: Props): React.ReactElement => {
  const { onPressBack } = props;
  return <HeaderBackButton onPress={onPressBack} />;
};

const enhancer = compose(
  withNavigation,
  connect(
    null,
    (dispatch: Dispatch, { navigation, action }: OwnProps): DispatchProps => {
      return {
        // Have the component above pass in a bounded Action
        onPressBack: () => {
          dispatch(action);
          navigation.goBack();
        }
      };
    }
  )
);

export default enhancer(BackButton);
