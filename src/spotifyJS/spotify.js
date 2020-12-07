// where all the spotify logic lives.

// for docs to get up and running
//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

//end points
export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "b22bf1899fe0418eba9ab2c18b38d8d2";

//scopes ("cheat" CRUD functionality using spotify API)
const scopes = [
  "user-read-currently-playing",
  "user-read-currently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// getting the access token
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&$scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
