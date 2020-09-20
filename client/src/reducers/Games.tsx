import * as types from '../actions'

const initial: any = []
export default (state = initial, action: any) => {
    switch(action.type) {
        case types.LOAD_GAMES:
            return action.payload
        default:
            return state;
    }
}