type ThreeMinutes = {
  bonesaw: string;
  humanSpider: string;
};

type ThreeMinutes3 = {
  bonesaw: string;
  humanSpider: string;
};

type InitialState = ThreeMinutes3 & ThreeMinutes;

type Album = {
  artist: string;
  name: string;
  tracks: Track[];
  baseURI: string;
};

type Track = {
  number: number;
  title: string;
  url: string;
};
