export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQDGf-B_ZscF93hhK7zTwmEpczgPwIWp0w0xlFR2p2X_AoTwLm6huseLso55nbd1aIYtVn1-2JWnQQCU1d9t36zdAcYIEh0bbOoHXzYaag8ry6g7eAwbuvPgr2hQyFg5yJsi3jXtA-bCX37TJl8mEWrCYQJkTVww7C0",
};
const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
export default reducer;
