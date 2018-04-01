// import ActionCreator from "../../MyFlux/ActionCreator";
import { LoggerActionCreator } from "../../MyFlux/ActionCreator";
import dispatcher from "../../MyFlux/Dispatcher";

import { DATA_SENT_SUCCESS } from "./constants";
const ac = new LoggerActionCreator(dispatcher);
export const actionDataSent = ac.createAction(DATA_SENT_SUCCESS);
