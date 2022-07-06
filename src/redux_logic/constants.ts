export const ENDPOINT:string = "https://front-exercise.z1.digital/evaluations";

export enum STEPS  {
    PRISTINE = "PRISTINE",
    TAKING_PHOTO = "TAKING_PHOTO",
}

export enum POSSIBLE_OUTCOMES {
    NON_VALID = "Too Much Glare",
    VALID = "Approved"
}

export enum ICON_NAMES {
    APPROVED = "APPROVED",
    WARNING = "WARNING",
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED",
}

export enum ICON_SIZES {
    BIG = "BIG",
    NORMAL = "NORMAL",
    SMALL = "SMALL"
}