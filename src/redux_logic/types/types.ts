import { verificationTypes } from "../Actiontypes/verificationTypes";
import { Verification } from "../models/Verification";
import { Process } from "../models/Process";
import { processTypes } from "../Actiontypes/processTypes";

// Initial state interfaces
export interface VerificationState {
  pending: boolean;
  outcome: string;
  error: string | null;
  takenPhoto: string;
}

export interface ProcessState {
  step: string;
  intervalId: number;
}


// Verification

export interface SaveApprovedPhotoPayload {
  takenPhoto: string;
}

export interface FetchVerificationSuccessPayload {
  outcome: Verification;
}

export interface FetchVerificationFailurePayload {
  error: string;
}

export interface FetchVerificationRequest {
  type: typeof verificationTypes.FETCH_VERIFICATION_REQUEST;
}

export type FetchVerificationSuccess = {
  type: typeof verificationTypes.FETCH_VERIFICATION_SUCCESS;
  payload: FetchVerificationSuccessPayload;
};

export type FetchVerificationFailure = {
  type: typeof verificationTypes.FETCH_VERIFICATION_FAILURE;
  payload: FetchVerificationFailurePayload;
};

export type SaveApprovedPhoto = {
  type: typeof verificationTypes.SAVE_APPROVED_PHOTO,
  payload: SaveApprovedPhotoPayload,
} 

export type VerificationActions =
  | FetchVerificationRequest
  | FetchVerificationSuccess
  | FetchVerificationFailure
  | SaveApprovedPhoto;

  // Process

export interface ChangeStepPayload {
  step: Process
}

export interface SetIntervalIdPayload {
  intervalId: number
}

export type ChangeStep = {
  type: typeof processTypes.CHANGE_STEP,
  payload: string
}

export type SetIntervalId = {
  type: typeof processTypes.SET_INTERVAL_ID,
  payload: number,
}

export type ProcessActions = 
  | ChangeStep
  | SetIntervalId

