// import ActionCreator from "../../MyFlux/ActionCreator";
import ActionCreator from "../../MyFlux/ActionCreator";
import { loggingDispatcher } from "../../MyFlux/Dispatcher";

import { DATA_SENT_SUCCESS } from "./constants";
const ac = new ActionCreator(loggingDispatcher);
export const actionDataSent = ac.createAction(DATA_SENT_SUCCESS);
