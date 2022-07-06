import { processTypes } from "../../Actiontypes/processTypes";

import {
 ChangeStep,
 SetIntervalId
} from "../../types/types";

export const changeStep = (
    payload: string
  ): ChangeStep => ({
    type: processTypes.CHANGE_STEP,
    payload
  });
  
export const setIntervalId = (
  payload: number
): SetIntervalId => ({
  type: processTypes.SET_INTERVAL_ID,
  payload
});
