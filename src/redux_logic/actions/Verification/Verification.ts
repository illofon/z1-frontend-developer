import { verificationTypes } from "../../Actiontypes/verificationTypes";

import {
  FetchVerificationFailure,
  FetchVerificationFailurePayload,
  FetchVerificationRequest,
  FetchVerificationSuccess,
  FetchVerificationSuccessPayload,
  SaveApprovedPhoto,
} from "../../types/types";

export const fetchVerificationRequest = (): FetchVerificationRequest => ({
  type: verificationTypes.FETCH_VERIFICATION_REQUEST
});

export const fetchVerificationSuccess = (
  payload: FetchVerificationSuccessPayload
): FetchVerificationSuccess => ({
  type: verificationTypes.FETCH_VERIFICATION_SUCCESS,
  payload
});

export const fetchVerificationFailure = (
  payload: FetchVerificationFailurePayload
): FetchVerificationFailure => ({
  type: verificationTypes.FETCH_VERIFICATION_FAILURE,
  payload
});

export const saveApprovedPhoto = (
  payload: any
): SaveApprovedPhoto => ({
  type: verificationTypes.SAVE_APPROVED_PHOTO,
  payload
})
