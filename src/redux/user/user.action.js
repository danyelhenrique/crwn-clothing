import { UserActionsTypes } from "./user.types";

export function setCurrentUser(user) {
  return {
    type: UserActionsTypes.SET_CURRENT_USER,
    payload: user
  };
}
