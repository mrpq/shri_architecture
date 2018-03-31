import ActionCreator from "../../MyFlux/actionCreator";
import dispatcher from "../../MyFlux/dispatcher";

import { DATA_SENT_SUCCESS } from "./constants";

const ac = new ActionCreator(dispatcher);

export const actionDataSent = ac.createAction(DATA_SENT_SUCCESS);
