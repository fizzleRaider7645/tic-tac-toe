import * as types from ".";

export const setLoadedGames = (payload: any) => {
  return {
    type: types.LOAD_GAMES,
    payload,
  };
};

// export const loadGames = () => {
//     return dispatch: React.Dispatch => {
//         return fetch(`http://localhost:3000/games`, {
//             headers: {
//             'Content-Type': 'application/json'
//             }
//         }).then(res => res.json()).then(games => {
//             dispatch(setLoadedGames(games))
//         })
//     }
// }
