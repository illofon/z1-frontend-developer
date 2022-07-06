import { combineReducers } from "redux";
import verificationReducer from "./verificationReducer/verificationReducer";
import processReducer from "./processReducer/processReducer";
const rootReducer = combineReducers({
  process: processReducer,
  verification: verificationReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
