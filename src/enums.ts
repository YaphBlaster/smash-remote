export enum ROUTE_PATHS {
  LOGIN = "/login",
  ARCADIA = "/arcadia",
  REMOTE = `${ROUTE_PATHS.ARCADIA}/remote`,
}

export enum VISUALIZER_MODES {
  "Discrete frequencies" = 0,
  "240 Bands" = 1,
  "120 Bands" = 2,
  "80 Bands" = 3,
  "60 Bands" = 4,
  "40 Bands" = 5,
  "30 Bands" = 6,
  "20 Bands" = 7,
  "10 Bands" = 8,
  "Graph" = 10,
}
