import { verificationTypes } from "../../Actiontypes/verificationTypes";
import { POSSIBLE_OUTCOMES } from "../../constants";
import { VerificationActions, VerificationState } from "../../types/types";

const initialState: VerificationState = {
  pending: false,
  outcome: POSSIBLE_OUTCOMES.NON_VALID,
  error: null,
  takenPhoto: "",
};

const verificationReducer = (state = initialState, action: VerificationActions) => {
  switch (action.type) {
    case verificationTypes.FETCH_VERIFICATION_REQUEST:
      return {
        ...state,
        pending: true
      };
    case verificationTypes.FETCH_VERIFICATION_SUCCESS:
      return {
        ...state,
        pending: false,
        outcome: action.payload.outcome,
        error: null
      };
    case verificationTypes.FETCH_VERIFICATION_FAILURE:
      return {
        ...state,
        pending: false,
        outcome: "",
        error: action.payload.error
      };
    case verificationTypes.SAVE_APPROVED_PHOTO:
      return {
        ...state,
        takenPhoto: action.payload
      }
    default:
      return {
        ...state
      };
  }
};

export default verificationReducer;