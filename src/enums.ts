export enum ROUTE_PATHS {
  LOGIN = "/login",
  ARCADIA = "/arcadia",
  DASHBOARD = `${ROUTE_PATHS.ARCADIA}/dashboard`,
  PRICE_IS_RIGHT = `${ROUTE_PATHS.ARCADIA}/price-is-right`,
}
