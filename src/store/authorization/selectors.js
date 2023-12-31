export const authorizationLoadingSelect = state =>
  state.authorization.isLoggedIn;
export const authorizationRefreshingSelect = state =>
  state.authorization.isRefreshing;
export const authorizationUserSelect = state => state.authorization.user;
