type ThreeMinutes = {
  bonesaw: string;
  humanSpider: string;
};

type InitialState = ThreeMinutes;

export enum ROUTE_PATHS {
  LOGIN = "/login",
  ARCADIA = "/arcadia",
  DASHBOARD = `${ROUTE_PATHS.ARCADIA}/dashboard`,
}
