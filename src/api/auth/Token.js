export class Token {
  static TOKEN_KEY = "planner_access_token";

  static get() {
    return localStorage.getItem(this.TOKEN_KEY) || "";
  }

  static set(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  static exists() {
    return !!this.get();
  }

  static remove() {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
