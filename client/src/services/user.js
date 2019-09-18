import * as baseService from "./base";

let loggedIn = false;

function isLoggedIn() {
  return loggedIn;
}

async function checkLogin() {

  if (loggedIn) {
    return true;
  } else {
    baseService.populateAuthToken();
    try {
      let user = await me();
      loggedIn = true;
      console.log(user);
      return true;
    } catch (e) {
      return false;
    }
  }
}

async function login(email, password) {
  
  let response = await baseService.makeFetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
  if (response.ok) {
    let json = await response.json();
    baseService.setAuthToken(json.token);
    loggedIn = true;
    return json;
  } else if (response.status === 401) {
    let json = await response.json();
    throw json;
  }
}

async function googleLogin(token) {
    baseService.setAuthToken(token);
    loggedIn = true;
}

function logout() {
  baseService.clearAuthToken();
  loggedIn = false;
}

async function me() {
  return await baseService.get("/api/users/me");
}

export { isLoggedIn, checkLogin, login, logout, me, googleLogin };
