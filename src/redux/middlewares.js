import reduxThunk from "redux-thunk";
import { createLogger } from "redux-logger";

const logger = createLogger();

const middlewares = [reduxThunk, logger];

export default middlewares;
