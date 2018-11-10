import { takeEvery } from "redux-saga/effects";
import * as types from "../constants/ActionTypes";

//USES A GENERATOR TO SEND A MESSAGE TO THE WEBSOCKET WITH THE PARAMS 
const handleNewMessage = function* handleNewMessage(params) {
    yield takeEvery(types.ADD_MESSAGE, (action) => {
        action.author = params.username
        params.socket.send(JSON.stringify(action))
    })
}

export default handleNewMessage;