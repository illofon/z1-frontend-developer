import { processTypes, stepTypes } from "../../Actiontypes/processTypes";
import { ProcessActions, ProcessState } from "../../types/types";

const initialState: ProcessState = {
  step: stepTypes.PRISTINE,
  intervalId: 0,
};

const processReducer = (state = initialState, action: ProcessActions) => {
  switch (action.type) {
    case processTypes.CHANGE_STEP:
      return {
        ...state,
        step: action.payload
      };
    case processTypes.SET_INTERVAL_ID:
      return {
        ...state,
        intervalId: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

export default processReducer;